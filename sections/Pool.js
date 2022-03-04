import React from "react";

function Pool() {
  return (
    <div className="flex py-44 justify-center items-center w-screen bg-gradient-to-r from-[#3b57b1] to-[#1a095e]  ">
      <div className=" flex justify-center flex-col items-center bg-glass-1 rounded-xl bg-[#3484ba]   w-[340px] h-96">
        <h1 className="py-4 text-4xl text-white font-semibold">Neemble Pool</h1>
        <ul className="font-semibold text-white flex flex-col">
          <li className="py-2">
            • Received in Watch to Earn/
            <br />
            Stream to Earn Rewards
          </li>
          <li className="py-2">• Rewarded in trivias and quizes</li>
          <li className="py-2">• On Stream mini games</li>
          <li className="py-2">• Streamer Token Airdrops</li>
          <li className="py-2">• and much more...</li>
        </ul>
      </div>
    </div>
  );
}

export default Pool;
