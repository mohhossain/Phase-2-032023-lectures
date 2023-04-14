import React from "react";

function CountryTile({ country }) {
  return (
    <div>
      <h2>{country?.name.common}</h2>
      <p>{country?.population}</p>
      <p>{country?.capital}</p>
      <img src={country?.flags.png} />
    </div>
  );
}

export default CountryTile;
