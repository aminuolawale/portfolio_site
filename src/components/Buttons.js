import React from "react";

const Button = ({ text, size }) => {
  return (
    <a hfre="#!" className={`button button--${size} button--default`}>
      {text}
    </a>
  );
};

export default Button;
