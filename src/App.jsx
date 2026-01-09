import { useState, useMemo } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

import "./App.css";
import Autions from "./Components/Autions/Autions";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

function App() {
  const [favorites, setFavorites] = useState([]);

  // Add to Favorite
  const handleFavoriteClick = (newItem) => {
    const isExist = favorites.some((item) => item.id === newItem.id);
    if (isExist) return;

    setFavorites([...favorites, newItem]);
    toast.success("Added to Favorite");
  };

  //Remove from Favorite
  const handleDeletedFavorite = (item) => {
    setFavorites(favorites.filter((fav) => fav.id !== item.id));
    toast.error("Deleted from Favorite list");
  };

  // Total Price (derived from favorites)
  const totalPrice = useMemo(() => {
    return favorites.reduce(
      (sum, item) => sum + Number(item.currentBidPrice),
      0
    );
  }, [favorites]);

  return (
    <>
      <Navbar />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 2000, // 2 seconds
          style: {
            fontSize: "16px",
            fontWeight: "500",
          },
        }}
      />

      <Hero />

      <div className="bg-[#dce5f371]">
        <div className="container flex mx-auto py-30 gap-10">
          {/* LEFT */}
          <div className="min-h-screen w-[65%]">
            <Autions
              handleFavoriteClick={handleFavoriteClick}
              favorites={favorites}
            />
          </div>

          {/* RIGHT */}
          <div className="min-h-screen w-[30%] mt-20">
            <div className="bg-white pt-6 rounded-lg shadow-md flex flex-col items-center">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3 border-b border-gray-200 w-full justify-center pb-2">
                <FaRegHeart className="text-black text-xl" />
                Favorite Items
              </h2>

              <div className="w-full h-full overflow-y-auto">
                {favorites.length === 0 ? (
                  <div className="flex flex-col justify-center items-center">
                    <p className="pt-4 text-xl font-semibold">
                      No favorite items yet.
                    </p>
                    <p className="pb-8 pt-2 text-sm">
                      Click the heart icon on any item to add it to your
                      favorites
                    </p>
                  </div>
                ) : (
                  <ul className="p-4">
                    {favorites.map((item) => (
                      <li
                        key={item.id}
                        className="mb-2 flex items-center justify-between gap-3 px-4 border rounded-2xl p-3 border-gray-200"
                      >
                        <div className="flex gap-4">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-20 h-20 rounded object-cover"
                          />
                          <div>
                            <p className="font-semibold line-clamp-1">
                              {item.title}
                            </p>
                            <p className="text-sm text-gray-600">
                              ${item.currentBidPrice}
                            </p>
                            <p>Bid: {item.bidsCount}</p>
                          </div>
                        </div>

                        <div
                          onClick={() => handleDeletedFavorite(item)}
                          className="cursor-pointer"
                        >
                          <IoIosCloseCircle className="text-2xl hover:text-red-700" />
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="text-xl font-semibold py-4 border-t border-gray-200 w-full px-12">
                <h2>Total Bids Amount: ${totalPrice}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
