import React from "react";
import TeamMemberCard from "../Components/TeamMembers/TeamMemberCard";
import { headTeam, graphicTeam, cpTeam, webTeam, alumni } from "./teamData";

const TeamMembers = () => {
  return (
    <div className="container mx-auto py-8">
      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-center mb-8">OUR TEAM</h1>

      {/* Head Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center bg-gradient-to-r from-purple-300 via-purple-600 to-purple-300 bg-opacity-75 py-2">
          Head
        </h2>
        <div className="flex flex-wrap justify-center">
          {headTeam.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </section>

      {/* Graphic Team Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center bg-gradient-to-r from-blue-300 via-blue-600 to-blue-300 bg-opacity-75 py-2">
          Graphic Team
        </h2>
        <div className="flex flex-wrap justify-center">
          {graphicTeam.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </section>

      {/* CP Team Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center bg-gradient-to-r from-green-300 via-green-600 to-green-300 bg-opacity-75 py-2">
          CP Team
        </h2>
        <div className="flex flex-wrap justify-center">
          {cpTeam.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </section>

      {/* Web Team Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center bg-gradient-to-r from-yellow-300 via-yellow-600 to-yellow-300 bg-opacity-75 py-2">
          Web Team
        </h2>
        <div className="flex flex-wrap justify-center">
          {webTeam.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </section>

      {/* Alumni Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center bg-gradient-to-r from-red-300 via-red-600 to-red-300 bg-opacity-75 py-2">
          Alumni
        </h2>
        <div className="flex flex-wrap justify-center">
          {alumni.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default TeamMembers;
