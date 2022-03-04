import React from "react";
import Image from "next/image";
import promo2 from "../assets/promo2.png";

function Section7() {
  return (
    <>
      {" "}
      {/* promo 2 */}
      <div className="py-24 bg-vid flex justify-evenly  w-screen">
        <div className=" flex justify-center items-center w-1/2 h-96">
          <div className="rounded-md px-4 py-5 bg-glass border-2 border-cyan-700">
            <div className=" flex flex-col justify-center items-center text-white py-4 px-4">
              <h1 className="pb-14 text-3xl">Neemble Clips</h1>
              <p className="pb-8 text-center text-lg">
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
          </div>
        </div>
        <div className=" w-2/5 h-44">
          <Image src={promo2}></Image>
        </div>
      </div>
    </>
  );
}

export default Section7;
