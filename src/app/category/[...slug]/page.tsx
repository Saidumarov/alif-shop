"use client";
import { Container } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { Apiservice } from "../../../service/api.service";
import { useQuery } from "@tanstack/react-query";
import { Category } from "../../../context";
import { useContext } from "react";
import Category_Item from "@/components/catregory-item";
import NotProduct from "@/components/not-found";
export default function CategoriyPage() {
  const { id } = useParams();
  const { category } = useContext(Category);
  const getData = async () => {
    try {
      const data = await Apiservice.fetching(`filter/${category}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [id],
    queryFn: getData,
  });

  if (error || data?.length === 0) {
    return (
      <Container maxW={"1200px"}>
        <NotProduct
          product={{
            name: "Nimadir oʻxshamadi",
            description:
              "Qidiruvni amalga oshira olmadik, yana bir bor urinib koʻring",
            btn: "Bosh sahifaga qaytish",
            clik: "/",
          }}
        />
      </Container>
    );
  }
  return (
    <>
      <section>
        <Container maxW={"1200px"}>
          <Category_Item product={{ data, isError, isLoading }} />
        </Container>
      </section>
    </>
  );
}
