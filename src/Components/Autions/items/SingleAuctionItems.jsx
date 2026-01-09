import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";

const SingleAuctionItems = ({ auction }) => {
  const {
    id,
    title,
    description,
    currentBidPrice,
    timeLeft,
    bidsCount,
    image,
  } = auction;

  return (
    <tr className="border-b">
      {/* Item + Image */}
      <td className="flex items-center gap-3 py-4">
        <img
          src={image}
          alt={title}
          className="w-16 h-16 rounded object-cover "
        />
        <span>{title}</span>
      </td>

      <td className="text-center">${currentBidPrice}</td>
      <td className="text-center">{timeLeft}</td>
      <td className="text-center">
        <IoIosHeart className="text-black inline-block hover:text-red-500 cursor-pointer text-xl" />

      </td>
    </tr>
  );
};

export default SingleAuctionItems;
