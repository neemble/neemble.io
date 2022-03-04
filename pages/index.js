import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Section1 from "../sections/Section1";
import Section2 from "../sections/Section2";
import Section3 from "../sections/Section3";
import Section4 from "../sections/Section4";
import Section5 from "../sections/Section5";
import Section6 from "../sections/Section6";
import Section7 from "../sections/Section7";
import Platform from "../sections/Platform";
import NMBL from "../sections/NMBL";
import Streamer from "../sections/Streamer";
import Pool from "../sections/Pool";
import Roadmap from "../sections/Roadmap";
import MeetTheTeam from "../sections/MeetTheTeam";

export default function Home() {
  return (
    <>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />

      <div className="flex justify-center items-center w-screen py-14 bg-royal">
        <h1 className="text-white font-semibold text-5xl">Neemble Platform</h1>
      </div>

      <Platform />

      <div className="flex justify-center items-center w-screen bg-royal">
        <h1 className="text-white font-semibold text-5xl">NMBL Tokenomics</h1>
      </div>

      <NMBL />

      <div className="flex justify-center items-center w-screen bg-royal">
        <h1 className="text-white font-semibold text-5xl">
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
