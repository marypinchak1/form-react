import React, { useState, useRef } from "react";
import s from "./FileAttachment.module.css";

function FileAttachment() {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  // Function to handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  // Function to trigger file input click
  const handleAttachClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div style={{ position: "relative" }}>
      {/* File input field */}
      <input
        type="file"
        id="fileInput"
        onChange={handleFileChange}
        style={{ display: "none" }}
        ref={fileInputRef}
      />

      {/* Button to trigger file selection */}
      <label htmlFor="fileInput" onClick={handleAttachClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          style={{ cursor: "pointer" }}
          onClick={handleAttachClick}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.78171 1.17007C9.53073 0.421042 10.5466 0.000244141 11.6059 0.000244141C12.6652 0.000244141 13.6811 0.421042 14.4301 1.17007C15.1791 1.91909 15.5999 2.93499 15.5999 3.99427C15.5999 5.05355 15.1791 6.06944 14.4301 6.81847L7.52171 13.7269C7.30841 13.9402 7.05518 14.1095 6.77647 14.225C6.49776 14.3405 6.19903 14.4 5.89733 14.4001C5.28802 14.4002 4.70363 14.1582 4.27271 13.7275C3.84178 13.2967 3.59963 12.7124 3.59952 12.1031C3.5994 11.4938 3.84134 10.9094 4.27211 10.4785L10.9741 3.77527L11.8237 4.62487L5.12051 11.3269C5.01863 11.4287 4.93781 11.5497 4.88267 11.6828C4.82754 11.8159 4.79916 11.9586 4.79916 12.1027C4.79916 12.2467 4.82754 12.3894 4.88267 12.5225C4.93781 12.6556 5.01863 12.7766 5.12051 12.8785C5.22239 12.9803 5.34333 13.0612 5.47645 13.1163C5.60956 13.1714 5.75223 13.1998 5.89631 13.1998C6.04039 13.1998 6.18305 13.1714 6.31617 13.1163C6.44928 13.0612 6.57023 12.9803 6.67211 12.8785L13.5805 5.97007C13.84 5.7106 14.0458 5.40257 14.1862 5.06356C14.3266 4.72455 14.3989 4.36121 14.3989 3.99427C14.3989 3.62733 14.3266 3.26398 14.1862 2.92497C14.0458 2.58596 13.84 2.27793 13.5805 2.01847C13.321 1.759 13.013 1.55318 12.674 1.41276C12.335 1.27234 11.9716 1.20006 11.6047 1.20006C11.2378 1.20006 10.8744 1.27234 10.5354 1.41276C10.1964 1.55318 9.88837 1.759 9.62891 2.01847L2.51531 9.13327C1.69009 9.97906 1.23143 11.116 1.2387 12.2976C1.24598 13.4793 1.71861 14.6104 2.55418 15.446C3.38974 16.2816 4.52092 16.7542 5.70256 16.7615C6.8842 16.7687 8.02112 16.3101 8.86691 15.4849L15.7753 8.57527L16.6249 9.42487L9.71531 16.3333C8.6415 17.3685 7.20425 17.9408 5.71278 17.9271C4.22131 17.9133 2.79481 17.3147 1.74022 16.26C0.685622 15.2052 0.0872054 13.7786 0.0737193 12.2872C0.0602332 10.7957 0.632756 9.35852 1.66811 8.28487L8.78171 1.16887V1.17007Z"
            fill="#637085"
          />
        </svg>
      </label>

      {/* Display selected file title */}
      {selectedFile && (
        <p className={s.selectedFileTitle}>
          Selected File: {selectedFile.name}
        </p>
      )}
    </div>
  );
}

export default FileAttachment;
