import React from "react";
import Image from "next/image";
import cardImage from "../assets/cards.png";

function Section4() {
  return (
    <>
      {/* 4 cards  */}
      <div className="py-24 bg-vid flex justify-evenly  w-screen">
        <div className=" w-2/5 h-44">
          <Image src={cardImage}></Image>
        </div>
        <div className=" flex justify-center items-center w-1/2 h-96">
          <div className="rounded-md px-4 py-5 bg-glass border-2 border-cyan-700">
            <div className=" flex flex-col justify-start items-start text-white py-4 px-4">
              <h1 className="pb-14 text-3xl">
                Introducing NFT Subscription Passes
              </h1>
              <p className=" text-lg">
                NFT-Passes will let holders be elligible for: small and big
                streamer token airdrops, NMBL token airdrops, NFT pass staking,
                streamer token staking, white-list spots to private streamer
                token sales, access to the streamer’s alpha chat and more...
                <br />
                <br />
                Passes have 25 levels, and Mana is required to upgrade your
                NFT-passes, mana is used to activate your rewards
                <br />
                <br />
                In stead of the charity and ads based monetization model we aim
                to turn every streamer into a free-to-watch, netflix-like
                subscription.
              </p>
              <div className="pt-8 flex justify-center items-center space-x-14">
                <button className="link rounded-md border-2 border-cyan-700 px-2 py-2">
                  Litepaper link: NFT Pass Subscription Model
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section4;
