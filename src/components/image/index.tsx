"use client";
import Image from "next/image";
import { useState } from "react";
import cls from "./index.module.scss";

const CustomImage = (product: any) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Image
        src={product?.product}
        alt={product?.titel || "Not Found"}
        width={10000}
        height={10000}
        className={`${isLoading ? cls.img_loading : cls.img_loading_disabled}`}
        onLoad={() => setIsLoading(false)}
        priority={true}
      />
    </>
  );
};

export default CustomImage;
