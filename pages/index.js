import Head from "next/head";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

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
  //Use State
  const [nav, setNav] = useState();
  const [btn, setBtn] = useState();
  const [neemble, setNeemble] = useState();
  const [streamer, setStreamer] = useState();
  const [tekenomics, setTekenomics] = useState();
  const [roadmap, setRoadmap] = useState();
  const [team, setTeam] = useState();
  //Use In View
  const [homeRef, homeView] = useInView();
  const [section4Ref, section4View] = useInView();
  const [section7Ref, section7View] = useInView();
  const [platformRef, platformView] = useInView();
  const [nmblRef, nmblView] = useInView();
  const [poolRef, poolView] = useInView();
  const [roadmapRef, roadmapView] = useInView();
  const [teamRef, TeamView] = useInView();

  useEffect(() => {
    if (TeamView) {
      setNav("border-b-[#00D8FA] nav-blue");
      setBtn("border-[#00D8FA]");
      setTekenomics("");
      setStreamer("");
      setRoadmap("");
      setTeam("link border-2 border-[#00D8FA] rounded-[7px] px-3 py-1");
      setNeemble("");
    }
    if (roadmapView) {
      setNav("border-b-[#905FA8] nav-purple");
      setBtn("border-[#905FA8]");
      setTekenomics("");
      setStreamer("");
      setRoadmap(
        " border-2 border-[#905FA8] nav-purple rounded-[7px] px-3 py-1"
      );
      setTeam("");
      setNeemble("");
    }
    if (nmblView) {
      setTekenomics("link border-2 border-[#00D8FA] rounded-[7px] px-3 py-1");
      setStreamer("");
      setRoadmap("");
      setTeam("");
      setNeemble("");
    }
    if (platformView) {
      setNav("border-b-[#905FA8] nav-purple");
      setBtn("border-[#905FA8]");
    }

    if (section7View) {
      setNav("border-b-[#00D8FA] nav-blue");
      setBtn("border-[#00D8FA]");
    }
    if (poolView) {
      setNav("border-b-[#00D8FA] nav-blue");
      setBtn("border-[#00D8FA]");
    }
    if (homeView) {
      setNav("border-b-[#00D8FA] nav-blue");
      setBtn("border-[#00D8FA]");
      setNeemble("link border-2 border-[#00D8FA] rounded-[7px] px-3 py-1");
      setStreamer("");
      setTekenomics("");
      setRoadmap("");
      setTeam("");
    }
    if (section4View) {
      setStreamer(
        " border-2 border-[#905FA8] nav-purple rounded-[7px] px-3 py-1"
      );
      setNav("border-b-[#905FA8] nav-purple");
      setBtn("border-[#905FA8]");
      setNeemble("");
      setTekenomics("");
      setRoadmap("");
      setTeam("");
    }
  }, [
    TeamView,
    roadmapView,
    nmblView,
    platformView,
    section7View,
    poolView,
    homeView,
    section4View,
  ]);
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
      <Navbar
        navColor={nav}
        navBtn={btn}
        menu1={neemble}
        menu2={streamer}
        menu3={tekenomics}
        menu4={roadmap}
        menu5={team}
      />
      <Section1 menuRef={homeRef} />
      <Section2 />
      <Section3 />
      <Section4 menuRef={section4Ref} />
      <Section5 />
      <Section6 />
      <Section7 menuRef={section7Ref} />

      <div className="flex justify-center items-center w-screen py-14 bg-royal">
        <h1 className="text-white font-semibold text-3xl lg:text-5xl">
          Neemble Platform
        </h1>
      </div>

      <Platform menuRef={platformRef} />

      <div className="flex justify-center items-center w-screen bg-royal">
        <h1 className="text-white font-semibold text-3xl lg:text-5xl">
          NMBL Tokenomics
        </h1>
      </div>

      <NMBL menuRef={nmblRef} />

      <div className="lg:pt-44  flex justify-center items-center w-screen bg-royal">
        <h1 className="text-white font-semibold text-2xl md:text-3xl lg:text-5xl">
          Streamer Token Tokenomics
        </h1>
      </div>

      <Streamer />
      <Pool menuRef={poolRef} />
      <Roadmap menuRef={roadmapRef} />
      <MeetTheTeam menuRef={teamRef} />
    </>
  );
}
