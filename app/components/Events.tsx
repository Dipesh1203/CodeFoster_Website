import React, { useEffect, useState } from "react";

const Events = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section className="w-full h-auto bg-cover bg-center bg-gradient-to-br from-purple-500 to-indigo-600">
      <div className="flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="w-full md:w-1/2 p-6 md:p-12 box-border bg-violet-500 flex items-start">
          <div className="bg-black bg-opacity-50 text-white p-6 md:p-10 rounded-lg transition duration-500 hover:bg-pink-500">
            <h1 className="text-2xl md:text-4xl font-bold uppercase">Events</h1>
            <p className="mt-4 text-sm md:text-base">
            Explore our vibrant events section, where the club showcases exciting workshops, hackathons, coding challenges, and guest lectures.
             Stay updated on opportunities to enhance your programming skills, network with peers, and solve real-world problems.<br></br>
            <br></br>Join us to collaborate, innovate, and grow in a dynamic tech-driven community!
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 bg-black bg-opacity-50 flex flex-col z-50">
  <ul className="px-4 md:px-10 py-6 space-y-6">
    {[
      {
        date: 18,
        month: "January, 2025",
        heading: "CodeQuest",
        description:
          "Designed to challenge and inspire, this event offers problems of varying difficulty to help participants gauge their expertise, enhance problem-solving skills, and compete with peers.",
      },
      {
        date: 9,
        month: "October, 2024",
        heading: "TechTrack",
        description:
          "Join us for an exciting event featuring Competitive Programming, Open Source, and Machine Learning, along with engaging Q&A sessions and amazing prize giveaways ",
      },
    ].map((event, index) => (
      <li
        key={index}
        className="bg-white flex flex-col md:flex-row shadow-lg rounded-md mb-4"
      >
        {/* Date Section */}
        <div className="w-full md:w-1/3 bg-gray-800 text-white flex flex-col items-center justify-center p-4 transition duration-500 hover:bg-pink-500">
          <h2 className="text-3xl md:text-4xl">{event.date}</h2>
          <span className="text-lg">{event.month}</span>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-2/3 p-4 md:p-5 flex flex-col justify-between">
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-2">
              {event.heading}
            </h3>
            <p className="text-sm md:text-base">{event.description}</p>
          </div>
          <button
            className="mt-4 inline-block px-4 py-2 border border-gray-800 text-gray-800 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition duration-500"
          >
            View Details
          </button>
        </div>
      </li>
    ))}
  </ul>
</div>

      </div>
    </section>
  );
};

export default Events;
