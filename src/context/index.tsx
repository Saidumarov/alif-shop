"use client";
import { createContext, useState, ReactNode } from "react";

// Define the context with a default value
export const Category = createContext({
  category: "",
  setCategory: (category: string) => {},
  categoryT: "",
  setCategoryT: (category: string) => {},
});

interface CategoryProviderProps {
  children: ReactNode;
}

function CategoryProvider({ children }: CategoryProviderProps) {
  const [category, setCategory] = useState("");
  const [categoryT, setCategoryT] = useState("");

  return (
    <Category.Provider
      value={{
        category,
        setCategory,
        categoryT,
        setCategoryT,
      }}
    >
      {children}
    </Category.Provider>
  );
}

export default CategoryProvider;
