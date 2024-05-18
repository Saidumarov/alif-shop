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
import { useParams } from "next/navigation";
const Search = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const { category } = useContext(Category);
  const text = id.toString().split("%20").join(" ");
  useEffect(() => {
    const getData = async () => {
      if (id) {
        setIsLoading(true);
        try {
          const response = await Apiservice.fetching(`search?query=${id}`);
          setData(response);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      }
      if (id === "") {
        setIsLoading(false);
      }
    };

    getData();
  }, [id, category]);

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
            <Heading size={"lg"}>Qidiruv natijalari {text} </Heading>
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
