import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import play from "../assets/Play.png";
import web1 from "../assets/mac1.png";
function Section1() {
  return (
    <div className="bg-vid flex lg:pt-0 pt-28 flex-col lg:flex-row space-x-8 lg:justify-center justify-between items-center   w-screen lg:h-screen h-[120vh]">
      {/* main red box */}

      {/* glass yellow box */}
      {/* {//45%% width} */}
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{
          type: "spring",
          duration: 1,
          bounce: 0,
        }}
        className="flex rounded-md bg-glass text-white flex-col  justify-evenly items-center  lg:w-[45%] w-[90%]	 h-[500px]"
      >
        <h1 className="lg:text-[45px] text-3xl  text-center">
          New Era of Game Streaming is here
        </h1>
        <h2 className="lg:text-[30px] text-xl text-center w-[550px]">
          The Ultimate Blockchain Watch to Earn & Stream to Earn Platform
        </h2>
        <div className="flex  space-x-14 justify-center items-center">
          <div className="border-2 rounded border-[#00D8FA] flex justify-evenly w-52 items-center">
            <Image src={play}></Image>
            <button className=" py-2 px-4 text-xl  ">Explainer Video</button>
          </div>
          <div>
            <button className="rounded py-2 px-12 text-xl border-2 border-white">
              Lightpaper
            </button>
          </div>
        </div>
      </motion.div>

      {/* glass box */}

      {/* image box */}

      {/* {//50%% width} */}
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{
          type: "spring",
          duration: 1,
          bounce: 0,
        }}
        className="lg:w-[45%] w-4/5 lg:py-0 py-14  h-[540px] "
      >
        <Image src={web1} />
      </motion.div>

      {/* image box */}
    </div>
  );
}

export default Section1;
