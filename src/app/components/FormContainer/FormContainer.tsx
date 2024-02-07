"use client";

import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { getCategories } from "@/api/apiCategories";
import { addBlog } from "@/api/apiBlogs";
import { Category } from "@/types/Category";
import { InputSection } from "./InputSection/InputSection";
import { SelectSection } from "./SelectSection/SelectSection";
import { ImageSection } from "./ImageSection/ImageSection";
import { ContentSection } from "./ContentSection/ContentSection";

export const FormContainer = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [formError, setFormError] = useState("");

  const { toast } = useToast();

  const handleCategoryChange = (newValue: string) => {
    setCategoryId(newValue);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setImage(selectedFile);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !categoryId || !content || !image) {
      setFormError("Alle velden zijn verplicht!");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category_id", categoryId);
    if (image) {
      formData.append("image", image);
    }

    try {
      await addBlog(formData);
    } catch (error) {
      console.error(error);
      setFormError(
        "Er is een fout opgetreden bij het toevoegen van de blogpost"
      );
      return;
    }

    // Set all inputs to empty
    setTitle("");
    setContent("");
    setCategoryId("");
    setImage(null);
    setFormError("");
    toast({ description: "Blogpost succesvol toegevoegd!" });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getCategories();
      if (response) {
        setCategories(response);
      }
    };
    fetchData();
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full sm:w-[30%] bg-white p-2 sm:p-6"
    >
      <h1 className="text-2xl font-bold text-[#2B2B2B]">
        Plaats een blog bericht
      </h1>
      <InputSection label="Berichtnaam" value={title} onChange={setTitle} />
      <SelectSection
        label="Categorie"
        categories={categories}
        categoryId={categoryId}
        handleCategoryChange={handleCategoryChange}
      />
      <ImageSection
        label="Afbeelding"
        handleFileChange={handleFileChange}
        image={image}
      />
      <ContentSection label="Bericht" value={content} onChange={setContent} />
      {formError && <p className="text-red-500 mt-2">{formError}</p>}
      <div className="flex items-center justify-center">
        <Button
          className="bg-[#F27623] rounded-full mt-[42px] text-xs px-12"
          type="submit"
        >
          Bericht aanmaken
        </Button>
      </div>
    </form>
  );
};
