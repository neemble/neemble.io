import React from "react";
import chart1 from "../assets/chart1.png";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect } from "react";
function NMBL() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const anime = useAnimation();

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
    }
    if (!inView) {
      anime.start({
        x: "100vw",
      });
    }
  }, [inView]);
  return (
    <div
      ref={ref}
      className="flex justify-center items-center w-screen  bg-royal"
    >
      <motion.div animate={anime} className="w-[450px] lg:w-[900px] h-[auto]">
        <Image src={chart1}></Image>
      </motion.div>
    </div>
  );
}

export default NMBL;
