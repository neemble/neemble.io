import React from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect } from "react";
import teams from "../assets/teams.png";
import Image from "next/image";
function Section5() {
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
      <div
        ref={ref}
        className="bg-vid  flex lg:pt-0 flex-col lg:flex-row lg:space-x-8  lg:justify-around  justify-evenly items-center   w-screen lg:h-screen h-[140vh]"
      >
        {/* main red box */}
        {/* image box */}

        {/* {//50%% width} */}

        {/* image box */}
        {/* glass yellow box */}
        {/* {//45%% width} */}
        <motion.div
          animate={lAnime}
          className="px-14 flex bg-glass-purple bg-black bg-opacity-60 text-white flex-col  justify-evenly items-start  lg:w-2/4 w-[90%]	 h-[681px]"
        >
          <h1 className="lg:text-[45px] text-3xl ">Introducing Team Streams</h1>
          <h2 className="lg:text-[25px] text-xl -mt-8 ">
            This has never been done. Even though most streamed games are
            team-games and teams can have multiple streamers.
            <br />
            <br />
            Team Streams let you access a connected stream between 2 or more
            streamers
            <br />
            <br />
            Your favorite streamers could team stream on 1 live-feed, and our
            streaming platform letting you immerse into the team-play
            <br />
            <br />
            Your favorite esports teams can stream their practice games with
            voice or webcameras on giving you a full emmersion into their
            team-play
          </h2>
        </motion.div>

        {/* image box */}
        <motion.div animate={anime} className="lg:w-2/5 w-[85%] ">
          <Image src={teams} />
        </motion.div>
      </div>
    </>
  );
}

export default Section5;
