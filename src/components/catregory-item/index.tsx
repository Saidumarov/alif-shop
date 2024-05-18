"use client";
import cls from "./index.module.scss";
import { useContext, useState } from "react";
import { Category } from "./../../context";
import Link from "next/link";
import Card from "../shared/card/card";
import { CategoryData } from "@/db";
import LoadingCard from "../shared/loading";
import { ProductType } from "@/types";
import { Filter } from "@/constants";

interface ProductTypeData {
  product: {
    data: ProductType[];
    isError: boolean;
    isLoading: boolean;
  };
}
const Category_Item = (product: ProductTypeData) => {
  const { category, setCategory, setCategoryT, categoryT } =
    useContext(Category);
  const { data, isError, isLoading } = product.product;
  const dataLoading = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  const [minPrice, setMinPrice] = useState(10);
  const [maxPrice, setMaxPrice] = useState(100000000);
  const [active, setActive] = useState(false);

  const filteredProducts = data
    ? data?.filter((item) => {
        const price = item?.realPrice;
        return price >= minPrice && price <= maxPrice;
      })
    : [];

  const handelCategory = (value: string, type: string) => {
    setCategory(value);
    setCategoryT(type);
  };

  return (
    <>
      <div className={cls.filter_icon}>
        <div
          className={cls.filter_icon_left}
          onClick={() => setActive(!active)}
        >
          <Filter />
          <p>Filter</p>
        </div>
      </div>
      <div className={cls.category_item}>
        <div
          className={`${cls.category_item_left} ${
            active ? cls.category_item_left_active : ""
          }`}
        >
          <p className={cls.turkum}>
            <span>Turkumlar</span>
            <span onClick={() => setActive(!active)}>Bekor qilish</span>
          </p>

          {CategoryData?.map((el, i) => {
            if (el?.type === categoryT) {
              return (
                <Link
                  key={i}
                  href={`/category/${category}/${el?.path}`}
                  onClick={() =>
                    handelCategory(`${el.type}/${el?.path}`, el.type)
                  }
                >
                  <p className={cls.category_p}>{el.title}</p>
                </Link>
              );
            }
          })}
          <div className={cls.filter}>
            <p className={cls.narx}> Narx:</p>
            <div className={cls.sum}>
              <div className={cls.input_range1}>
                <span>Min</span>
                <input
                  type="number"
                  value={minPrice || ""}
                  onChange={(e) => {
                    const newValue = parseInt(e.target.value);
                    if (newValue > maxPrice) {
                    } else if (!isNaN(newValue)) {
                      setMinPrice(newValue);
                    } else {
                      setMinPrice(0);
                    }
                  }}
                />
              </div>
              <div className={cls.input_range1}>
                <span>Max</span>
                <input
                  type={cls.number}
                  value={maxPrice || ""}
                  onChange={(e) => {
                    const newValue = parseInt(e.target.value);
                    if (newValue < minPrice) {
                    } else if (!isNaN(newValue)) {
                      setMaxPrice(newValue);
                    } else {
                      setMaxPrice(0);
                    }
                  }}
                />
              </div>
            </div>

            <div className={cls.value}>
              <input
                type="range"
                name="minPrice"
                id={cls.minPrice}
                min="0"
                max="10000000"
                value={minPrice}
                onChange={(e) => {
                  setMinPrice(+e.target.value);
                }}
                style={{
                  background: `linear-gradient(to right, rgb(111, 0, 255) 0%, rgb(111, 0, 255) ${
                    (minPrice / 10000000) * 100
                  }%, rgb(180, 183, 191) ${
                    (minPrice / 10000000) * 100
                  }%, rgb(180, 183, 191) 100%)`,
                }}
              />
              <input
                type="range"
                name="maxPrice"
                id={cls.maxPrice}
                min="100000000"
                max="1000000000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(+e.target.value)}
                style={{
                  background: `linear-gradient(to right, rgb(111, 0, 255) 0%, rgb(111, 0, 255) ${
                    (maxPrice / 1000000000) * 100
                  }%, rgb(180, 183, 191) ${
                    (maxPrice / 1000000000) * 100
                  }%, rgb(180, 183, 191) 100%)`,
                }}
              />
            </div>
          </div>
        </div>
        <div className={cls.category_item_right}>
          {isLoading ? (
            <LoadingCard loading={dataLoading} />
          ) : (
            filteredProducts?.map((product, i) => {
              return <Card key={i} product={product} />;
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Category_Item;
