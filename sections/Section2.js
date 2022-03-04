import React from "react";
import Image from "next/image";
import fVid from "../assets/videos/first.gif";
function Section2() {
  return (
    <>
      {" "}
      {/* another */}
      <div className="py-24 bg-vid flex justify-evenly  w-screen">
        <div className=" w-2/5 h-44">
          <Image src={fVid}></Image>
        </div>
        <div className=" flex justify-center items-center w-1/2 h-96">
          <div className="rounded-md px-4 py-5 bg-glass border-2 border-cyan-700">
            <div className=" flex flex-col justify-start items-start text-white py-4 px-4">
              <h1 className="pb-14 text-3xl">No More Donations</h1>
              <p className=" text-lg">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Section2;
