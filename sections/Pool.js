import React from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect } from "react";

function Pool() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const lAnime = useAnimation();

  useEffect(() => {
    if (inView) {
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
      lAnime.start({
        x: "-100vw",
      });
    }
  }, [inView]);
  return (
    <div
      ref={ref}
      className="flex py-44 justify-center items-center w-screen bg-gradient-to-r from-[#3b57b1] to-[#1a095e]  "
    >
      <motion.div
        animate={lAnime}
        className=" flex justify-center flex-col items-center bg-glass-1 rounded-xl bg-[#3484ba]   w-[340px] h-96"
      >
        <h1 className="py-4 text-4xl text-white font-semibold">Neemble Pool</h1>
        <ul className="font-semibold text-white flex flex-col">
          <li className="py-2">
            • Received in Watch to Earn/
            <br />
            Stream to Earn Rewards
          </li>
          <li className="py-2">• Rewarded in trivias and quizes</li>
          <li className="py-2">• On Stream mini games</li>
          <li className="py-2">• Streamer Token Airdrops</li>
          <li className="py-2">• and much more...</li>
        </ul>
      </motion.div>
    </div>
  );
}

export default Pool;
