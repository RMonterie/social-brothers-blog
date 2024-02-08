import React from "react";

import { Camera } from "lucide-react";

interface Props {
  label: string;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  image: File | null;
}

// custom styled input type=image component
export const ImageSection: React.FC<Props> = ({
  label,
  handleFileChange,
  image,
}) => {
  return (
    <>
      <label htmlFor="custom-input" className="text-xs text-[#404040]">
        {label}
      </label>
      <div className="flex flex-row items-center mb-6">
        <input
          type="file"
          id="custom-input"
          className="sr-only"
          accept="image/*"
          onChange={handleFileChange}
        />
        <label
          htmlFor="custom-input"
          className="flex items-center text-sm text-slate-500 mr-4 py-2 px-4 text-sm bg-[#fafafa] cursor-pointer"
        >
          <Camera className="w-4 h-4 mr-4 text-[#888888]" />
          <span className="bg-[#7d7d7d] rounded-full text-white text-[10px] px-3">
            {image ? image.name : "Kies bestand"}
          </span>
        </label>
      </div>
    </>
  );
};
