import React, { useState } from "react";
import Books from "./Books";

const FilterBooks = props => {
  const [search, setSearch] = useState("");
  const [word, setWord] = useState("");

  const books = [
    { title: "love", text: "hellloooo" },
    { title: "hey", text: "there" }
  ];

  const onChange = event => {
    setSearch(event.target.value);
  };
  console.log(search);

  const handleInput = event => {
    event.preventDefault();
    setWord(search);
    setSearch("");
  };

  return (
    <div>
      <form onSubmit={handleInput}>
        <label>Search</label>
        <input type="text" onChange={onChange} value={search} />
      </form>
      <Books />
    </div>
  );
};

export default FilterBooks;
