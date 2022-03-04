import React from "react";
import Image from "next/image";
import promo1 from "../assets/promo1.png";
import apple from "../assets/appStore.png";
import google from "../assets/googlePlay.png";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect } from "react";

function Section6() {
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
      {/* promo 1  */}
      <div
        ref={ref}
        className=" px-5 lg:px-0 lg:py-24 bg-vid flex flex-col lg:flex-row justify-center lg:items-start lg:justify-evenly items-center w-screen"
      >
        <motion.div animate={lAnime} className=" w-full lg:w-2/5">
          <Image src={promo1}></Image>
        </motion.div>
        <div className=" flex justify-center items-center w-full lg:w-1/2 h-96">
          <motion.div
            animate={anime}
            className="rounded-md px-4 py-5 bg-glass border-2 border-cyan-700"
          >
            <div className=" flex flex-col justify-start items-start text-white py-4 px-4">
              <h1 className="pb-4 lg:pb-14 lg:text-3xl text-2xl">
                Introducing NFT Subscription Passes
              </h1>
              <p className=" text-sm lg:text-lg">
                Neemble is a PC and Mobile first platform
                <br />
                <br />
                We want mobile users to have access to all neemble platform has
                to offer.
                <br />
                <br />
                Mobile streaming platform will be released with Neemble Beta
                release
              </p>
              <div className="w-full pt-8 flex justify-center items-center">
                <div className="px-10">
                  <Image
                    className="cursor-pointer"
                    width={180}
                    height={50}
                    src={apple}
                  />
                </div>
                <div className="px-10 ">
                  <Image
                    className="cursor-pointer"
                    width={180}
                    height={50}
                    src={google}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Section6;
