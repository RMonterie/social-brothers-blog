import React from "react";

import { Textarea } from "@/components/ui/textarea";

interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export const ContentSection: React.FC<Props> = ({ label, value, onChange }) => {
  return (
    <>
      <label htmlFor="message" className="text-xs text-[#404040]">
        {label}
      </label>
      <Textarea
        name="message"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="sm:w-[403px] h-[237px]"
      />
    </>
  );
};
