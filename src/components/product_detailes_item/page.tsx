"use client";
import { useEffect, useState } from "react";
import cls from "./index.module.scss";
import CustomPaging from "./slider";
import { Button, Container } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ProductType } from "@/types";
import { usePrice } from "@/hooks/usePrice";
import useCardStore from "@/store/useCardStore";
import { IoCartOutline } from "react-icons/io5";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import useLikeStore from "@/store/uselikeStore";

const ProductDetailed = (product: ProductType) => {
  const {
    _id,
    titel,
    oldPrice,
    realPrice,
    piece,
    description,
    category,
    imgags,
    isDiscounts,
  } = product;
  window.document.title = titel;
  const [imga, setimga] = useState(false);
  const [active, setActive] = useState<any>(false);
  const [btnActive, setbtnActive] = useState("3 oy");
  const [subtotal, setSubtotal] = useState(0);
  const price = usePrice(realPrice);
  const old_price = usePrice(oldPrice);
  const { likes, removeLike, addLike, loadLikes } = useLikeStore();
  const navigator = useRouter();
  const { addCard, cards, loadCards } = useCardStore();
  // Mahsulotni korzinaga qo'shish funksiyasi
  const addTocart = () => {
    addCard(product);
    setActive(true);
    setimga(!imga);
  };

  // description data
  const lorem = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

  //  3,  6 ,  12 oy to'lov
  const btnPrice = (value: any) => {
    setbtnActive(value);
  };

  useEffect(() => {
    if (cards) {
      const isActive = cards?.find((el) => el._id === _id);
      setActive(isActive);
    }

    //  3,  6 ,  12 oy to'lov

    if (btnActive == "3 oy") {
      setSubtotal(realPrice / 3);
    }
    if (btnActive == "6 oy") {
      setSubtotal(realPrice / 6);
    }
    if (btnActive == "12 oy") {
      setSubtotal(realPrice / 12);
    }
  }, [_id, btnActive]);

  useEffect(() => {
    const card = localStorage.getItem("cards");
    const like = localStorage.getItem("likes");
    if (card) {
      const cards = JSON.parse(card);
      loadCards(cards);
    }
    if (like) {
      const likes = JSON.parse(like);
      loadLikes(likes);
    }
  }, []);
  return (
    <Container maxW={"1200px"} className="relative">
      <div className={cls.product_detailed}>
        <div className={cls.product_detailed_left}>
          <Image
            src={imgags && imgags[0]?.img}
            alt="img"
            className={`${cls.animation_img} ${
              imga ? cls.animation_img_active : ""
            }`}
            width={1000}
            height={1000}
          />
          <CustomPaging imgags={imgags} titel={titel} />
        </div>
        <div className={cls.product_detailed_right}>
          <h3>{titel}</h3>
          <hr />
          <div className={cls.prices}>
            <div className="flex gap-14 w-full ">
              <div>
                <p>Muddatli to’lovga sotib olish</p>
                <h3 className="text-[12px]">
                  {subtotal.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                  so'm/oyiga
                </h3>
              </div>
              <div>
                <p>Narx:</p>
                <div className={cls.prices_w}>
                  <p className={cls.prices_w_p}>{price} so'm</p>
                  <p className={cls.prices_w_p}>
                    <s>{old_price} so'm</s>
                  </p>
                  {isDiscounts ? (
                    <p className={cls.prices_discount}>Chigirma</p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>

            <div className={cls.modal_nasiya}>
              <div className={cls.modal_btn}>
                <Button
                  className={`${cls.btn} ${
                    btnActive === "3 oy" ? cls.btn_active : ""
                  }`}
                  onClick={() => btnPrice("3 oy")}
                >
                  3 oy
                </Button>
                <Button
                  className={`${cls.btn} ${
                    btnActive === "6 oy" ? cls.btn_active : ""
                  }`}
                  onClick={() => btnPrice("6 oy")}
                >
                  6 oy
                </Button>
                <Button
                  className={`${cls.btn} ${
                    btnActive === "12 oy" ? cls.btn_active : ""
                  }`}
                  onClick={() => btnPrice("12 oy")}
                >
                  {" "}
                  12 oy
                </Button>
              </div>
            </div>
          </div>
          <div className={cls.btns}>
            <button
              style={{
                backgroundColor: active ? "rgb(242, 244, 247)" : "",
                color: active ? " rgba(0, 0, 0, 0.804)" : "",
                cursor: active ? "not-allowed" : "",
              }}
              className={`${cls.add} ${active ? cls.add_active : ""}`}
              onClick={addTocart}
              disabled={active ? true : false}
            >
              Savatga qoʻshish
            </button>
            <button
              onClick={() => navigator.push("/cart")}
              className={`${cls.add_btn} ${active ? cls.add_btn_active : ""}`}
            >
              <IoCartOutline />
              O'tish
            </button>
            <button className={cls.perMonth}>
              {likes?.some((el: any) => el?._id === product?._id) ? (
                <span onClick={() => removeLike(product?._id)}>
                  <FaHeart size={20} className="text-[#5338ff]" />
                </span>
              ) : (
                <span onClick={() => addLike(product)}>
                  <FaRegHeart size={20} className="text-[#5338ff]" />
                </span>
              )}
            </button>
          </div>
          <div className={cls.description}>
            <p>Mahsulot haqida qisqacha:</p>
            <ul>
              {lorem?.map((_, i) => (
                <li key={i}>{description}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetailed;
