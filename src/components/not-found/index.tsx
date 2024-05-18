import { Button } from "@chakra-ui/react";
import cls from "./index.module.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";
const NotProduct = ({ product }: any) => {
  const rot = useRouter();
  //
  const hendelClik = () => {
    if (product.clik === "/") {
      rot.push("/");
    } else {
      window.location.reload();
    }
  };
  return (
    <>
      <div className={cls.no_product}>
        <Image
          src="/not-found.png"
          alt="not-found"
          width={1000}
          height={1000}
        />
        <h3> {product.name} </h3>
        <p> {product.description} </p>
        <Button className={cls.bosh} onClick={hendelClik}>
          {product.btn}
        </Button>
      </div>
    </>
  );
};

export default NotProduct;
