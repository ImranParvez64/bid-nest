import { IoIosHeart } from "react-icons/io";
import "./App.css";
import Autions from "./Components/Autions/Autions";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import { FaRegHeart } from "react-icons/fa";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Autions  */}
      <div className="bg-[#dce5f371]">
        <div className="container flex mx-auto py-30 gap-10 ">
          {/* left */}

          <div className="min-h-screen  w-[65%]">
            <div>
              <Autions />
            </div>
          </div>

          {/* right */}
          <div className="min-h-screen w-[30%] mt-20">
            <div className="bg-white pt-6 rounded-lg shadow-md flex flex-col justify-center items-center">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3 border-b border-gray-200 w-full justify-center pb-2">
                <FaRegHeart className="text-black inline-block hover:text-red-500 cursor-pointer text-xl" />
                Favorite Items
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
