import React from "react";
import { FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

interface TeamMemberCardProps {
  photo: string;
  name: string;
  designation: string;
  linkedin?: string;
  email?: string;
  instagram?: string;
  description?: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  photo,
  name,
  designation,
  linkedin,
  email,
  instagram,
  description,
}) => {
  return (
    <div className="w-[320px] mb-12 mx-6 flex flex-col items-center justify-center">
      <div className="w-full bg-gradient-to-b from-[#001f3f] via-gray-900 to-black rounded-xl p-6 shadow-lg border-2 border-transparent bg-clip-border transition-transform transform hover:scale-105 hover:border-indigo-500">
        {/* Profile Photo */}
        <div className="flex justify-center mb-6 relative">
          <div className="w-40 h-40 rounded-full overflow-hidden bg-gradient-to-b from-indigo-500 to-purple-500 p-[3px] shadow-lg">
            <img
              src={photo}
              alt={`${name} photo`}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        {/* Name and Designation */}
        <div className="text-center mb-4">
          <h5 className="text-white text-[20px] font-extrabold mb-2">
            {name || "Unnamed Member"}
          </h5>
          <p className="text-indigo-300 text-sm tracking-wide">
            {designation || "No designation provided"}
          </p>
        </div>
        {/* Description */}
        {description && (
          <p className="text-gray-400 font-medium text-center italic mb-6 px-2">
            {description}
          </p>
        )}
        {/* Social Icons */}
        <div className="flex justify-center space-x-6 text-white">
          {linkedin && (
            <a
              href={linkedin}
              className="hover:text-blue-500 hover:scale-110 transition-transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={28} />
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="hover:text-yellow-400 hover:scale-110 transition-transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope size={28} />
            </a>
          )}
          {instagram && (
            <a
              href={instagram}
              className="hover:text-pink-400 hover:scale-110 transition-transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={28} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
