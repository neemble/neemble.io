import React from "react";
import Team from "../components/Team";
import { DATA } from "../components/TeamData";

function MeetTheTeam() {
  return (
    <>
      {" "}
      {/* Meet the Team */}
      <div className="flex flex-col py-16 justify-center items-center w-screen bg-[#0d1733] ">
        {/* tab */}
        <div className="flex justify-center items-center w-screen bg-royal">
          <h1 className="text-white font-semibold text-5xl">Meet The Team</h1>
        </div>
        {/* tab */}

        <div className="py-14 grid grid-cols-3 gap-14">
          {DATA.map((team) => (
            <Team
              tName={team.name}
              tTitle={team.title}
              tBio={team.bio}
              tImage={team.img}
            />
          ))}
        </div>
      </div>
      {/* team */}
    </>
  );
}

export default MeetTheTeam;
