"use client";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Search, { SearchProps } from "antd/es/input/Search";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { CgMenu } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import Catalog from "./catalog";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import useCardStore from "@/store/useCardStore";
import { useRouter } from "next/navigation";
import { Category } from "@/context";

const Header = () => {
  const { setCategory } = useContext(Category);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isactive, setIsactive] = useState(100);
  const { cards } = useCardStore();
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const searchDb = [
    {
      title: "Iphone",
    },
    {
      title: "Samsung",
    },
    {
      title: "Xiaomi",
    },
    {
      title: "MacBook",
    },
    {
      title: "Victus",
    },
    {
      title: "Acer",
    },
  ];
  const root = useRouter();
  const handelSearch = (value: string) => {
    root.push(`/search/${value}`);
    setIsFocused(false);
  };
  const onSearch: SearchProps["onSearch"] = (value) => {
    handelSearch(value);
    setCategory(value);
  };
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Avtorizatsiya alif shop</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Telefon raqam</FormLabel>
              <Input type="number" h={50} placeholder="+998-xx-xxx-xx-xx" />
            </FormControl>
            <Button
              backgroundColor={"rgb(51, 116, 255)"}
              color={"white"}
              colorScheme="rgb(39, 144, 248)"
              w={"100%"}
              h={50}
              my={3}
              onClick={onClose}
            >
              Davom etish
            </Button>
            <Button
              variant="outline"
              colorScheme="blue"
              w={"100%"}
              h={50}
              onClick={onClose}
              mb={5}
            >
              Bekor qilish
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Catalog state={{ isactive, setIsactive }} />
      <header className="text-gray-600 body-font bg-white sticky shadow-md top-0 w-full z-20">
        <div className=" mx-auto flex  p-5 justify-between  w-[1200px] max-[1230px]:w-[95%]">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 gap-5  max-[775px]:hidden">
            <Link href={"/"}>
              <Image
                src="/images/alifshop-logo.svg"
                className="max-[1000px]:hidden"
                width={120}
                height={120}
                alt="nor found"
              />
            </Link>
            <Button
              className=" gap-2 py-5 max-[1280px]:mr-4 "
              backgroundColor={"rgb(51, 116, 255)"}
              color={"white"}
              colorScheme="rgb(39, 144, 248)"
              h={45}
              onClick={() =>
                isactive === 100 ? setIsactive(0) : setIsactive(100)
              }
            >
              {isactive === 100 ? (
                <CgMenu size={25} />
              ) : (
                <IoCloseOutline size={25} />
              )}

              <p className="text-[14px] max-[1180px]:hidden">
                Tovarlar katalogi
              </p>
            </Button>
          </div>
          <nav className="flex items-center w-[70%] max-[1280px]:w-[80%] max-[1000px]:w-[90%] max-[775px]:w-[100%] ">
            <div className="relative w-full">
              <Search
                placeholder="Tavarlarni izlash"
                enterButton
                size="large"
                className="w-full  max-[775px]:w-[100%]"
                onSearch={onSearch}
                onChange={(e) => (setValue(e.target.value), setIsFocused(true))}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <div
                style={{ height: isFocused ? "225px" : "0px" }}
                className=" overflow-hidden ease-in duration-300 w-full  bg-white shadow-lg absolute rounded-t-lg rounded-b-lg mt-1"
              >
                {searchDb?.map((el, i) => (
                  <Link
                    href={`/search/${el.title}`}
                    onClick={() => setCategory(el?.title)}
                    key={i}
                    className=" block text-slate-500 font-[500] text-[14px] cursor-pointer p-2  hover:bg-[#f5f7f7] pl-12 hover:text-[#4043ff] rounded-md 
                transition-all"
                  >
                    {el.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex gap-3 max-[775px]:hidden">
              <Link
                href={"/cart"}
                className="flex flex-wrap justify-center items-center ml-5 relative"
              >
                <span
                  className={`text-center absolute w-[20px] h-[20px] rounded-full ${
                    cards?.length > 0 ? "bg-[#5338ff]" : ""
                  } inline text-[13px] text-white font-[600] top-[-8px] right-2 `}
                >
                  {cards?.length > 0 ? cards?.length : ""}
                </span>
                <FiShoppingCart size={20} className="hover:text-[#5338ff]" />
                <p className="text-sm/[14px] w-full text-center">Savat</p>
              </Link>

              <Link
                href={"/wishes"}
                className="flex flex-wrap justify-center items-center"
              >
                <FaRegHeart size={20} className="hover:text-[#5338ff]" />
                <p className="text-sm/[14px] w-full text-center">Saralangan</p>
              </Link>
              <Button
                onClick={() => onOpen()}
                colorScheme="blue"
                borderWidth={2}
                variant="outline"
              >
                Krish
              </Button>
              <p className="font-[500] flex items-center justify-between">
                <span>РУС </span> / <span className="text-black"> UZB</span>
              </p>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
