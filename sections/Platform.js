import React from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect } from "react";

function Platform() {
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
      <div
        ref={ref}
        className=" pb-40 w-screen bg-royal flex flex-col items-center justify-center"
      >
        <div className="flex space-x-10 lg:space-x-40">
          <motion.div
            animate={lAnime}
            className="w-[200px] md:w-[300px] lg:w-[400px]  h-[auto] hover:border-2 hover:rounded-md cursor-pointer"
          >
            <Image src={p1} />
          </motion.div>
          <motion.div
            animate={anime}
            className=" w-[200px] md:w-[300px] lg:w-[400px] h-[auto] hover:border-2 hover:rounded-md cursor-pointer"
          >
            <Image src={p2} />
          </motion.div>
        </div>
        <div className="mt-14">
          <motion.div
            animate={lAnime}
            className="w-[450px] md:w-[700px] lg:w-[965px] h-[auto]  hover:border-2 hover:rounded-md cursor-pointer"
          >
            <Image src={p3} />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Platform;
