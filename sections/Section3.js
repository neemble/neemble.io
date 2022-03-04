import React from "react";
import Image from "next/image";
import globes from "../assets/globes.png";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect } from "react";
function Section3() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const anime = useAnimation();
  const lAnime = useAnimation();

  useEffect(() => {
    if (inView) {
      anime.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
      lAnime.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      anime.start({
        x: "100vw",
      });
      lAnime.start({
        x: "-100vw",
      });
    }
  }, [inView]);
  return (
    <>
      {" "}
      {/* 4 globes neemble */}
      <div
        ref={ref}
        className="py-8 px-5 lg:px-0 lg:py-14 bg-vid flex flex-col lg:flex-row justify-center lg:justify-evenly lg:items-start items-center w-screen"
      >
        <div className=" flex justify-center items-center lg:w-1/2 w-full h-96">
          <motion.div
            animate={lAnime}
            className="rounded-md px-4 py-5 bg-glass border-2 border-cyan-700"
          >
            <div className=" flex flex-col justify-start items-start text-white py-4 px-4">
              <h1 className="pb-4 lg:pb-14 lg:text-3xl text-2xl">
                Introducing Streamer Coin
              </h1>
              <p className=" text-sm lg:text-lg">
                Every streamer mints 11.3 millions of his personal streamer
                tokens and viewers are able to access streamer tokens on
                Neebmle-swap
                <br />
                <br />
                Token utility and values are measured by: revenue generated by
                the streamer, hours of watched streams, # of unique viewers,
                followers etc.
              </p>
              <div className="pt-8 flex justify-center items-center space-x-14">
                <button className=" rounded-md border-2 border-white px-5 py-2">
                  More on this in neemble whitepaper
                </button>
                <button className="bg-green-700 rounded-md border-2 border-green-400 px-5 py-2">
                  Buy NMBL
                </button>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div animate={anime} className="py-14 lg:py-0 lg:w-2/5 w-full">
          <Image src={globes}></Image>
        </motion.div>
      </div>
    </>
  );
}

export default Section3;