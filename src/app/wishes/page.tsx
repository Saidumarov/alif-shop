"use client";
import useLikeStore from "@/store/uselikeStore";
import { Button, Container, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import cls from "@/components/product/index.module.scss";
import Card from "@/components/shared/card/card";
import { FaRegHeart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import useCardStore from "@/store/useCardStore";
const Wishes = () => {
  const { likes, loadLikes } = useLikeStore((state) => state);
  const { loadCards } = useCardStore();

  const root = useRouter();

  useEffect(() => {
    const card = localStorage.getItem("cards");
    const like = localStorage.getItem("likes");
    if (card) {
      const cards = JSON.parse(card);
      loadCards(cards);
    }
    if (like) {
      const likes = JSON.parse(like);
      loadLikes(likes);
    }
  }, []);
  return (
    <>
      <Container maxW={"1200px"}>
        {likes?.length > 0 ? (
          <>
            <Heading size={"xl"} className="flex items-center gap-2 pt-12">
              Saralanganlar <FaRegHeart size={30} className="text-[#5338ff]" />
            </Heading>
            <section
              style={{ paddingBottom: "50px" }}
              className={cls.product_wrap}
            >
              <div className={cls.item_container}>
                {likes?.map((product) => {
                  return <Card key={product?._id} product={product} />;
                })}
              </div>
            </section>
          </>
        ) : (
          <div className="text-center pt-[150px] pb-[100px] mx-auto">
            <Heading size={"lg"} className="">
              Saralangan mahsulotlar <br /> ro'yxati xozircha bo'sh
            </Heading>
            <p className="pt-1">
              uzoq vaqt qidirmaslik uchun o'zingizga yoqqan <br /> tovarlarni
              saqlang
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
        )}
      </Container>
    </>
  );
};

export default Wishes;
