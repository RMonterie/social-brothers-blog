"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ArrowUpRightFromSquare } from "lucide-react";

import { getBlogs } from "@/api/apiBlogs";
import { BlogCard } from "@/components/BlogCard/BlogCard";
import { BlogPost } from "@/types/Blog";
import { Spinner } from "@/components/Spinner/Spinner";

export const RecentBlogContainer = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [visibleBlogPosts, setVisibleBlogPosts] = useState<BlogPost[]>([]);
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getBlogs(undefined, "1");
        if (data) {
          setBlogPosts(data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setError("Geen blogs gevonden!");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Calculate the total number of items to display based on the current page and items per page
    const totalItemsToDisplay = currentPage * itemsPerPage;

    // Update the visible blog posts based on the total items
    setVisibleBlogPosts(blogPosts.slice(0, totalItemsToDisplay));
  }, [blogPosts, currentPage, itemsPerPage]);

  const handleLoadNext = () => {
    setCurrentPage((previousPage) => previousPage + 1);
  };

  const handleNavigate = () => {
    router.push("/blogs/1");
  };

  return (
    <div className="bg-white">
      {loading ? (
        <Spinner />
      ) : error ? (
        <h1 className="text-red-500 text-4xl font-extrabold">{error}</h1>
      ) : (
        <div className="grid grid-cols 1 sm:grid-cols-2 gap-6 p-6 mx-auto overflow-x-auto sm:max-h-[506px]">
          {visibleBlogPosts.map((blogPost, index) => (
            <BlogCard key={index} blogPost={blogPost} />
          ))}
          <div className="w-full flex justify-center items-center">
            {visibleBlogPosts.length < blogPosts.length ? (
              <Button
                onClick={handleLoadNext}
                className="bg-[#F27623] rounded-full mt-[114px] text-xs px-12 mb-2 sm:mb-0"
              >
                Laad meer
              </Button>
            ) : (
              <Button
                onClick={handleNavigate}
                className="bg-[#F27623] rounded-full mt-[114px] text-xs px-12 mb-2 sm:mb-0"
              >
                Alle blogs{" "}
                <ArrowUpRightFromSquare className="text-white h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
