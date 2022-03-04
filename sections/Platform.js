import React from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import Image from "next/image";
function Platform() {
  return (
    <>
      <div className="pb-40 w-screen bg-royal flex flex-col items-center justify-center">
        <div className="flex space-x-40">
          <div className=" w-[400px] h-[auto] hover:border-2 hover:rounded-md cursor-pointer">
            <Image src={p1} />
          </div>
          <div className=" w-[400px] h-[auto] hover:border-2 hover:rounded-md cursor-pointer">
            <Image src={p2} />
          </div>
        </div>
        <div className="mt-14">
          <div className=" w-[965px] h-[auto]  hover:border-2 hover:rounded-md cursor-pointer">
            <Image src={p3} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Platform;
