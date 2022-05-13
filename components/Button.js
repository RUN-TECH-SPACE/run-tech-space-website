import Link from "next/link";
import React from "react";

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
        <Link href={href}>
          <a className={`btn btn-secondary ${className ? className : ""}`}>
            {children}
          </a>
        </Link>
      )}

      {type === "select" && (
        <button
          type='button'
          {...props}
          className={`btn ${className ? className : ""}`}
        >
          {children}
        </button>
      )}

      {type === "link" && (
        <Link href={href}>
          <a className={`btn btn-primary ${className ? className : ""}`}>
            {children}
          </a>
        </Link>
      )}
    </>
  );
}

export default Button;
