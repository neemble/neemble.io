import React from "react";
import gameTeam from "../assets/gameteams.png";
import Image from "next/image";

function Section5() {
  return (
    <>
      <div className="py-24 bg-vid flex justify-evenly  w-screen">
        <div className=" flex justify-center items-center w-1/2 h-96">
          <div className="rounded-md px-4 py-5 bg-glass border-2 border-cyan-700">
            <div className=" flex flex-col justify-start items-start text-white py-4 px-4">
              <h1 className="pb-14 text-3xl">Introducing Team Streams</h1>
              <p className="pb-8 text-lg">
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
          </div>
        </div>
        <div className=" w-2/5 h-44">
          <Image src={gameTeam}></Image>
        </div>
      </div>
    </>
  );
}

export default Section5;
