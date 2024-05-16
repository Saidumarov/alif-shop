import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss";
import cls from "./index.module.scss";
import CustomImage from "@/components/image";

function CustomPaging(images: any) {
  const imagesArray = images.imgags;

  const settings = {
    customPaging: function (i: any) {
      return (
        <span className={cls.slider_img_bottom}>
          <CustomImage key={i} product={imagesArray[i].img} />
        </span>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={cls.slider_img_card}>
      <Slider {...settings}>
        {imagesArray?.map((image: any, index: any) => (
          <div key={index} className={cls.slider_img_card_img}>
            <CustomImage product={image.img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CustomPaging;
