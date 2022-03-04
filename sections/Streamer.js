import React from "react";
import Image from "next/image";
import chart2 from "../assets/chart2.png";

function Streamer() {
  return (
    <div className="flex justify-center items-center w-screen py-14  bg-royal">
      <div className="w-[900px] h-[auto]">
        <Image src={chart2}></Image>
      </div>
    </div>
  );
}

export default Streamer;
