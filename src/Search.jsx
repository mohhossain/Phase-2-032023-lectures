import React, { useState } from "react";

function Search({ onSearch }) {
  const [search, setSearch] = useState("");

  function handleSearchInput(e) {
    setSearch(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onSearch(search);
  }
  return (
    <div style={{ backgroundColor: "lime" }}>
      <form onSubmit={handleSubmit}>
        <label>Search pokemon</label>
        <input onChange={handleSearchInput} type="text" value={search}></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default Search;
