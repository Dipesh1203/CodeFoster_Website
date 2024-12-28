import React from "react";
import TeamMemberCard from "../components/TeamMemberCard";
import {
  managementTeam,
  graphicTeam,
  cpTeam,
  webTeam,
  mlTeam,
  alumni,
} from "./teamData";

const TeamMembers = () => {
  return (
    <div className="container mx-auto py-8 bg-[#1c2e4a] text-white">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text shadow-lg">
        OUR TEAM
      </h1>

      {/* Head Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center bg-gradient-to-r from-purple-300 via-purple-600 to-purple-300 bg-opacity-90 py-3 rounded-lg shadow-md">
          Management Team
        </h2>
        <div className="flex flex-wrap justify-center">
          {managementTeam?.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </section>

      {/* CP Team Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center bg-gradient-to-r from-green-300 via-green-600 to-green-300 bg-opacity-90 py-3 rounded-lg shadow-md">
          Competitive Programming Team
        </h2>
        <div className="flex flex-wrap justify-center">
          {cpTeam?.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </section>

      {/* Web Team Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center bg-gradient-to-r from-yellow-300 via-yellow-600 to-yellow-300 bg-opacity-90 py-3 rounded-lg shadow-md">
          Web Development Team
        </h2>
        <div className="flex flex-wrap justify-center">
          {webTeam?.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </section>

      {/* ML Team Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center bg-gradient-to-r from-teal-300 via-teal-600 to-teal-300 bg-opacity-90 py-3 rounded-lg shadow-md">
          Machine Learning Team
        </h2>
        <div className="flex flex-wrap justify-center">
          {mlTeam?.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </section>

      {/* Graphic Team Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center bg-gradient-to-r from-blue-300 via-blue-600 to-blue-300 bg-opacity-90 py-3 rounded-lg shadow-md">
          Graphic & Content Team
        </h2>
        <div className="flex flex-wrap justify-center">
          {graphicTeam?.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </section>

      {/* Alumni Section */}
      {/* <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center bg-gradient-to-r from-red-300 via-red-600 to-red-300 bg-opacity-90 py-3 rounded-lg shadow-md">
          Alumnies
        </h2>
        <div className="flex flex-wrap justify-center">
          {alumni?.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default TeamMembers;
