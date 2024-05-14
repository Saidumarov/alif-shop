import { categoryTop } from "@/db";
import { Container, Heading } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";

interface State {
  state: {
    isactive: number;
    setIsactive: React.Dispatch<React.SetStateAction<number>>;
  };
}

const Catalog = (state: State) => {
  const { isactive, setIsactive } = state.state;

  return (
    <>
      <div
        style={{ top: `-${isactive}%` }}
        className={`w-full h-screen bg-[#f5f7f7] fixed z-10 `}
      >
        <Container maxW={"1200px"}>
          <div className="w-full flex justify-between">
            <div className="w-[20%] ml-[-4px] h-screen pt-[97px] max-[1000px]:w-[30%] max-[600px]:w-[100%]">
              {categoryTop?.map((el, i) => (
                <Link href={"/"} key={i}>
                  <p
                    className="text-slate-500 font-[500] text-[14px] cursor-pointer p-2  hover:bg-white hover:text-[#4043ff] rounded-md 
                  transition-all"
                  >
                    {el.title}
                  </p>
                </Link>
              ))}
            </div>
            <div className="w-[80%] h-screen bg-white pt-[120px] relative flex gap-10 flex-wrap max-[1000px]:w-[70%] max-[600px]:hidden">
              <span
                onClick={() => setIsactive(100)}
                className="absolute top-[120px] right-[100px] cursor-pointer"
              >
                <IoCloseOutline size={30} />
              </span>
              <div className="ml-10">
                <Heading size={"md"}>Smartfonlar va telefonlar</Heading>
                <Link
                  href={"/"}
                  className="py-1 block cursor-pointer text-slate-600  hover:text-[#4043ff]"
                >
                  Apple iPhone
                </Link>
                <Link
                  href={"/"}
                  className="py-1 block cursor-pointer text-slate-600  hover:text-[#4043ff]"
                >
                  Tecno smartfonlar
                </Link>
                <Link
                  href={"/"}
                  className="py-1 block cursor-pointer text-slate-600  hover:text-[#4043ff]"
                >
                  Xiaomi smartfonlar
                </Link>
                <Link
                  href={"/"}
                  className="py-1 block cursor-pointer text-slate-600  hover:text-[#4043ff]"
                >
                  Vivo smartfonlar
                </Link>
                <Link
                  href={"/"}
                  className="py-1 block cursor-pointer text-slate-600  hover:text-[#4043ff]"
                >
                  Honor smartfonlar
                </Link>
                <Link
                  href={"/"}
                  className="py-1 block cursor-pointer text-slate-600  hover:text-[#4043ff]"
                >
                  Samsung smartfonlar
                </Link>
                <Link
                  href={"/"}
                  className="py-1 block cursor-pointer text-slate-600  hover:text-[#4043ff]"
                >
                  Smartfonlar
                </Link>
                <Link
                  href={"/"}
                  className="py-1 block cursor-pointer text-slate-600  hover:text-[#4043ff]"
                >
                  Tugmali telefonlar
                </Link>
              </div>
              <div>
                <Heading size={"md"}>Gadjetlar</Heading>
                <Link
                  href={"/"}
                  className="py-1 block cursor-pointer text-slate-600  hover:text-[#4043ff]"
                >
                  Aqlli-soat
                </Link>
                <Link
                  href={"/"}
                  className="py-1 block cursor-pointer text-slate-600  hover:text-[#4043ff]"
                >
                  Pulsometrlar
                </Link>
                <Link
                  href={"/"}
                  className="py-1 block cursor-pointer text-slate-600  hover:text-[#4043ff]"
                >
                  Virtual haqiqat ko'zoynaklari
                </Link>
                <Link
                  href={"/"}
                  className="py-1 block cursor-pointer text-slate-600  hover:text-[#4043ff]"
                >
                  Fitnes-brasletlar
                </Link>
                <Link
                  href={"/"}
                  className="py-1 block cursor-pointer text-slate-600  hover:text-[#4043ff]"
                >
                  Bolalar aqlli soatlari
                </Link>
                <Link
                  href={"/"}
                  className="py-1 block cursor-pointer text-slate-600  hover:text-[#4043ff]"
                >
                  Blog uchun tovarlar
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Catalog;
