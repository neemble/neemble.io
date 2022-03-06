import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect } from "react";
import clips from "../assets/app3.png";

function Section7() {
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
          bounce: 0,
        },
      });
      lAnime.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0,
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
      {/* promo 2 */}
      <div
        ref={ref}
        className="bg-vid  flex lg:pt-0  flex-col lg:flex-row lg:space-x-8 lg:justify-around  justify-evenly items-center   w-screen lg:h-screen h-[120vh]"
      >
        {/* main red box */}
        {/* image box */}

        {/* {//50%% width} */}

        {/* image box */}
        {/* glass yellow box */}
        {/* {//45%% width} */}
        <motion.div
          animate={lAnime}
          className="px-14 flex bg-glass-purple bg-black bg-opacity-60 text-white flex-col  justify-around items-start  lg:w-2/4 w-[90%]	 h-[500px]"
        >
          <h1 className="flex w-full justify-center items-center lg:text-[44px] text-3xl text-center ">
            <span>Neemble Clips</span>
          </h1>
          <h2 className="px-14 lg:text-[25px] text-xl  ">
            0-120 second Horrizontal Tik-Tok Like Clips .
            <br />
            <br />
            Swipe up to see next clip, discover moments of new up and coming
            streamers
            <br />
            <br />
            Streamer meme moments, amazing highlighted plays.
            <br />
            <br />
            Short, interesting, and nimble
          </h2>

          <div className="flex w-full justify-evenly "></div>
        </motion.div>

        {/* image box */}
        <motion.div animate={anime} className="lg:w-2/5 w-[85%] ">
          <Image src={clips} />
        </motion.div>
      </div>
    </>
  );
}

export default Section7;
