import React, { useEffect } from "react";
import Image from "next/image";
import fVid from "../assets/videos/first.gif";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
function Section2() {
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
      {" "}
      {/* another */}
      <div
        ref={ref}
        className="py-4 lg:px-0 px-8 lg:py-0 bg-vid flex flex-col lg:flex-row justify-center lg:justify-evenly lg:items-start items-center w-screen"
      >
        <motion.div animate={lAnime} className="py-10 lg:py-0 lg:w-2/5 w-full ">
          <Image src={fVid}></Image>
        </motion.div>
        <div className=" flex justify-center items-center lg:w-1/2 w-full ">
          <motion.div
            animate={anime}
            className="rounded-md px-4 py-5 bg-glass border-2 border-cyan-700"
          >
            <div className=" flex flex-col justify-start items-start text-white py-4 lg:px-4">
              <h1 className="pb-4 lg:pb-14 lg:text-3xl text-2xl">
                No More Donations
              </h1>
              <p className="lg:text-lg text-sm">
                In 2020 game-streaming revenue reached over $9.2bln - at this
                point a successful streamer is one of web 3.0 biggest assets
                <br />
                <br /> The market has grown tremendowsly, but the old financial
                model still revolves around donations.
                <br /> <br />
                We are shutting down the “charity” model where streamers make
                money on the goodwill of the audience.
              </p>
              <div className="pt-8 flex justify-center items-center space-x-14">
                <button className="link rounded-md border-2 border-cyan-700 px-2 py-2">
                  Further in Lightpaper
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Section2;
