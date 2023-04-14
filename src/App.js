import { useState, useEffect } from "react";
import "./App.css";
import Countries from "./Countries";

function App() {
  // const [clickCounter, setClickCounter] = useState(0);
  // const [isClicked, setIsClicked] = useState(false);

  const [countryData, setCountryData] = useState([]);
  const [searchInput, setSearchInput] = useState("usa");
  const [performSearch, setPerformSearch] = useState(searchInput);

  // useEffect is a function that takes 2 parameters, and the first parameter is the callback and the second is dependency array

  // useEffect(() => {
  //   console.log("App has been rendered");
  //   document.title = clickCounter;
  // }, [clickCounter]);
  // [ ] => it will run after the app has been rendered
  // [ clickCounter ] => the useEffect will run everytime the state is updated

  // useEffect(() => {
  //   const intervalID = setInterval(() => {
  //     setClickCounter(clickCounter + 1);
  //   }, 1000);

  //   return () => {
  //     clearInterval(intervalID);
  //   };
  // }, [isClicked]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${performSearch}`)
      .then((res) => res.json())
      .then((data) => setCountryData(data));
  }, [performSearch]);

  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setPerformSearch(searchInput);
        }}
      >
        <label>Search Country: </label>
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          type="text"
        ></input>
      </form>
      <Countries countries={countryData}></Countries>
    </div>
  );
}

export default App;
