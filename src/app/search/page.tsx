"use client";
import { Apiservice } from "@/service/api.service";
import { Container, Heading } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import cls from "@/components/product/index.module.scss";
import Card from "@/components/shared/card/card";
import { ProductType } from "@/types";
import Image from "next/image";
import LoadingProduct from "@/components/shared/loading/loading";
import { Category } from "@/context";
const Search = () => {
  const uri = window.location.href;
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const api = uri.split("?q=")[1];
  const { category } = useContext(Category);
  useEffect(() => {
    const getData = async () => {
      if (typeof window !== "undefined") {
        const uri = window.location.href;
        const api = uri.split("?q=")[1];
        if (api) {
          setIsLoading(true);
          try {
            const response = await Apiservice.fetching(`search?query=${api}`);
            setData(response);
          } catch (error) {
            console.error(error);
          } finally {
            setIsLoading(false);
          }
        }
      }
      if (api === "") {
        setIsLoading(false);
      }
    };

    getData();
  }, [api, category]);

  return (
    <section
      style={{ height: isLoading ? "400px" : "auto" }}
      className={cls.product_wrap}
    >
      <Container className="pb-28 pt-12" maxW={"1200px"}>
        {isLoading ? (
          <LoadingProduct />
        ) : (
          <>
            <Heading size={"lg"}>Qidiruv natijalari {api} </Heading>
            <div className="pt-2 pb-5">
              <p>{data?.length} ta mahsulot topildi</p>
            </div>
            <div className={cls.item_container}>
              {data?.map((product: ProductType) => (
                <Card key={product._id} product={product} />
              ))}
            </div>
          </>
        )}
        {isLoading ? null : data?.length === 0 ? (
          <div className="flex items-center gap-10  justify-center">
            <Image
              src={"/no-result.png"}
              width={200}
              height={200}
              alt="not found"
              className="block"
            />
            <p>Soʻrovingizga mos mahsulotlar topilmadi</p>
          </div>
        ) : null}
      </Container>
    </section>
  );
};

export default Search;
