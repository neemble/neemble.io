import React from "react";
import fVid from "../assets/videos/first.gif";
import Image from "next/image";
function Section1() {
  return (
    <div className="py-24 bg-vid flex justify-evenly w-screen">
      <div className=" flex justify-center items-center w-1/2 h-96">
        <div className="rounded-md px-12 py-5 bg-glass border-2 border-cyan-700">
          <div className=" text-white py-14 px-14">
            <h1 className="pb-8 text-2xl">New Era Of Game Streaming is here</h1>
            <p className="text-center text-lg">
              The Ultimate blockchain watch to earn <br /> & stream to earn
              platform
            </p>
            <div className="pt-8 flex justify-center items-center space-x-14">
              <button className="link rounded-md border-2 border-cyan-700 px-2 py-2">
                Explainer Video
              </button>
              <button className=" rounded-md border-2 border-white px-5 py-2">
                Lightpaper
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-1/2 h-44">
        <Image src={fVid}></Image>
      </div>
    </div>
  );
}

export default Section1;
