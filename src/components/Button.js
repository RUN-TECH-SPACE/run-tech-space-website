import React from "react";
import { Link } from "react-router-dom";

function Button({ type, children, className, href, ...props }) {
  return (
    <>
      {(type === "primary" || type === "submit" || type === undefined) && (
        <button
          type={type === "submit" ? "submit" : "button"}
          className={`btn btn-primary  ${className ? className : ""}`}
        >
          {children}
        </button>
      )}

      {type === "secondary" && (
        <button
          type='button'
          className={`btn btn-secondary ${className ? className : ""}`}
        >
          {children}
        </button>
      )}

      {type === "select" && (
        <button
          type='button'
          {...props}
          className={`btn btn-secondary ${className ? className : ""}`}
        >
          {children}
        </button>
      )}

      {type === "link" && (
        <Link
          to={href}
          className={`btn btn-primary ${className ? className : ""}`}
        >
          {children}
        </Link>
      )}
    </>
  );
}

export default Button;
