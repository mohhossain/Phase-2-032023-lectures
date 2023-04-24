import React, { useContext } from "react";
import { MyContext } from "./MyProvider";

function Container() {
  const data = useContext(MyContext);
  return (
    <div>
      <p>This is 1</p>
      {data.dogs.map((dog) => {
        return (
          <div key={dog.id}>
            <h1>{dog.name}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default Container;
