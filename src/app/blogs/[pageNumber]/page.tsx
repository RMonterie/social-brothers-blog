"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

import { BlogCardContainer } from "./components/BlogCardContainer/BlogCardContainer";
import { Spinner } from "@/components/Spinner/Spinner";
import { PaginationContainer } from "./components/PaginationContainer/PaginationContainer";

import { BlogPost } from "@/types/Blog";
import { Link } from "@/types/Link";
import { getBlogs } from "@/api/apiBlogs";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [pages, setPages] = useState<Link[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const { pageNumber } = useParams<{ pageNumber: string }>();
  const prevPage = parseInt(pageNumber) - 1;
  const nextPage = parseInt(pageNumber) + 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, links } = await getBlogs(8, pageNumber);
        if (data && links) {
          // Get the first few pages and last 4 pages for pagination
          const firstPages = links.slice(0, 8);
          const lastFourPages = links.slice(-4);

          const resultArray = firstPages.concat(lastFourPages);
          setBlogs(data);
          setPages(resultArray);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setError("Geen blogs gevonden!");
        setLoading(false);
      }
    };
    fetchData();
  }, [pageNumber]);

  return (
    <div className="flex flex-col items-center justify-center py-16">
      {loading ? (
        <Spinner />
      ) : error ? (
        <h1 className="text-red-500 text-4xl font-extrabold">{error}</h1>
      ) : (
        <>
          <BlogCardContainer blogs={blogs} />
          <PaginationContainer
            pages={pages}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        </>
      )}
    </div>
  );
}
