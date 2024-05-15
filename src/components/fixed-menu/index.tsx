"use client";
import Link from "next/link";
import "./index.scss";
import { useEffect, useState } from "react";
import { IoCartOutline, IoHomeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { MdOutlineManageSearch } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
function FixedMenu() {
  const [active, setActive] = useState("home");
  const handleItemClick = (itemName: string) => {
    localStorage.setItem("text", JSON.stringify(itemName));
    setActive(itemName);
  };

  return (
    <div>
      <div className="fixed-header">
        <div
          className={`fixed-header-item ${active === "home" ? "active" : ""}`}
          onClick={() => handleItemClick("home")}
        >
          <Link href={"/"}>
            <IoHomeOutline size={30} />
            <p> Asosiy </p>
          </Link>
        </div>
        <div
          className={`fixed-header-item ${active === "search" ? "active" : ""}`}
          onClick={() => handleItemClick("search")}
        >
          <Link href={"/search"}>
            <MdOutlineManageSearch size={35} />
            <p> Katalog </p>
          </Link>
        </div>
        <div
          className={`fixed-header-item ${active === "cart" ? "active" : ""}`}
          onClick={() => handleItemClick("cart")}
        >
          <Link href={"/cart"}>
            <span></span>
            <IoCartOutline size={30} />
            <p> Savat </p>
          </Link>
        </div>
        <div
          className={`fixed-header-item ${active === "like" ? "active" : ""}`}
          onClick={() => handleItemClick("like")}
        >
          <Link href={"/wishes"}>
            <FaRegHeart size={25} />
            <p> Saralangan </p>
          </Link>
        </div>
        <div
          className={`fixed-header-item ${active === "user" ? "active" : ""}`}
          onClick={() => handleItemClick("user")}
        >
          <Link href={"/"}>
            <CiUser size={30} />
            <p> Profil </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FixedMenu;
