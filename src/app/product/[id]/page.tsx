"use client";
import React from "react";
import { Container } from "@chakra-ui/react";
import { Apiservice } from "../../../service/api.service";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import ProductDetailed from "@/components/product_detailes_item/page";
import Similar_products from "@/components/similar_products/page";
import NotProduct from "@/app/cart/not-product";
import LoadingProduct from "@/components/shared/loading/loading";

const ProductDetailedPage = () => {
  const { id } = useParams();

  const getData = async () => {
    try {
      const data = await Apiservice.fetching(`products/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: [id],
    queryFn: getData,
  });
  return (
    <>
      <section style={{ height: isLoading ? "400px" : "auto" }}>
        <Container maxW="1200px">
          {isLoading ? (
            <LoadingProduct />
          ) : (
            <>
              {isError ? (
                <NotProduct />
              ) : (
                <>
                  <ProductDetailed {...data} />
                  <hr />
                  <Similar_products {...data} />
                </>
              )}
            </>
          )}
        </Container>
      </section>
    </>
  );
};

export default ProductDetailedPage;
