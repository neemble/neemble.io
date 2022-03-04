import React from "react";
import chart1 from "../assets/chart1.png";
import Image from "next/image";
function NMBL() {
  return (
    <div className="flex justify-center items-center w-screen  bg-royal">
      <div className="w-[900px] h-[auto]">
        <Image src={chart1}></Image>
      </div>
    </div>
  );
}

export default NMBL;
