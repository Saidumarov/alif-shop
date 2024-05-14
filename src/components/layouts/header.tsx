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
import Search from "antd/es/input/Search";
import Link from "next/link";
import React, { useState } from "react";
import { CgMenu } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import Catalog from "./catalog";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import useCardStore from "@/store/useCardStore";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isactive, setIsactive] = useState(100);
  const { cards } = useCardStore();
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
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 gap-5  max-[775px]:m-0">
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
          <nav className="flex items-center w-[70%] max-[1280px]:w-[80%]max-[1000px]:w-[90%] max-[775px]:w-[100%] ">
            <Search
              placeholder="Tavarlarni izlash"
              allowClear
              enterButton
              size="large"
              className="w-[450px] max-[775px]:w-[100%]"
              //   onSearch={onSearch}
            />
            <div className="flex gap-3 max-[775px]:hidden">
              <button className="flex flex-wrap justify-center items-center ml-5 relative">
                <span
                  className={`absolute w-[20px] h-[20px] rounded-full ${
                    cards?.length > 0 ? "bg-[#5338ff]" : ""
                  } inline text-[13px] text-white font-[600] top-[-8px] right-2 `}
                >
                  {cards?.length > 0 ? cards?.length : ""}
                </span>
                <FiShoppingCart size={20} className="hover:text-[#5338ff]" />
                <p className="text-sm/[14px] w-full">Savat</p>
              </button>
              <button className="flex flex-wrap justify-center items-center">
                <FaRegHeart size={20} className="hover:text-[#5338ff]" />
                <p className="text-sm/[14px] w-full">Saralangan</p>
              </button>
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
