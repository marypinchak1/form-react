import React from "react";
// eslint-disable-next-line
import s from "./Button.module.css";

export default function FormButton({ children, bootsrtap_classes, ...props }) {
  return (
    <button {...props} className={[bootsrtap_classes, s.btn].join(" ")}>
      {children}
    </button>
  );
}
