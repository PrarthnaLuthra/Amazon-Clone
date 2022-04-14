import React from "react";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function header() {
  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  const myLoader = ({ src }) => {
    return "./images/amazon.png";
  };

  return (
    <header>
      {/* top nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            loader={myLoader}
            src={"./images/amazon.png"}
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className="hidden lg:inline-flex flex-col m-2 link text-white text-sm">
          <p className="ml-8"> Hello,</p>
          <p className="font-extrabold md:text-sm flex flex-row items-center">
            <LocationMarkerIcon className="h-7 -mt-2" />
            Select Your Address
          </p>
        </div>
        {/* Search */}
        <div className="bg-yellow-400 hidden sm:flex hover:bg-yellow-500 items-center h-10 rounded-md flex-grow cursor-pointer">
          <input
            className="p-2 h-full w-6 flex-grow rounded-l-md flex-shrink focus:outline-none px-4"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* header right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div
            onClick={!session ? signIn : signOut}
            className="cursor-pointer link"
          >
            <p>{session ? `Hello, ${session.user.name}` : "Hello, Sign in"}</p>
            <p className="font-extrabold md:text-sm">Account & List</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm"> & Orders</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="realtive link flex items-center"
          >
            <span className="absolute top-0 right-5 md:right-12 h-4 w-4 mt-2 bg-yellow-400 text-center rounded-full text-black font-bold">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Cart
            </p>
          </div>
        </div>
      </div>
      {/* Bottom Nav */}
      <div className="flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's deal</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>

        <p className="link hidden lg:inline-flex">Amazon Pay</p>
        <p className="link mr-10 hidden lg:inline-flex">Home & Kitchen</p>
        <p className="link hidden lg:inline-flex">Computers</p>
        <p className="link hidden lg:inline-flex">Fashion</p>
        <p className="link hidden lg:inline-flex">Mobiles</p>
        <img
          className="link hidden lg:inline-flex justify-self-endright-0 h-9"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/SharmajiNamkeen/400x39-SWM_179._CB625800591_.jpg"
        />
      </div>
    </header>
  );
}

export default header;
