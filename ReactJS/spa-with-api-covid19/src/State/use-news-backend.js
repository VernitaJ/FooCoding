import { useEffect, useState } from "react";

export const NewsStories = () => {
  const [news, setNews] = useState([]);
  console.log("news", news)
  // const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  async function fetchData() {
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?country=gb&apiKey=986a408f8bbe4b628257aaa2367bcf4e"
    );
    response
      .json()
      .then(news => setNews(news.articles))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    news
  };
};
