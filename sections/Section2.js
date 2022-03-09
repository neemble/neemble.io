import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import web2 from "../assets/mac2.png";
import Image from "next/image";

function Section2({ menuRef }) {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const effect1 = useAnimation();
  const effect2 = useAnimation();

  useEffect(() => {
    if (inView) {
      effect1.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0,
        },
      });
      effect2.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0,
        },
      });
    }
    if (!inView) {
      effect1.start({
        x: "-100vw",
      });
      effect2.start({
        x: "-50vw",
      });
    }
  }, [inView]);
  return (
    <div ref={menuRef}>
      {" "}
      {/* another */}
      <div
        id="home"
        ref={ref}
        className="bg-vid   flex lg:pt-0 pt-14 flex-col lg:flex-row lg:space-x-8 lg:justify-around  justify-evenly items-center   w-screen lg:h-screen h-[160vh]"
      >
        {/* main red box */}
        {/* image box */}

        {/* {//50%% width} */}
        <motion.div
          animate={effect1}
          className="lg:-mt-32 lg:w-1/4 w-3/5 h-[540px] "
        >
          <Image src={web2} />
        </motion.div>

        {/* image box */}
        {/* glass yellow box */}
        {/* {//45%% width} */}
        <motion.div
          animate={effect2}
          className="px-14 flex rounded-md bg-glass text-white flex-col  justify-evenly items-start  lg:w-[45%] w-[90%]	 h-[550px]"
        >
          <h1 className="lg:text-[45px] md:text-3xl text-2xl  text-center">
            No more donations
          </h1>
          <h2 className="lg:text-[26px] md:text-xl text-sm lg:w-full w-64">
            In 2020 game-streaming revenue reached over $9.2bln - at this point
            a successful streamer is one of web 3.0 biggest assets
            <br />
            <br />
            The market has grown tremendowsly, but the old financial model still
            revolves around donations.
            <br />
            <br />
            We are shutting down the “charity” model where streamers make money
            on the goodwill of the audience.
          </h2>

          <button className="rounded-md md:py-4 py-2 px-8 md:text-xl text-sm link">
            Further in lightpaper
          </button>
        </motion.div>

        {/* glass box */}
      </div>
    </div>
  );
}

export default Section2;
