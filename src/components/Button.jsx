import React from "react";

export default function Button({ children, ...props }) {
  return (
    <button className="btn btn-outline-light m-2" {...props}>
      {children}
    </button>
  );
}
