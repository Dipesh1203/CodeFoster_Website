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
    <div className="w-[300px] mb-10 mx-5 flex flex-col items-center justify-center">
      <div className="w-full bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-lg p-6 shadow-lg border border-gray-700">
        <div className="flex justify-center mb-6">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-500 shadow-lg">
            <img
              src={photo}
              alt={`${name} photo`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="text-center mb-4">
          <h5 className="text-white text-[18px] font-bold mb-1">
            {name || "Unnamed Member"}
          </h5>
          <p className="text-gray-400 text-sm">
            {designation || "No designation provided"}
          </p>
        </div>
        <p className="text-gray-300 font-medium italic text-center mb-4">
          {description || "No description available."}
        </p>
        <div className="flex justify-center space-x-4 text-white">
          {linkedin && (
            <a
              href={linkedin}
              className="hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="hover:text-yellow-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope size={24} />
            </a>
          )}
          {instagram && (
            <a
              href={instagram}
              className="hover:text-pink-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
