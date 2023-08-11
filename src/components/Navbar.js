import React from "react";
import { Link } from "react-router-dom";
import { MapPinIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import Search from "./Search";
import { useSelector } from "react-redux";

const Navbar = () => {
  const langOpts = [
    "English",
    "Hindi",
    "Tamil",
    "Gujarati",
    "Marathi",
    "Konkani",
    "Kannada",
    "French",
  ];

  const cart = useSelector((state) => state.cart.productsNumber);

  return (
    <div className="min-w-[1000px] h-[60px] flex items-center justify-between bg-amazonclone text-white">
      {/* LEFT */}
      <div className="flex items-center m-4 ">
        <Link
          to={process.env.REACT_APP_BASE_URL}
          className="hover:border rounded"
        >
          <img
            className="h-[35px] w-[100px] m-2"
            src={process.env.REACT_APP_BASE_URL + "images/amazon.png"}
            alt="Amazon logo"
          />
        </Link>
        <div className="flex items-center hover:border rounded">
          <MapPinIcon className="font-size-24 h-6 w-6 ml-1" />
          <div className="pr-4 pl-4 ">
            <div className="text-xs xl:text-sm">Deliver to</div>
            <div className="text-sm xl:text-base font-bold">Chennai 600089</div>
          </div>
        </div>
      </div>
      {/* CENTER */}
      <div className="p-1 flex grow items-center">
        <Search />
      </div>
      {/* RIGHT */}
      <div className="p-1 flex">
        <div className="flex items-center rounded bg-amazonclone">
          <select className="text-xs text-black xl:text-sm rounded h-[80%] ml-4 ">
            {langOpts.map((lang) => {
              return <option key={lang}>{lang}</option>;
            })}
          </select>
        </div>
        <div className="pr-4 pl-4 ml-3 hover:border rounded flex flex-col items-center justify-center">
          <div className="text-xs xl:text-sm">Hello, sign in</div>
          <div className="text-sm xl:text-base font-bold">Accounts & Lists</div>
        </div>
        <div className="pr-4 pl-4 hover:border rounded flex flex-col items-center justify-center">
          <div className="text-xs xl:text-sm">Returns</div>
          <div className="text-sm xl:text-base font-bold">& Orders</div>
        </div>
        <Link to={process.env.REACT_APP_BASE_URL + "checkout"}>
          <div className="flex pr-3 pl-3 hover:border rounded ">
            <ShoppingCartIcon className="h-[48px]" />
            <div className="relative">
              <div className="absolute right-[9px] font-bold m-2 text-orange-400">
                {cart}
              </div>
            </div>
            <div className="mt-7 text-xs xl:text-sm font-bold ">Cart</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
