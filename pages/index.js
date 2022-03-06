import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/Navbar"));

const Section1 = dynamic(() => import("../sections/Section1"));
const Section2 = dynamic(() => import("../sections/Section2"));
const Section3 = dynamic(() => import("../sections/Section3"));
const Section4 = dynamic(() => import("../sections/Section4"));
const Section5 = dynamic(() => import("../sections/Section5"));
const Section6 = dynamic(() => import("../sections/Section6"));
const Section7 = dynamic(() => import("../sections/Section7"));

const Platform = dynamic(() => import("../sections/Platform"));
const NMBL = dynamic(() => import("../sections/NMBL"));
const Streamer = dynamic(() => import("../sections/Streamer"));
const Pool = dynamic(() => import("../sections/Pool"));
const Roadmap = dynamic(() => import("../sections/Roadmap"));
const MeetTheTeam = dynamic(() => import("../sections/MeetTheTeam"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Neemble</title>
        <meta
          name="description"
          content="Neemble The Ultimate blockchain watch to earn
          & stream to earn platform"
        />
      </Head>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />

      <div className="flex justify-center items-center w-screen py-14 bg-royal">
        <h1 className="text-white font-semibold text-3xl lg:text-5xl">
          Neemble Platform
        </h1>
      </div>

      <Platform />

      <div className="flex justify-center items-center w-screen bg-royal">
        <h1 className="text-white font-semibold text-3xl lg:text-5xl">
          NMBL Tokenomics
        </h1>
      </div>

      <NMBL />

      <div className="flex justify-center items-center w-screen bg-royal">
        <h1 className="text-white font-semibold text-3xl lg:text-5xl">
          Streamer Token Tokenomics
        </h1>
      </div>

      <Streamer />
      <Pool />
      <Roadmap />
      <MeetTheTeam />
    </>
  );
}
