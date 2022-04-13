import React from "react";
import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING)
  );
  const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <div className="relative  flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image
        src={image}
        height={200}
        width={200}
        objectFit="contain"
        className=" p-5 hover:scale-110"
      />
      <h4 className="my-3 font-bold">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price * 76.11} currency="INR" />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 mb-1">
          <img
            className="w-12"
            src="https://www.nicepng.com/png/full/115-1159983_amazon-prime-logo-prime-amazon.png"
          />
          <p className="text-xs text-gray-500">FREE One-Day Delivery </p>
        </div>
      )}
      <button className="mt-auto button font-semibold">Add to Cart</button>
    </div>
  );
}

export default Product;
