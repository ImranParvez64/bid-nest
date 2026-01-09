import React from "react";

const Hero = () => {
  return (
    <section
      className="relative min-h-[80vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url(/assets/Banner-min.jpg)" }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-xl text-white">
          <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Bid on Unique Items from Around the World
          </h1>
          <p className="mb-6 text-sm sm:text-base md:text-lg text-gray-200">
            Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
          </p>
          <button className="btn btn-white rounded-full px-6">
            Explore Auctions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
