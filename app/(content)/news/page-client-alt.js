'use client';

import Link from "next/link";

import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import NewsList from "@/components/news-list";
import { useEffect, useState } from "react";

export default function NewsPage() {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState();

  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/news");
      if (!response.ok) {
        setError("Failed to fetch news");
        setIsLoading(false);
      }
      const news = await response.json();
      setIsLoading(false);
      setNews(news);
    }

    fetchNews();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  let newContent;

  if (news) {
    newContent = <NewsList news={news}></NewsList>;
  }

  return (
    <>
      <h1>News Page</h1>
      {newContent}
    </>
  );
}
