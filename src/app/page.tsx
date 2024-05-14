"use client";
import { useQuery } from "@tanstack/react-query";
import Banner from "@/components/banner";
import { Container } from "@chakra-ui/react";
import { Product } from "@/components/product";
import { Apiservice } from "@/service/api.service";
import { ProductType } from "@/types";
import Category from "@/components/layouts/category";

const Home = () => {
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
  } = useQuery<ProductType[]>({
    queryKey: ["products"],
    queryFn: getData,
  });

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
