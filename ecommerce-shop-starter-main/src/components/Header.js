import React, { useState, useEffect, useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []); // ✅ dependency array add করা হয়েছে

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all h-[60px]`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={"/"}>
          <div>
            <img className="w-[40px]" src={Logo} alt="logo" />
          </div>
        </Link>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <BsBag className="text-2xl cursor-pointer" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex items-center justify-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
