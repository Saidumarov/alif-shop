"use client";
import cls from "./index.module.scss";
import Slider from "react-slick";
import { Apiservice } from "../../service/api.service";
import { useQuery } from "@tanstack/react-query";
import { ProductType } from "@/types";
import Card from "../shared/card/card";
function Similar_products(product: ProductType) {
  const { category } = product;

  // fetch data
  const getData = async () => {
    try {
      const data = await Apiservice.fetching(`products`);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["get"],
    queryFn: getData,
  });

  // carausel settings
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <>
      <h3 className={cls.h3}>O'xshash mahsulotlar</h3>
      <Slider {...settings}>
        {data?.map((el: any, i: any) => {
          if (el.category === category) {
            return (
              <div className={cls.carausel_card} key={i}>
                <Card product={el} />
              </div>
            );
          }
        })}
      </Slider>
    </>
  );
}

export default Similar_products;
