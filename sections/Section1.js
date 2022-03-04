import React from "react";
import fVid from "../assets/videos/first.gif";
import Image from "next/image";
import { motion } from "framer-motion";

function Section1() {
  return (
    <div className="py-4 lg:py-24 bg-vid flex flex-col lg:flex-row justify-center lg:justify-evenly lg:items-start items-center w-screen">
      <div className="flex justify-center items-center w-full lg:w-1/2 h-96">
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          className="rounded-md px-4 lg:px-12 lg:py-5 bg-glass border-2 border-cyan-700"
        >
          <div className=" text-white py-14 lg:px-14">
            <h1 className="pb-8 text-2xl">New Era Of Game Streaming is here</h1>
            <p className="text-center text-lg">
              The Ultimate blockchain watch to earn <br /> & stream to earn
              platform
            </p>
            <div className="pt-8 flex justify-center items-center space-x-14">
              <button className="link rounded-md border-2 border-cyan-700 px-2 py-2">
                Explainer Video
              </button>
              <button className=" rounded-md border-2 border-white px-5 py-2">
                Lightpaper
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        className="py-4 lg:py-0 w-full lg:w-1/2"
      >
        <Image src={fVid}></Image>
      </motion.div>
    </div>
  );
}

export default Section1;
