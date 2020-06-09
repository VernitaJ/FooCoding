import { useEffect, useState } from "react";

export const UsersList = () => {
  const [users, setUsers] = useState([]);
  //const [hasError, setErrors] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://m07.herokuapp.com/`);
      res
        .json()
        .then(users => setUsers(users))
        .catch(err => console.error(err));
    } fetchData();
  }, []);

  return {
    users
  };
};



