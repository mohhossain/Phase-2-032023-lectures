import React from "react";
import CountryTile from "./CountryTile";

function Countries({ countries }) {
  console.log(countries);
  const countriesToDisplay = countries?.map((country) => {
    return (
      <CountryTile key={country.name.common} country={country}></CountryTile>
    );
  });
  return <div>{countriesToDisplay}</div>;
}

export default Countries;
