import React from "react";

const Button = ({ text, size, action }) => {
  return (
    <a
      href="#!"
      className={`button button--${size} button--default`}
      onClick={action}
    >
      {text}
    </a>
  );
};

export default Button;
