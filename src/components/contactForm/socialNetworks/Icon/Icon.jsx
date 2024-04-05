import React from "react";
// eslint-disable-next-line
import s from "./Icon.module.css";

export default function SocialNetworksIcon({ children, ...props }) {
  return (
    <a {...props} className={s.socialNetworksIcon} target="_blank">
      {children}
    </a>
  );
}
