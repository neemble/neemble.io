import React from "react";

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect } from "react";

function Section7() {
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
      {/* promo 2 */}
      <div
        ref={ref}
        className="px-5 lg:px-0 lg:py-0 bg-vid flex flex-col lg:flex-row justify-center lg:justify-evenly items-center w-screen"
      >
        <div className=" flex justify-center items-center w-full lg:w-1/2 h-96">
          <motion.div
            animate={lAnime}
            className="rounded-md px-4 py-5 bg-glass border-2 border-cyan-700"
          >
            <div className=" flex flex-col justify-center items-center text-white py-4 px-4">
              <h1 className="pb-4 lg:pb-14 lg:text-3xl text-2xl">
                Neemble Clips
              </h1>
              <p className="pb-8 text-center text-sm lg:text-lg">
                0-120 second Horrizontal Tik-Tok Like Clips . Swipe up to see
                next clip, discover moments of new up and coming streamers
                <br />
                <br />
                Streamer meme moments, amazing highlighted plays.
                <br />
                <br />
                Short, interesting, and nimble
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div animate={anime} className="w-full lg:w-2/5">
          <div className="framer2">
            <iframe
              src="https://streamable.com/e/o8wyhm?autoplay=1&nocontrols=1"
              frameborder="0"
              width="100%"
              height="100%"
              allowfullscreen
              allow="autoplay"
              className="framer"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Section7;
