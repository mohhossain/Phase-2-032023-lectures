import React from "react";
import Container3 from "./Container3";

function Container2({ children }) {
  return (
    <div>
      {children}
      <p>This is 2</p>

      <Container3></Container3>
    </div>
  );
}

export default Container2;
