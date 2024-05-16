"use client";
import React, { FC, useEffect, useState } from "react";
import cls from "./index.module.scss";
import { Button, useToast } from "@chakra-ui/react";
import Link from "next/link";
import { usePrice } from "@/hooks/usePrice";
import CustomImage from "@/components/image";
import { ProductType } from "@/types";
import { IoCart } from "react-icons/io5";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { DecrentBtn, IncrentBtn } from "@/constants";
import useLikeStore from "@/store/uselikeStore";
import useCardStore from "@/store/useCardStore";
const Card: FC<{ product: ProductType }> = ({ product }) => {
  const { cards, updateCard, addCard, removeCard, loadCards } = useCardStore();
  const { likes, removeLike, addLike, loadLikes } = useLikeStore();
  const [isactive, setisActive] = useState(false);
  const toast = useToast();
  // tartiblangan  eski narx
  const oldPrice = usePrice(product?.oldPrice);

  // tartiblangan narx
  const realPrice = usePrice(product?.realPrice);

  //oyiga bulib tulash
  const preMonth = product?.realPrice / 12;

  // Cart active item
  useEffect(() => {
    const isActive = cards?.some((el: any) => el?._id === product?._id);
    setisActive(isActive);
  }, [cards]);

  const handelCount = (id: string, type: string) => {
    const newcard = cards?.find((el) => el._id === id);
    if (newcard) {
      if (type === "inc") {
        const obj = {
          ...newcard,
          count: newcard.count + 1,
        };
        updateCard(obj);
      } else {
        const obj = {
          ...newcard,
          count: newcard.count - 1,
        };
        updateCard(obj);
      }
    }
  };

  const card = cards?.find((el: ProductType) => el._id === product._id);
  const count = card ? card.count : 1;
  return (
    <>
      <article className={cls.item}>
        <span className={cls.like}>
          {likes?.some((el: any) => el?._id === product?._id) ? (
            <span onClick={() => removeLike(product?._id)}>
              <FaHeart size={20} className="text-[#5338ff]" />
            </span>
          ) : (
            <span onClick={() => addLike(product)}>
              <FaRegHeart size={20} className="text-[#5338ff]" />
            </span>
          )}
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
        {isactive ? (
          <Button isActive={false} className={cls.btn_count}>
            <button
              onClick={() => handelCount(product?._id, "dic")}
              className="flex w-[40%] items-center justify-center outline-none"
              disabled={count === 1}
            >
              <DecrentBtn />
            </button>
            <p>{count}</p>
            <button
              onClick={() => handelCount(product?._id, "inc")}
              className="flex w-[40%] items-center justify-center outline-none"
              disabled={count === product.piece}
            >
              <IncrentBtn />
            </button>
          </Button>
        ) : (
          <Button
            onClick={(e) => (
              e.stopPropagation(),
              addCard(product),
              toast({
                position: "top",
                title: `Tovar savatda`,
                status: "success",
                isClosable: true,
                description: `${product.titel.substring(0, 25)}...`,
              })
            )}
            className={cls.btn}
          >
            Savatga <IoCart />
          </Button>
        )}
      </article>
    </>
  );
};

export default Card;
