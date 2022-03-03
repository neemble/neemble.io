import React from "react";
import logo from "../assets/neemble-logo.png";
import Image from "next/image";
import ReactPlayer from "react-player";

function Navbar() {
  return (
    <>
      <div className="border-b-2 border-b-blue-500  text-white navbar px-6 flex justify-between items-center w-screen h-20">
        <div>
          <ul className="cursor-pointer flex items-center space-x-8">
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
        <div className="flex space-x-6">
          <button className=" text-sm  border-2 border-blue-500 py-1 px-2 rounded">
            Twitter
          </button>
          <button className="text-lg link border-2 border-cyan-400  py-1 px-3 rounded">
            Neemble Demo
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
