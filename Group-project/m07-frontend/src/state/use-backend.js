import { useEffect, useState } from "react";

export const useBackend = uname => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch user data when the username change
  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://m07.herokuapp.com/${uname}`);
        const data = await res.json();
        setData(data);
      } catch (err) {
        console.error(err);
        setError(new Error("could not load profile"));
      } finally {
        setIsLoading(false);
      }
    };

    load();
  }, [uname]);

  return {
    isLoading,
    data,
    error
  };
};
