import React, { useState, useRef, useEffect } from "react";

import { GiHamburgerMenu, IoBagHandleSharp, IoSearch } from "../../assets/icon";

import { menu } from "../../assets/contants";
import MobileNav from "./MobileNav";
import NavItem from "./NavItem";
import Cart from "./Cart";

import { Tooltip } from "react-tooltip";

const Header = () => {
  const [activeSearch, setActiveSearch] = useState(false);
  const [disWidth, setDisWidth] = useState(window.innerWidth);
  const [disFullWidth, setDisFullWidth] = useState(
    window.innerWidth < 1020 ? false : true
  );
  const [mobileNav, setMobileNav] = useState(false);
  const [cart, setCart] = useState(false);

  useEffect(() => {
    const handleResponsive = () => {
      if (window.innerWidth < 1020) {
        setDisFullWidth(false);
      } else {
        setDisFullWidth(true);
      }
    };

    window.addEventListener("resize", handleResponsive);

    return () => {
      window.removeEventListener("resize", handleResponsive);
    };
  }, [disWidth]);

  const handleMenu = () => {
    // alert("clicked")
    setMobileNav(!mobileNav);
  };
  const handleSearch = () => {
    setActiveSearch(!activeSearch);
    // searchRef.current.classList.add("searchBoxActive");
  };
  const handleCartClose = () => {
    setCart(!cart);
  };

  return (
    <header className="w-full flex items-center px-4 py-5">
      <div
        className={`w-full h-full fixed top-0 left-0 z-10 ${
          mobileNav ? "translate-x-0" : "translate-x-full"
        } transition-all ease-in-out duration-700`}
      >
        <MobileNav menuClose={handleMenu} />
      </div>
      <div
        className={`w-full h-full fixed top-0 left-0 z-10 ${
          cart ? "translate-x-0" : "translate-x-full"
        } transition-all ease-in-out duration-700`}
      >
        <Cart cartClose={handleCartClose} />
      </div>
      <div className="w-8/12 h-full flex items-center justify-around">
        {disFullWidth && (
          <ul className="flex items-baseline justify-center gap-5">
            {menu.map((item) => (
              <NavItem key={item.id} name={item.name} />
            ))}
          </ul>
        )}
        <div>
          <p className="text-sm md:text-lg lg:text-xl font-mono font-light text-center uppercase space-x-10 tracking-widest">
            Femme
          </p>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-mono font-light tracking-widest italic cursor-pointer ">
            Wordrobe
          </h1>
        </div>
      </div>
      <div className="w-4/12 h-full flex items-baseline justify-end lg:gap-5">
        <GiHamburgerMenu
          data-tooltip-id="menu"
          size={25}
          onClick={handleMenu}
          className="lg:hidden cursor-pointer"
        />
        <Tooltip id="menu" place="bottom" effect="solid">
          Menu
        </Tooltip>
        <input
          type="text"
          className={`${
            activeSearch ? "w-full opacity-100" : "w-0 opacity-0"
          } transition-all ease-in-out duration-1000  text-gray-700  p-2 border-[0.5px] border-gray-400 outline-none`}
          placeholder="Search here"
        />
        {disFullWidth && (
          <>
            <IoSearch
              size={25}
              data-tooltip-id="search"
              onClick={handleSearch}
              className="cursor-pointer"
            />
            <Tooltip id="search" place="bottom" effect="solid">
              Search
            </Tooltip>
            <IoBagHandleSharp
              size={25}
              data-tooltip-id="Cart"
              onClick={() => {
                setCart(!cart);
              }}
              className="cursor-pointer "
            />
            <Tooltip id="Cart" place="bottom" effect="solid">
              Cart
            </Tooltip>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
