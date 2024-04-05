import React, { useState } from "react";
import FormInput from "./input/FormInput";
import FormButton from "./button/Button";
import FileAttachment from "./fileAttachment/FileAttachment";
import SocialNetworks from "./socialNetworks/SocialNetworks";
import s from "./ContactForm.module.css";

function ContactForm({ create, reject }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userName", userName);
    formData.append("email", email);
    formData.append("body", body);

    if (selectedFile) {
      formData.append("selectedFile", selectedFile);
    }

    setUserName("");
    setEmail("");
    setBody("");
    setSelectedFile(null);

    const formDataObject = {};
    for (let [key, value] of formData.entries()) {
      formDataObject[key] = value;
    }

    console.log(formDataObject);

    // try {
    //   await axios.post("/send-email", formData);
    //   alert("Email sent successfully!");
    // } catch (error) {
    //   console.error("Error sending email:", error);
    //   alert("Failed to send email. Please try again later.");
    // }
  };

  return (
    <div className={s.contacts}>
      <div className={s.contactsBg}></div>
      <div>
        <h3 className={s.contactsTitle}>Contact Me</h3>
        <hr />
      </div>
      <form onSubmit={handleSubmit}>
        <div className={s.contactsInfo}>
          <h2 className={s.contactsLable}>
            Let me know if you want to talk about a potential collaboration. I'm
            available for freelance work.
          </h2>
          <div className={s.contactsEmail}>
            <a href="mailto:infoname@mail.com">infoname@mail.com</a>
          </div>
        </div>
        <FormInput
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="What’s your name?"
          required
        />
        <FormInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Your email"
          required
        />
        <FormInput
          value={body}
          onChange={(e) => setBody(e.target.value)}
          type="text"
          placeholder="Tell me about your project"
        />
        <div className={s.contactsBtns}>
          <FormButton>Get a Quote</FormButton>
          <div className={s.contactsAttach}>
            <FileAttachment setSelectedFile={setSelectedFile} />
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.2737 8.71116C15.3608 8.62385 15.4643 8.55458 15.5782 8.50732C15.6921 8.46006 15.8142 8.43573 15.9375 8.43573C16.0608 8.43573 16.1829 8.46006 16.2968 8.50732C16.4107 8.55458 16.5141 8.62385 16.6012 8.71116L22.2262 14.3362C22.3135 14.4232 22.3828 14.5267 22.4301 14.6406C22.4773 14.7545 22.5016 14.8766 22.5016 14.9999C22.5016 15.1232 22.4773 15.2453 22.4301 15.3592C22.3828 15.4731 22.3135 15.5766 22.2262 15.6637L16.6012 21.2887C16.4252 21.4647 16.1864 21.5636 15.9375 21.5636C15.6885 21.5636 15.4498 21.4647 15.2737 21.2887C15.0977 21.1126 14.9988 20.8739 14.9988 20.6249C14.9988 20.376 15.0977 20.1372 15.2737 19.9612L20.2368 14.9999L15.2737 10.0387C15.1864 9.95157 15.1171 9.84812 15.0699 9.73422C15.0226 9.62032 14.9983 9.49822 14.9983 9.37491C14.9983 9.25159 15.0226 9.12949 15.0699 9.01559C15.1171 8.9017 15.1864 8.79824 15.2737 8.71116Z"
                  fill="#8643DC"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.5 15C7.5 14.7514 7.59877 14.5129 7.77459 14.3371C7.9504 14.1613 8.18886 14.0625 8.4375 14.0625H20.625C20.8736 14.0625 21.1121 14.1613 21.2879 14.3371C21.4637 14.5129 21.5625 14.7514 21.5625 15C21.5625 15.2486 21.4637 15.4871 21.2879 15.6629C21.1121 15.8387 20.8736 15.9375 20.625 15.9375H8.4375C8.18886 15.9375 7.9504 15.8387 7.77459 15.6629C7.59877 15.4871 7.5 15.2486 7.5 15Z"
                  fill="#8643DC"
                />
              </svg>
            </a>
          </div>
        </div>
      </form>
      <SocialNetworks />
    </div>
  );
}

export default ContactForm;
