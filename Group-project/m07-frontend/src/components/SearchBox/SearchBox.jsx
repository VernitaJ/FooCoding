import React from "react";

const SearchBox = ({ searchInput, searchChanges, focusSearch }) => {
  const styleInput = {
    width: "280px",
    border: "2px solid #ccc",
    borderRadius: "5px",
    marginLeft: "2.3rem",
    padding: "5px",


  }
  return (

    <form className="search">
      <input
        style={styleInput}
        value={searchInput}
        onChange={searchChanges}
        ref={focusSearch}
        type="search"
        name="search"
        placeholder="Search user..."
      />
    </form>
  );
}

export default SearchBox;

