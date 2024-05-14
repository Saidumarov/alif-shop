import { useEffect, useState } from "react";
const usePrice = (initialPrice: number) => {
  const [formattedPrice, setFormattedPrice] = useState("");

  useEffect(() => {
    const formatPrice = async () => {
      const response = initialPrice
        ?.toString()
        ?.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      setFormattedPrice(response);
    };
    formatPrice();
  }, [initialPrice]);

  return formattedPrice;
};

export default usePrice;
