import { Button, Container, Heading } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

const NotProduct = () => {
  const root = useRouter();
  return (
    <Container>
      <div className="text-center pt-[150px] pb-[100px] mx-auto">
        <Heading size={"lg"} className="">
          Savat hozircha boʻsh
        </Heading>
        <p className="pt-1">
          Mahsulotlarni topish uchun katalogni ko'ring <br /> yoki qidiruvdan
          foydalaning
        </p>
        <Button
          className=" gap-2  max-[1280px]:mr-4 mt-5 "
          backgroundColor={"rgb(51, 116, 255)"}
          color={"white"}
          colorScheme="rgb(39, 144, 248)"
          h={50}
          onClick={() => root.push("/")}
        >
          Bosh sahifaga qaytish
        </Button>
      </div>
    </Container>
  );
};

export default NotProduct;
