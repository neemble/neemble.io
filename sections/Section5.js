import React from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect } from "react";
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
        className="pt-24 lg:pt-32 px-5 lg:px-0 lg:py-14 bg-vid flex flex-col lg:flex-row justify-center lg:justify-evenly  items-center w-screen"
      >
        <div className=" flex justify-center items-center w-full lg:w-1/2 h-96">
          <motion.div
            animate={lAnime}
            className="rounded-md px-4 py-5 bg-glass border-2 border-cyan-700"
          >
            <div className=" flex flex-col justify-start items-start text-white py-4 px-4">
              <h1 className="pb-4 lg:pb-14 lg:text-3xl text-2xl">
                Introducing Team Streams
              </h1>
              <p className="pb-8 text-sm lg:text-lg">
                This has never been done. Even though most streamed games are
                team-games and teams can have multiple streamers.
                <br />
                <br />
                Team Streams let you access a connected stream between 2 or more
                streamers
                <br />
                <br />
                Your favorite streamers could team stream on 1 live-feed, and
                our streaming platform letting you immerse into the team-play
                <br />
                <br />
                Your favorite esports teams can stream their practice games with
                voice or webcameras on giving you a full emmersion into their
                team-play
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div animate={anime} className="py-14 lg:py-0 w-full lg:w-2/5">
          <div className="framer2">
            <iframe
              src="https://streamable.com/e/tfr6ks?autoplay=1&nocontrols=1"
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

export default Section5;
