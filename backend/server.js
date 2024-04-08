const express = require("express");
const nodemailer = require("nodemailer");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware for parsing JSON body
app.use(express.json());

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Multer upload configuration
const upload = multer({ storage: storage });

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "example@gmail.com",
    pass: "example",
  },
});

// Route for sending email
app.post("/send-email", upload.single("attachment"), async (req, res) => {
  const { userName, email, body } = req.body;
  const attachment = req.file;

  try {
    // Send email logic using Nodemailer
    await transporter.sendMail({
      from: '"Contact Form" <example@gmail.com>',
      to: "marypinchak1@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <p>Name: ${userName}</p>
        <p>Email: ${email}</p>
        <p>Message: ${body}</p>
      `,
      attachments: attachment ? [{ path: attachment.path }] : [],
    });

    res.status(200).send("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email.");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
