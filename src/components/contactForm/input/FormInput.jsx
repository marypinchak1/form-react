import React from "react";
import s from "./FormInput.module.css";

const FormInput = React.forwardRef((props, ref) => {
  return <input className={[s.FormInput].join(" ")} {...props} />;
});

export default FormInput;
