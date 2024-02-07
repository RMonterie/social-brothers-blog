import { BlogCard } from "@/components/BlogCard/BlogCard";
import { BlogPost } from "@/types/Blog";
import React from "react";

interface Props {
  blogs: BlogPost[];
}

export const BlogCardContainer: React.FC<Props> = ({ blogs }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
      {blogs?.map((blog) => (
        <BlogCard blogPost={blog} key={blog.id} />
      ))}
    </div>
  );
};
