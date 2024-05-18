import { Category } from "@/context";
import { CategoryData, categoryDb } from "@/db";
import { Container, Heading } from "@chakra-ui/react";
import Link from "next/link";
import React, { useContext } from "react";
import { IoCloseOutline } from "react-icons/io5";

interface State {
  state: {
    isactive: number;
    setIsactive: React.Dispatch<React.SetStateAction<number>>;
  };
}

const Catalog = (state: State) => {
  const { isactive, setIsactive } = state.state;
  const { setCategory, setCategoryT } = useContext(Category);

  return (
    <>
      <div
        style={{ top: `-${isactive}%` }}
        className={`w-full h-screen bg-[#f5f7f7] fixed z-10 `}
      >
        <Container maxW={"1200px"}>
          <div className="w-full flex justify-between">
            <div className="w-[20%] ml-[-4px] h-screen pt-[97px] max-[1000px]:w-[30%] max-[600px]:w-[100%]">
              {categoryDb?.map((el, i) => (
                <Link
                  href={`/category/${el?.path}`}
                  onClick={() => (
                    setCategory(el?.path),
                    setCategoryT(el?.path),
                    setIsactive(100)
                  )}
                  key={i}
                >
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
                {CategoryData?.map((el, i) => {
                  if (el.type === "telifon") {
                    return (
                      <Link
                        key={i}
                        href={`/category/${el.type}/${el?.path}`}
                        onClick={() => (
                          setCategory(`${el.type}/${el?.path}`),
                          setCategoryT(el?.type),
                          setIsactive(100)
                        )}
                        className="py-1 block cursor-pointer text-slate-600  hover:text-[#4043ff]"
                      >
                        {el.title}
                      </Link>
                    );
                  }
                })}
              </div>
              <div>
                <Heading size={"md"}>Noutbuklar, kompyuterlar</Heading>
                {CategoryData?.map((el, i) => {
                  if (el.type === "kompyuter") {
                    return (
                      <Link
                        href={`/category/${el.type}/${el?.path}`}
                        onClick={() => (
                          setCategory(`${el.type}/${el?.path}`),
                          setCategoryT(el?.type),
                          setIsactive(100)
                        )}
                        key={i}
                        className="py-1 block cursor-pointer text-slate-600  hover:text-[#4043ff]"
                      >
                        {el.title}
                      </Link>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Catalog;
