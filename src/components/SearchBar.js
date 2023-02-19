import React from "react";

function SearchBar({ onSearch }) {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar">
      <input className="search" type="text" placeholder="Search Posts" onChange={handleChange} />
    </div>
  );
}
export default SearchBar;
