import React, { useState } from "react";
import logo from "../assets/neemble-logo.png";
import Image from "next/image";
import ReactPlayer from "react-player";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const hamburger = () => {
    setMenu(!menu);
  };
  return (
    <>
      <div className="fixed z-50 border-b-2 border-b-blue-500  text-white navbar px-6 flex justify-between items-center w-screen h-20">
        <div>
          <ul className="hidden cursor-pointer lg:flex items-center space-x-8">
            <li className="w-14 h-auto">
              <Image src={logo} />
            </li>
            <li className="link border-2 border-blue-500 rounded-lg px-1 py-1">
              Neemble
            </li>
            <li>Streamer Token</li>
            <li>Tekenomics</li>
            <li>Road Map</li>
            <li>Team</li>
            <li>Social</li>
          </ul>
        </div>
        <div className="hidden lg:flex space-x-6">
          <button className="link-click text-sm  border-2 border-blue-500 py-1 px-2 rounded">
            Twitter
          </button>
          <button className="link-click text-lg link border-2 border-cyan-400  py-1 px-3 rounded">
            Neemble Demo
          </button>
        </div>

        {/* mobile menu */}
        <div className="lg:hidden flex justify-between items-center  w-screen h-14">
          <div className="w-12 h-auto">
            <Image src={logo} />
          </div>
          <div>
            <svg
              onClick={hamburger}
              xmlns="http://www.w3.org/2000/svg"
              class="cursor-pointer link hover:text-gray-500 h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* mobile menu */}

      {menu ? (
        <div className="fixed z-50 rounded-xl link  bg-[#0d1733] w-[240px] h-[400px] right-6 top-16">
          <ul className="py-4 cursor-pointer text-white flex flex-col px-6">
            <li className="py-2 hover:border-b-2 hover:border-cyan-300">
              Home
            </li>
            <li className="py-2 hover:border-b-2 hover:border-cyan-300">
              Streamer Token
            </li>
            <li className="py-2 hover:border-b-2 hover:border-cyan-300">
              Tekenomics
            </li>
            <li className="py-2 hover:border-b-2 hover:border-cyan-300">
              Road Map
            </li>
            <li className="py-2 hover:border-b-2 hover:border-cyan-300">
              Team
            </li>
            <li className="py-2 hover:border-b-2 hover:border-cyan-300">
              Social
            </li>
            <li className="py-4">
              <button className=" text-sm  border-2 border-blue-500 py-1 px-2 rounded">
                Twitter
              </button>
            </li>
            <button className="text-lg link border-2 border-cyan-400  py-1 px-3 rounded">
              Neemble Demo
            </button>
          </ul>
        </div>
      ) : null}
    </>
  );
}

export default Navbar;
