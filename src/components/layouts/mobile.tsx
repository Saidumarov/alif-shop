import { Container, Heading } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Mobile = () => {
  return (
    <div className=" bg-[#f5f7f7] mt-24">
      <Container maxW={"1200px"}>
        <div className="w-full flex items-center justify-between flex-wrap">
          <div className="relative w-[30%] max-[1000px]:w-[40%] max-[650px]:w-[100%] ">
            <Image
              src="/images/alifshop-app-uz.png"
              alt="not found"
              width={1000}
              height={1000}
              className="max-[650px]:w-[100%]"
            />
          </div>
          <div className="w-[45%] max-[1000px]:w-[70%] max-[650px]:w-[100%] max-[650px]:pt-5 ">
            <Heading size={"lg"}>
              Ajoyib takliflar har doim <br /> yoningizda
            </Heading>
            <p className="pt-3">
              alif shop ilovasi orqali buyurtma qiling, va qulay takliflar
              haqida hammadan tez biling
            </p>
            <div className="flex items-center gap-5 flex-wrap">
              <Image
                src="/images/play-market-icon.svg"
                alt="not found"
                width={150}
                height={150}
              />
              <Image
                src="/images/app-store-icon.svg"
                alt="not found"
                width={150}
                height={150}
              />
              <Image
                src="/images/app-gallery-icon.svg"
                alt="not found"
                width={150}
                height={150}
              />
            </div>
          </div>
          <div className="w-[20%] text-center max-[650px]:w-[100%] max-[650px]:pt-5">
            <Image
              src="/images/alifshop-qr-code.webp"
              alt="not found"
              width={100}
              height={100}
              className="mx-auto"
            />
            <p className="p-5">
              Yuklab olish uchun kamerangizni QR kodga qarating
            </p>
          </div>
        </div>
        <hr />
        <div className="w-full flex items-center justify-between pt-10 pb-5 flex-wrap">
          <div className="w-[23%] max-[650px]:w-[45%]">
            <Heading size={"md"}>alif shop</Heading>
            <p className="pt-3 text-[13px]">
              alifshop.uz - xaridorlarga tez va qulay tarzda turli xil
              tovarlarni sotib olish imkoniyatini beradigan marketpleys.
              alifshop.uz saytida smartfon, kompyuter, planshet, televizor,
              aqlli soat va boshqa ko'plab moslamalarni topishingiz mumkin.
            </p>
          </div>
          <div className="w-[23%] max-[650px]:w-[45%]">
            <Heading size={"md"}>Smartfonlar muddatli to'lov asosida</Heading>
            <p className="pt-3 text-[13px]">
              Bugungi kunda yuqori texnologiyalar davrida smartfon kundalik
              hayotimizning ajralmas qismiga aylandi. Zamonaviy telefonlarning
              ilovalari va texnik parametrlari tufayli smartfonlar ko'pincha
              bizning kompyuterlarimiz, kameralarimiz,
            </p>
          </div>
          <div className="w-[23%] max-[650px]:w-[45%]">
            <Heading size={"md"}>Noutbuklar muddatli to'lov asosida</Heading>
            <p className="pt-3 text-[13px]">
              Shaxsiy kompyuterlar bizga o'z ishimizni yuqori sifatli bajarish
              va shu bilan birga bo'sh vaqtimizni unumli o'tkazish imkoniyatini
              beradi. Masalan, noutbuk yordamida tezda dunyoning istalgan
              nuqtasidan, turli xil ishlarni bajarishingiz
            </p>
          </div>
          <div className="w-[23%] max-[650px]:w-[45%]">
            <Heading size={"md"}>Jihozlar muddatli to'lov asosida</Heading>
            <p className="pt-3 text-[13px]">
              Bizning online do'konda elektronikadan tashqari, turli xil maishiy
              texnika mavjud: gaz plitalari, grill tayyorlagichlar,
              muzlatgichlar, kir yuvish mashinalari, dazmollar, konditsionerlar
              va boshqa ko'plab almashtirib bo'lmaydigan narsalar.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Mobile;
