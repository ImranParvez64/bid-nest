import React, { useEffect, useState } from "react";
import SingleAuctionItems from "./items/SingleAuctionItems";

const Autions = ({ handleFavoriteClick, favorites }) => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    fetch("auction.json")
      .then((res) => res.json())
      .then((data) => setAuctions(data));
  }, []);

  return (
    <div>
      <h2 className="text-3xl text-blue-700 font-semibold">
        Active Auctions
      </h2>
      <p className="font-semibold">
        Discover and bid on extraordinary items
      </p>

      <div className="overflow-x-auto">
        <table className="table bg-white w-full mt-5 text-center">
          <thead>
            <tr>
              <th className="text-start">Items</th>
              <th>Current Bid</th>
              <th>Time Left</th>
              <th>Bid Now</th>
            </tr>
          </thead>

          <tbody>
            {auctions.map((auction) => (
              <SingleAuctionItems
                key={auction.id}
                auction={auction}
                handleFavoriteClick={handleFavoriteClick}
                favorites={favorites}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Autions;
