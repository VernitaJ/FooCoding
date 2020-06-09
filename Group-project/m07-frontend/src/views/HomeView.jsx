import React, { useState, useEffect, useRef } from "react";
import { UsersList } from "../state/use-users-list";
import SearchBox from "../components/SearchBox/SearchBox";
import UsersListLayout from "../layouts/HomeViewLayout/UsersListLayout";

const HomeView = ({ uname }) => {
  const { users } = UsersList(uname);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const focusSearch = useRef(null)

  // useEffect - FOCUS ON SEARCH INPUT
  useEffect(() => { focusSearch.current.focus() }, [])

  const handleChange = e => {
    setSearchInput(e.target.value);
  };
  //I’ve trying to figure it out if it’s possible to managing the state outside the home view.jsx. But couldn't make it

  useEffect(() => {
    const filteredUsers = users.filter(user => {
      return (
        user.name.toString().toLowerCase().includes(searchInput) ||
        user.surname.toString().toLowerCase().includes(searchInput)
      );
    });
    setSearchResults(filteredUsers);
  }, [users, searchInput]);

  return (
    <div>
      <SearchBox searchChanges={handleChange} focusSearch={focusSearch} />
      <UsersListLayout props={searchResults} />

    </div>
  );
};

export default HomeView;
