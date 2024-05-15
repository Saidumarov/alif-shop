"use client";
import { useQuery } from "@tanstack/react-query";
import Banner from "@/components/banner";
import { Container } from "@chakra-ui/react";
import { Product } from "@/components/product";
import { Apiservice } from "@/service/api.service";
import Category from "@/components/layouts/category";
import { useEffect } from "react";
import useCardStore from "@/store/useCardStore";

const Home = () => {
  const { loadCards, cards } = useCardStore();
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
    if (card) {
      const cards = JSON.parse(card);
      loadCards(cards);
    }
  }, [cards]);

  return (
    <>
      <Category />
      <Container maxW={"1200px"}>
        <Banner />
        <div>
          <Product products={{ dataRespons, isError, isLoading, error }} />
        </div>
      </Container>
    </>
  );
};

export default Home;
