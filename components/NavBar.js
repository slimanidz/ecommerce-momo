import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useCartContext } from "./CartContext";
import { BsCart4 } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";

const NavBar = () => {
  const pathname = usePathname();
  const { cartQuantity } = useCartContext();

  return (
    <div className="flex justify-end gap-3 px-3 pt-3 sticky top-0 bg-white border-b">
      <Link
        href="/"
        className={pathname === "/" ? "border-b-4 border-black" : null}
      >
        <AiOutlineHome className="w-6 h-6 md:w-8 md:h-8" />
      </Link>
      <Link
        href="/cart"
        className={
          pathname === "/cart"
            ? "border-b-4 border-black relative"
            : " relative"
        }
      >
        <BsCart4 className="w-6 h-6 md:w-8 md:h-8" />
        <div
          className={
            pathname === "/cart"
              ? "hidden"
              : "absolute top-[-10px] right-0 text-sm text-white font-bold bg-red-500 rounded-full px-1"
          }
        >
          {cartQuantity}
        </div>
      </Link>
      <Link
        href="/about"
        className={
          pathname === "/about"
            ? "border-b-4 border-black flex items-center"
            : " flex items-center"
        }
      >
        About
      </Link>
    </div>
  );
};

export default NavBar;
