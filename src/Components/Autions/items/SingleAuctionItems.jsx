import React from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";

const SingleAuctionItems = ({
  auction,
  handleFavoriteClick,
  favorites,
}) => {
  const {
    id,
    title,
    currentBidPrice,
    timeLeft,
    image,
  } = auction;

  const isFavorite = favorites.some((item) => item.id === id);

  return (
    <tr className="border-b">
      <td className="flex items-center gap-3 py-4">
        <img
          src={image}
          alt={title}
          className="w-16 h-16 rounded object-cover"
        />
        <span>{title}</span>
      </td>

      <td className="text-center">${currentBidPrice}</td>
      <td className="text-center">{timeLeft}</td>

      <td className="text-center">
        <div
          className={`relative w-6 h-6 ml-2
            ${
              isFavorite
                ? "cursor-not-allowed "
                : "cursor-pointer group"
            }
          `}
          onClick={() => {
            if (!isFavorite) handleFavoriteClick(auction);
          }}
        >
          <BsHeart
            className={`absolute inset-0 text-xl transition
              ${
                isFavorite
                  ? "opacity-0"
                  : "text-black group-hover:opacity-0"
              }
            `}
          />

          <BsHeartFill
            className={`absolute inset-0 text-xl transition
              ${
                isFavorite
                  ? "text-red-500 opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              }
            `}
          />
        </div>
      </td>
    </tr>
  );
};

export default SingleAuctionItems;
