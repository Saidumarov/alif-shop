"use client";
import { Button, Container } from "@chakra-ui/react";
import cls from "./index.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";
import useCardStore from "@/store/useCardStore";
import CustomImage from "@/components/image";
import { DecrentBtn, Delete, IncrentBtn } from "@/constants";
import NotProduct from "./not-product";
import { ProductType } from "@/types";
import useLikeStore from "@/store/uselikeStore";
const Cart = () => {
  const { cards, updateCard, addCard, removeCard, loadCards } = useCardStore();
  const [subtotal, setSubtotal] = useState(0);

  //
  useEffect(() => {
    // subtotal
    const totalSubtotal = cards.reduce((acc, item) => {
      return acc + item.realPrice * item.count;
    }, 0);
    setSubtotal(totalSubtotal);
  }, [cards]);

  //   delete product
  const onDelete = (id: string) => {
    removeCard(id);
  };

  //    counter
  const counter = (el: ProductType, type: string) => {
    if (type === "inc") {
      const obj = {
        ...el,
        count: el.count + 1,
      };
      updateCard(obj);
    } else {
      const obj = {
        ...el,
        count: el.count - 1,
      };
      updateCard(obj);
    }
  };

  useEffect(() => {
    const card = localStorage.getItem("cards");
    if (card) {
      const cards = JSON.parse(card);
      loadCards(cards);
    }
  }, []);
  return (
    <Container maxW={"1200px"}>
      {cards?.length > 0 ? (
        <>
          <h2 className={cls.svat}>Savatcha</h2>
          <div className={cls.shopping_cart_wrap}>
            <div className={cls.shopping_cart_left_w}>
              {cards &&
                cards?.map((el, i) => (
                  <div className={cls.shopping_cart_left} key={i}>
                    <p className={cls.piece}>
                      Mahsulotdan {el?.piece} dona bor
                    </p>
                    <div className={cls.shopping_cart_left_img}>
                      <CustomImage product={el?.imgags[0]?.img} />
                    </div>
                    <h3 className={cls.shopping_cart_left_title}>
                      {el.titel.length > 50
                        ? el.titel.substring(0, 50) + "..."
                        : el.titel}
                    </h3>
                    <div className={cls.count}>
                      <button
                        disabled={el?.count === 1}
                        onClick={() => counter(el, "dic")}
                      >
                        <DecrentBtn />
                      </button>
                      <p> {el.count}</p>
                      <button
                        disabled={el?.count === el.piece}
                        onClick={() => counter(el, "inc")}
                      >
                        <IncrentBtn />
                      </button>
                    </div>
                    <p className={cls.price}>
                      {el?.realPrice
                        ?.toString()
                        ?.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                      so'm
                    </p>
                    <button
                      className={cls.delete}
                      onClick={() => onDelete(el?._id)}
                    >
                      <Delete />
                    </button>
                  </div>
                ))}
            </div>
            <div className={cls.shopping_cart_right}>
              <p className={cls.cart_number}>
                Mahsulotlar soni: {cards?.length}
              </p>
              <div className={cls.prices_w_p}>
                <p> Miqdor:</p>
                <p>
                  <b>
                    {subtotal
                      ?.toString()
                      ?.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    so'm
                  </b>
                </p>
              </div>
              <Link href={"/checkout"}>
                <Button className={cls.order}>BUYURTMA</Button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <NotProduct />
      )}
    </Container>
  );
};

export default Cart;
