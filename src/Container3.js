import React, { useContext } from "react";
import MyContext from "./MyProvider";

function Container3() {
  const { text } = useContext(MyContext);
  return (
    <div>
      <p>This is 3</p>
      <h1>{text}</h1>
    </div>
  );
}

export default Container3;
