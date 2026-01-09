import React from "react";

const Footer = () => {
  return (
    <footer className="bg-base-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10">
        <div className="flex flex-col items-center text-center gap-6">
          <a className="text-3xl text-[#003EA4]" href="#">
            Bid<span className="font-bold text-yellow-400">Nest</span>
          </a>

          <div className="flex gap-3 text-lg">
            <span>Bid.</span>
            <span>Win.</span>
            <span>Own.</span>
          </div>

          <ul className="flex flex-wrap justify-center gap-6 sm:gap-10 text-base pt-4">
            <li>
              <a className="hover:text-primary">Home</a>
            </li>
            <li>
              <a className="hover:text-primary">Auctions</a>
            </li>
            <li>
              <a className="hover:text-primary">Categories</a>
            </li>
            <li>
              <a className="hover:text-primary">How it works</a>
            </li>
          </ul>

         

          <p className="text-sm text-gray-500 pt-4">
            Copyright © {new Date().getFullYear()} - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
