"use client";
import React, { FC } from "react";
import cls from "./index.module.scss";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
import usePrice from "@/hooks/usePrice";
import CustomImage from "@/components/image";
import { ProductType } from "@/types";
import { IoCart } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
const Card: FC<{ product: ProductType }> = ({ product }) => {
  // tartiblangan  eski narx
  const oldPrice = usePrice(product?.oldPrice);

  // tartiblangan narx
  const realPrice = usePrice(product?.realPrice);

  //oyiga bulib tulash
  const preMonth = product?.realPrice / 12;

  return (
    <>
      <article className={cls.item}>
        <span className={cls.like} onClick={(e) => e.stopPropagation()}>
          <FaRegHeart size={20} color="#555" />
        </span>
        <Link href={`/product/${product?._id}`}>
          <div className={cls.img_wrap}>
            {product?.isDiscounts ? (
              <p className={cls.is_discount}>Chegirma</p>
            ) : (
              ``
            )}
            {product?.imgags?.slice(0, 1).map((el: any, i: number) => (
              <CustomImage key={i} product={el.img} titel={product?.titel} />
            ))}
          </div>
          <div className={cls.item_text_wrap}>
            <h3 className={cls.title_item}>
              {product?.titel?.length > 35
                ? product?.titel.substring(0, 35) + "..."
                : product?.titel}
            </h3>
            <p className={cls.pre_month}>
              {preMonth.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
              so'm/oyiga
            </p>
            <p className={cls.old_price}>{oldPrice} so`m</p>
            <p className={cls.real_price}>{realPrice} so`m</p>
          </div>
        </Link>
        <Button onClick={(e) => e.stopPropagation()} className={cls.btn}>
          Savatga <IoCart />
        </Button>
      </article>
    </>
  );
};

export default Card;
