import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Spinner } from "@/components/Spinner/Spinner";
import { Category } from "@/types/Category";

interface Props {
  label: string;
  categories: Category[];
  categoryId: string;
  handleCategoryChange: (newValue: string) => void;
  placeholder?: string;
}

// Select component making use of Shadcn UI's Select component
export const SelectSection: React.FC<Props> = ({
  label,
  categories,
  categoryId,
  handleCategoryChange,
  placeholder = "Geen categorie",
}) => {
  return (
    <>
      <label htmlFor="category" className="text-xs text-[#404040]">
        {label}
      </label>
      <Select value={categoryId} onValueChange={handleCategoryChange}>
        <SelectTrigger className="w-full bg-[#fafafa] mb-6 text-xs">
          <SelectValue
            placeholder={
              <span className="text-[#c5c5c5] italic text-xs">
                {placeholder}
              </span>
            }
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {categories.length ? (
              categories.map((category, index) => (
                <SelectItem value={category.id.toString()} key={index}>
                  {category.name}
                </SelectItem>
              ))
            ) : (
              <Spinner />
            )}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};
