import React from "react";
import Image from "next/image";
import cardImage from "../assets/cards.png";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect } from "react";

function Section4() {
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
      {/* 4 cards  */}
      <div
        ref={ref}
        className=" px-5 lg:px-0 lg:py-14 bg-vid flex flex-col lg:flex-row justify-center lg:justify-evenly  items-center w-screen"
      >
        <motion.div animate={lAnime} className="pb-14 lg:pb-0 lg:w-2/5 w-full">
          <Image src={cardImage}></Image>
        </motion.div>
        <div className=" flex justify-center items-center lg:w-1/2 w-full h-96">
          <motion.div
            animate={anime}
            className="rounded-md px-4 py-5 bg-glass border-2 border-cyan-700"
          >
            <div className=" flex flex-col justify-start items-start text-white py-4 px-4">
              <h1 className="pb-4 lg:pb-14 lg:text-3xl text-2xl">
                Introducing NFT Subscription Passes
              </h1>
              <p className="text-sm lg:text-lg">
                NFT-Passes will let holders be elligible for: small and big
                streamer token airdrops, NMBL token airdrops, NFT pass staking,
                streamer token staking, white-list spots to private streamer
                token sales, access to the streamer’s alpha chat and more...
                <br />
                <br />
                Passes have 25 levels, and Mana is required to upgrade your
                NFT-passes, mana is used to activate your rewards
                <br />
                <br />
                In stead of the charity and ads based monetization model we aim
                to turn every streamer into a free-to-watch, netflix-like
                subscription.
              </p>
              <div className="pt-8 flex justify-center items-center space-x-14">
                <button className="link rounded-md border-2 border-cyan-700 px-2 py-2">
                  Litepaper link: NFT Pass Subscription Model
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Section4;
