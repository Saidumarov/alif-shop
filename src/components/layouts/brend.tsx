import { Heading } from "@chakra-ui/react";
import React from "react";
import "./index.scss";
import { Images } from "@/db";
import Image from "next/image";
const Brend = () => {
  return (
    <div className="w-full">
      <h1 className="title">Mashhur brendlar</h1>
      <div className="w-full flex justify-between flex-wrap max-[775px]:hidden ">
        {Images?.map((el, i) => (
          <div
            key={i}
            className="w-[130px] h-[130px] bg-[#f7f9fa] flex items-center justify-center mt-5 rounded-md cursor-pointer"
          >
            <Image
              className="rounded-lg"
              src={el}
              alt="not found"
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
      <div className="w-full hidden justify-between flex-wrap max-[775px]:flex ">
        {Images?.slice(0, 6).map((el, i) => (
          <div
            key={i}
            className="w-[130px] h-[130px] bg-[#f7f9fa] flex items-center justify-center mt-5 rounded-md cursor-pointer"
          >
            <Image
              className="rounded-lg"
              src={el}
              alt="not found"
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brend;
