import { category } from "@/db";
import Link from "next/link";
import React from "react";
import { GoChevronDown } from "react-icons/go";

const Category = () => {
  return (
    <>
      <div className="mx-auto flex p-5 justify-between items-center  w-[1200px] relative  max-[1230px]:w-[95%] max-[1150px]:hidden">
        {category.map((el, i) => (
          <Link
            href={"/"}
            className=" text-slate-500 font-[500] text-[14px] cursor-pointer hover:text-black hover:underline
            transition-all"
            key={i}
          >
            {el.title}
          </Link>
        ))}
      </div>
      <div className="mx-auto  p-5 justify-between items-center  relative hidden  w-[95%] max-[1150px]:flex max-[780px]:hidden">
        {category.slice(0, 5).map((el, i) => (
          <Link
            href={"/"}
            className=" text-slate-500 font-[500] text-[14px] cursor-pointer hover:text-black hover:underline
            transition-all"
            key={i}
          >
            {el.title}
          </Link>
        ))}
        <GoChevronDown className="absolute right-[1.5px]" />
      </div>
    </>
  );
};

export default Category;
