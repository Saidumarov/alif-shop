"use client";
import { Container, Skeleton, Stack } from "@chakra-ui/react";
import cls from "./index.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { Apiservice } from "@/service/api.service";
import CustomImage from "../image";

interface BannerT {
  id: string;
  img: string;
}
export default function Banner() {
  // fetch data
  const getData = async () => {
    try {
      const data = await Apiservice.fetching(`banners`);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const { data, isLoading, isError, error } = useQuery<BannerT[]>({
    queryKey: ["banners"],
    queryFn: getData,
  });

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className={cls.banner}>
      <Container maxW="1200px">
        <div className={cls.banner_wrap}>
          {isLoading ? (
            <Stack>
              <Skeleton className={cls.banner_loading}></Skeleton>
            </Stack>
          ) : (
            <Slider {...settings}>
              {data?.map((el, i) => (
                <Link href={"/"} key={i} className={cls.banner_img_w}>
                  <CustomImage product={el.img} />
                </Link>
              ))}
            </Slider>
          )}
        </div>
      </Container>
    </section>
  );
}
