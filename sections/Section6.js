import React from "react";
import Image from "next/image";
import promo1 from "../assets/promo1.png";
import apple from "../assets/appStore.png";
import google from "../assets/googlePlay.png";

function Section6() {
  return (
    <>
      {/* promo 1  */}
      <div className="py-24 bg-vid flex justify-evenly  w-screen">
        <div className=" w-2/5 h-44">
          <Image src={promo1}></Image>
        </div>
        <div className=" flex justify-center items-center w-1/2 h-96">
          <div className="rounded-md px-4 py-5 bg-glass border-2 border-cyan-700">
            <div className=" flex flex-col justify-start items-start text-white py-4 px-4">
              <h1 className="pb-14 text-3xl">
                Introducing NFT Subscription Passes
              </h1>
              <p className=" text-lg">
                Neemble is a PC and Mobile first platform
                <br />
                <br />
                We want mobile users to have access to all neemble platform has
                to offer.
                <br />
                <br />
                Mobile streaming platform will be released with Neemble Beta
                release
              </p>
              <div className="w-full pt-8 flex justify-center items-center">
                <div className="px-10">
                  <Image width={180} height={50} src={apple} />
                </div>
                <div className="px-10">
                  <Image width={180} height={50} src={google} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section6;
