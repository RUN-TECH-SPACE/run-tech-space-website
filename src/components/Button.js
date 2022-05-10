import React from "react";

function Button({ type, children, className }) {
  return type === "primary" || type === undefined ? (
    <button
      type='button'
      className={`btn btn-primary  ${className ? className : ""}`}
    >
      {children}
    </button>
  ) : (
    <button
      type='button'
      className={`btn btn-secondary ${className ? className : ""}`}
    >
      {children}
    </button>
  );
}

export default Button;
