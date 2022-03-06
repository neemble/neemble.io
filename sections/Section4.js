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
      {/* 4 cards  */}
      {/* another */}
      <div
        ref={ref}
        className="bg-vid  flex lg:pt-0  flex-col lg:flex-row space-x-8 lg:justify-around  justify-evenly items-center   w-screen lg:h-screen h-[160vh]"
      >
        {/* main red box */}
        {/* image box */}

        {/* {//50%% width} */}
        <motion.div animate={lAnime} className="lg:w-2/5 w-full ">
          <Image src={cardImage} />
        </motion.div>

        {/* image box */}
        {/* glass yellow box */}
        {/* {//45%% width} */}
        <motion.div
          animate={anime}
          className="px-14 flex rounded-lg bg-glass text-white flex-col  justify-evenly items-start  lg:w-2/4 w-[90%]	 h-[614px]"
        >
          <h1 className="lg:text-[40px] text-3xl ">
            Introducing NFT Subscription Passes
          </h1>
          <h2 className="lg:text-[20px] text-xl">
            NFT-Passes will let holders be elligible for: small and big streamer
            token airdrops, NMBL token airdrops, NFT pass staking, streamer
            token staking, white-list spots to private streamer token sales,
            access to the streamer’s alpha chat and more...
            <br />
            <br />
            Passes have 25 levels, and Mana is required to upgrade your
            NFT-passes, mana is used to activate your rewards
            <br />
            <br />
            In stead of the charity and ads based monetization model we aim to
            turn every streamer into a free-to-watch, netflix-like subscription.
          </h2>

          <button
            className="rounded-md py-2 px-8 lg:text-xl text-lg
           border-2 border-white"
          >
            Litepaper link: NFT Pass Subscription Model
          </button>
        </motion.div>

        {/* glass box */}
      </div>
    </>
  );
}

export default Section4;
