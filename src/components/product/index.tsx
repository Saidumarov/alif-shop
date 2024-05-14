"use client";
import { Container, Skeleton, Stack } from "@chakra-ui/react";
import cls from "./index.module.scss";
import Card from "../shared/card/card";
import { ProductType } from "@/types";
import LoadingCard from "../shared/loading";

interface ProductT {
  products: {
    dataRespons: ProductType[];
    isError: boolean;
    isLoading: boolean;
    error: any;
  };
}

export const Product = (products: ProductT) => {
  const { dataRespons, error, isError, isLoading } = products.products;

  return (
    <section className={cls.product_wrap}>
      <Container maxW="1200px">
        <h1 className={cls.title}>
          {isLoading ? (
            <Stack>
              <Skeleton className={cls.loading}></Skeleton>
            </Stack>
          ) : (
            <>
              <span>Chegirmalar🔥</span>
            </>
          )}
        </h1>
        <div className={cls.item_container}>
          {isLoading ? (
            <LoadingCard />
          ) : (
            dataRespons?.map((product) => {
              if (product.category === `kompyuter`) {
                return <Card key={product._id} product={product} />;
              }
            })
          )}
        </div>

        {isLoading ? (
          <></>
        ) : (
          <>
            <h1 className={cls.title}>
              <span>Sizni qiziqtirishi mumkin🔥</span>
            </h1>
            <div className={cls.item_container}>
              {dataRespons?.map((product) => {
                if (product.category === `telifon`) {
                  return <Card key={product._id} product={product} />;
                }
              })}
            </div>
          </>
        )}
      </Container>
    </section>
  );
};
