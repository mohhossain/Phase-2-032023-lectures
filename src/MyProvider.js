import { useState, useEffect, createContext } from "react";

export const MyContext = createContext({
  dogs: [],
  newDog: () => {},
});

function MyProvider({ children }) {
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/dogs")
      .then((res) => res.json())
      .then((data) => setDogs(data));
  }, []);

  const newDog = (dog) => {
    fetch("http://localhost:3000/dogs", {
      method: "POST",
      headers: {
        "content-type": "Application/json",
      },
      body: JSON.stringify(dog),
    })
      .then((res) => res.json())
      .then((data) => setDogs([...dogs, data]));
  };

  const editDog = (dog) => {
    // makes a patch
  };

  return (
    <MyContext.Provider
      value={{ dogs: dogs, newDog: newDog, editDog: editDog }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default MyProvider;
