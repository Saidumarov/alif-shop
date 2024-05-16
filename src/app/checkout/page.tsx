"use client";
import cls from "./index.module.scss";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Container,
  useToast,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import CustomImage from "@/components/image";
import { Viloyatlar } from "@/db";
const ChekoutItem = () => {
  const [data, setData] = useState<any>();
  const { id } = useParams();
  const toast = useToast();
  const [subtotal, setSubtotal] = useState<any>(0);
  const [isloading, setisLoading] = useState(false);
  const [user, setUser] = useState({
    full_name: "",
    phone: "",
    region: "",
    city: "",
  });

  useEffect(() => {
    let cards = [];
    const cart_str = localStorage.getItem("cards");
    if (cart_str) {
      cards = JSON.parse(cart_str);
    }
    setData(cards);
  }, [id]);

  useEffect(() => {
    // subtotal
    const totalSubtotal = data?.reduce((acc: any, item: any) => {
      return acc + item.realPrice * item.count;
    }, 0);
    setSubtotal(totalSubtotal);
  }, [data]);

  // user info
  const handleChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // bot api token
  const botToken = process.env.NEXT_PUBLIC_BOT_TOKEN;
  const chatId = process.env.NEXT_PUBLIC_CHAT_ID;

  // Ma'lumotlarni Telegramga yuborish
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { full_name, phone, region, city } = user;

    if (!full_name || !phone || !region || !city) {
      toast({
        position: "top-right",
        title: `To'liq ma'lumotlarni kiriting ! `,
        status: "error",
        isClosable: true,
      });

      return;
    }

    setisLoading(true);

    // Rasmlarni yuborish
    try {
      for (const product of data) {
        const imageUrl = product?.imgags[0]?.img;
        const imageCaption = `Xaridor: ${full_name}\nTelefon: ${phone}\nViloyat: ${region}\nShahar: ${city}\n\nMahsulotlar:\n\Nomi: ${
          product?.titel
        }\nNarxi: ${product?.realPrice
          ?.toString()
          ?.replace(/\B(?=(\d{3})+(?!\d))/g, ".")} so'm\nTa'rif: ${
          product?.description
        }\nTo'lov turi: ${product?.term || "Naxt"}\nOylik to'lov: ${
          product?.monthly_payment || 0
        } so'm\n\n`;

        const response = await fetch(
          `https://api.telegram.org/bot${botToken}/sendPhoto`,
          {
            method: "POST",
            body: JSON.stringify({
              chat_id: chatId,
              photo: imageUrl,
              caption: imageCaption,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          toast({
            position: "top-right",
            title: `Xabar yuborishda xatolik yuz berdi!`,
            status: "error",
            isClosable: true,
          });

          return;
        }
      }

      toast({
        position: "top-right",
        title: `Buyurtma berildi! `,
        status: "success",
        isClosable: true,
      });

      setUser({
        full_name: "",
        phone: "",
        region: "",
        city: "",
      });
    } catch (error) {
      console.error("Rasm yuborishda xatolik yuz berdi:", error);

      toast({
        position: "top-right",
        title: `Rasm yuborishda xatolik yuz berdi! `,
        status: "error",
        isClosable: true,
      });
    } finally {
      setisLoading(false);
    }
  };

  return (
    <Container maxW={"1200px"}>
      <h2 className={cls.rasmilashtrish}>Buyurtma rasmiylashtirish</h2>
      <div className={cls.chekout_wrap}>
        <div className={cls.chekout_wrap_left}>
          <FormControl className={cls.form}>
            <FormControl className={cls.form_control}>
              <FormLabel>Telefon *</FormLabel>
              <Input
                onChange={handleChange}
                type="tel"
                name="phone"
                value={user.phone}
                placeholder="+998(__) ___-__-__"
              />
            </FormControl>
            <FormControl className={cls.form_control}>
              <FormLabel>F.I.O *</FormLabel>
              <Input
                onChange={handleChange}
                type="text"
                name="full_name"
                placeholder="Kriting"
                value={user.full_name}
              />
            </FormControl>

            <FormControl className={cls.form_control}>
              <FormLabel>Viloyat *</FormLabel>
              <Select
                name="region"
                onChange={handleChange}
                placeholder="Tanlang"
                value={user.region}
              >
                {Viloyatlar?.map((el, i) => (
                  <option value={el.title} key={i}>
                    {el.title}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl className={cls.form_control}>
              <FormLabel>Shahar / Tuman *</FormLabel>
              <Input
                onChange={handleChange}
                type="text"
                placeholder="Kriting"
                name="city"
                value={user.city}
              />
            </FormControl>
          </FormControl>
          <Button
            isLoading={isloading}
            onClick={handleSubmit}
            className={cls.zakas}
          >
            Buyurtma berish
          </Button>
        </div>
        <div className={cls.chekout_wrap_right}>
          {data &&
            data?.map((el: any, i: any) => (
              <div className={cls.chekout_wrap_right_img} key={i}>
                <CustomImage product={el.imgags[0]?.img} />
                <p>{el?.titel.substring(0, 50)}...</p>
                <p> {el?.count} dana</p>
                <p>
                  {" "}
                  {el.realPrice
                    .toFixed(0)
                    ?.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                  so'm{" "}
                </p>
                <hr />
              </div>
            ))}
          <div className={cls.jami}>
            <p>Jami:</p>
            <h3>
              {subtotal?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ".")} so'm
            </h3>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ChekoutItem;
