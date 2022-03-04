import React from "react";
import rFoot from "../assets/roadmapline.png";
import Image from "next/image";
function Roadmap() {
  return (
    <>
      {/* ROADMAP */}
      <div className="flex py-14 justify-center items-center w-screen bg-[#2d0045] ">
        {/* tab */}
        <div className="flex flex-col justify-center items-center w-screen">
          <h1 className="text-white font-semibold text-5xl">Roadmap</h1>
          <div>
            <div className="grid grid-cols-3 gap-14 py-14">
              {/* card */}

              <div className="border-2 border-[#9600e7] flex justify-center flex-col items-center rounded-xl bg-[#4c0178]   w-[340px] h-[450px]">
                <h1 className="py-4 text-3xl text-white font-semibold">
                  ✅ Tasks Complete
                </h1>
                <ul className="px-4 py-5  font-semibold text-white flex flex-col">
                  <li className="py-2">• Neemble Desktop and Web UX/UI</li>
                  <li className="py-2">• Neemble mobile app UX/UI</li>
                  <li className="py-2">• ULTRA-HD Streaming algorithm</li>
                  <li className="py-2">
                    • Start developing front and back-ends for neemble beta
                  </li>
                  <li className="py-2">• Deploy NMBL Token</li>
                  <li className="py-2">
                    • NFT pass and streamer token monetization model
                  </li>
                </ul>
                <p className="bg-[#3d0565] py-2 px-2 text-white rounded-lg">
                  Phase 1
                </p>
              </div>
              <div className="border-2 border-[#9600e7] flex justify-center flex-col items-center rounded-xl bg-[#4c0178]   w-[340px] h-[450px]">
                <h1 className="py-4 text-3xl text-white font-semibold">
                  ✅ Tasks Complete
                </h1>
                <ul className="px-4  font-semibold text-white flex flex-col">
                  <li className="py-1">• Develop and deploy the website</li>
                  <li className="py-1">• Interactive demos are live now</li>
                  <li className="py-1">• Publish the light paper</li>
                  <li className="py-1">
                    • Initiate development of the NFT maketplace
                  </li>
                  <li className="py-2">
                    • Initiate development of the decentralized exchange on
                    arbitrum network
                  </li>
                  <li className="py-2">• Start sharing content on twitter</li>
                  <li>Initiate a white-list contest for 1111 spots</li>
                </ul>
                <p className="bg-[#3d0565] py-2 px-2 text-white rounded-lg">
                  Phase 2
                </p>
              </div>
              <div className="border-2 border-[#9600e7] flex justify-center flex-col items-center rounded-xl bg-[#4c0178]   w-[340px] h-[450px]">
                <h1 className="py-4 text-3xl text-white font-semibold">
                  💻 Tasks in process
                </h1>
                <ul className="px-4 py-1  font-semibold text-white flex flex-col">
                  <li className="py-2">
                    • Run a small private crowdsale for 1111 true believers, to
                    be able to be the first ever to buy a limited amount of NMBL
                    tokens
                  </li>
                  <li className="py-2">• Update UX/UI in Red and Blue Modes</li>
                  <li className="py-2">
                    • Start reaching out popular streamers with an offer
                  </li>
                  <li className="py-2">• Publish neemble beta release date</li>
                  <li className="py-2">
                    • Publish streamer token mechanics and tokenomics
                  </li>
                </ul>
                <p className="bg-[#3d0565] py-2 px-2 text-white rounded-lg">
                  Phase 3
                </p>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <Image src={rFoot} />
          </div>
        </div>
        {/* tab */}
      </div>

      {/* ROADMAP */}
    </>
  );
}

export default Roadmap;
