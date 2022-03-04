import React from "react";
import Image from "next/image";
import chart2 from "../assets/chart2.png";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect } from "react";

function Streamer() {
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
      className=" flex justify-center items-center w-screen py-14 bg-royal"
    >
      <motion.div animate={lAnime} className="w-[400px]  lg:w-[700px] h-[auto]">
        <Image src={chart2} placeholder="blur"></Image>
      </motion.div>
    </div>
  );
}

export default Streamer;
