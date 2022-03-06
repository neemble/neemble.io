import React from "react";
import Image from "next/image";
import promo1 from "../assets/app1.png";
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
      {/* promo 1  */}

      <div
        ref={ref}
        className="bg-vid  flex lg:pt-0 flex-col lg:flex-row lg:space-x-8 lg:justify-around  justify-evenly items-center   w-screen lg:h-screen h-[120vh]"
      >
        {/* main red box */}
        {/* image box */}

        {/* {//50%% width} */}
        <motion.div animate={lAnime} className="lg:w-2/5 w-[85%] ">
          <Image src={promo1} />
        </motion.div>

        {/* image box */}
        {/* glass yellow box */}
        {/* {//45%% width} */}
        <motion.div
          animate={anime}
          className="px-14 flex bg-glass-purple bg-black bg-opacity-60 text-white flex-col  justify-evenly items-start  lg:w-2/4 w-[90%]	 h-[600px]"
        >
          <h1 className="lg:text-[44px] text-3xl ">
            IOS and Android Mobile Apps
          </h1>
          <h2 className="lg:text-[25px] text-xl  ">
            Neemble is a PC and Mobile first platform
            <br />
            <br />
            We want mobile users to have access to all neemble platform has to
            offer.
            <br />
            <br />
            Mobile streaming platform will be released with Neemble Beta release
          </h2>

          <div className="flex w-full justify-evenly ">
            <Image src={google} />
            <Image src={apple} />
          </div>
        </motion.div>

        {/* glass box */}
      </div>
    </>
  );
}

export default Section6;
