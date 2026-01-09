import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="border-b border-gray-200">
      <div class="navbar bg-base-100 shadow-sm px-4 md:px-30">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabindex="-1"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Auctions</a>
              </li>
              <li>
                <a>Categories</a>
              </li>
              <li>
                <a>How to works</a>
              </li>
            </ul>
          </div>
          <a class="text-2xl text-[#003EA4]" href="#">
            Bid<span className="font-bold text-yellow-400">Nest</span>
          </a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1 text-[16px] gap-10">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Auctions</a>
            </li>
            <li>
              <a>Categories</a>
            </li>
            <li>
              <a>How to works</a>
            </li>
          </ul>
        </div>
        <div class="navbar-end flex gap-6">
          <a class="btn rounded-full">
            <IoMdNotifications />
          </a>
          <div className="w-10 rounded-full">
            <img
              className="rounded-full"
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
