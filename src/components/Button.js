import React from "react";

function Button({ type, children }) {
  return type === "primary" || type === undefined ? (
    <button className='btn btn-primary'>{children}</button>
  ) : (
    <button className='btn btn-secondary'>{children}</button>
  );
}

export default Button;
