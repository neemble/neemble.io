import React from "react";
import Image from "next/image";
import chart from "../assets/chart.png";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect } from "react";

function Streamer({ menuRef }) {
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
          bounce: 0,
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
    <div ref={menuRef}>
      <div
        ref={ref}
        className=" flex justify-center items-center w-screen py-14 bg-royal"
      >
        <motion.div
          animate={lAnime}
          className="w-[550px]  lg:w-[900px] h-[auto]"
        >
          <Image src={chart} placeholder="blur"></Image>
        </motion.div>
      </div>
    </div>
  );
}

export default Streamer;
