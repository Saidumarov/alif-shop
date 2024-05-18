"use client";
import { useQuery } from "@tanstack/react-query";
import Banner from "@/components/banner";
import { Container } from "@chakra-ui/react";
import { Product } from "@/components/product";
import { Apiservice } from "@/service/api.service";
import { useEffect } from "react";
import useCardStore from "@/store/useCardStore";
import useLikeStore from "@/store/uselikeStore";
import Mobile from "@/components/layouts/mobile";
import Brend from "@/components/layouts/brend";
import CategoryTop from "@/components/layouts/category";

const Home = () => {
  const { loadCards } = useCardStore();
  const { loadLikes } = useLikeStore();

  // fetch data
  const getData = async () => {
    try {
      const data = await Apiservice.fetching(`products`);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const {
    data: dataRespons,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getData,
  });

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
      <CategoryTop />
      <Container maxW={"1200px"}>
        <Banner />
        <div>
          <Product products={{ dataRespons, isError, isLoading, error }} />
        </div>
        <Brend />
      </Container>
      <Mobile />
    </>
  );
};

export default Home;
