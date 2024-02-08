import React from "react";

import { BlogPost } from "@/types/Blog";
import { formatTimeStamp } from "../../../util/formatTimestamp";
import { truncateString } from "../../../util/truncateString";

interface Props {
  blogPost: BlogPost;
}

// Globally used blogcard. Timestamp and title to be manipulated with formatTimestamp and truncateString functions respectively.
export const BlogCard: React.FC<Props> = ({ blogPost }) => {
  return (
    <div className="shadow-lg w-[285px] h-[217px]">
      <div className="bg-[url('/card-header-placeholder.png')] bg-no-repeat bg-cover h-[72px] px-4">
        <div className="h-full flex justify-between items-end pb-2.5">
          <span className="text-white text-[8px] italic">
            {formatTimeStamp(blogPost?.created_at)}
          </span>
          <span className="text-white text-[8px] italic">
            {blogPost?.category?.name}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h1 className="text-2xl font-bold">
          {truncateString(blogPost.title, 12)}
        </h1>
        <p className="text-[0.5rem] text-[#868686]">{blogPost.content}</p>
      </div>
    </div>
  );
};
