import React from "react";

export default function Header({ subtitle }) {
  return (
    <>
      {subtitle && <h1>{subtitle}</h1>}
    </>
  );
}
