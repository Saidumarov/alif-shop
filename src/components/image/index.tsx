"use client";
import Image from "next/image";
import { useState } from "react";

const CustomImage = (product: any) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Image
        src={product?.product}
        alt={product?.titel || "Not Found"}
        width={10000}
        height={10000}
        className={`object-contain duration-700 ease-in-out group-hover:opacity-75f ${
          isLoading
            ? "scale-110 blur-2xl grayscale"
            : "scale-100 blur-0 grayscale"
        }}`}
        onLoad={() => setIsLoading(false)}
        priority={true}
      />
    </>
  );
};

export default CustomImage;
