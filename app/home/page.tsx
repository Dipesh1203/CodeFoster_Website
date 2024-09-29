"use client";
import React, { useState, useEffect } from "react";
import UserForm from "../components/UserForm";

const Page = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check user's preferred color scheme
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen h-[100vh] bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-700 p-2 rounded-full"
        >
          {darkMode ? "🌞" : "🌙"}
        </button>

        {/* Hero Section */}
        <header className="bg-blue-600 dark:bg-blue-800 text-white py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to Our Community
            </h1>
            <p className="text-xl mb-8">
              Join thousands of members from around the world
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
              Join Our Community
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto py-12 px-4">
          <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
            Discover the joy of coding, together.
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src="/api/placeholder/400/300"
                alt="Community map"
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 dark:text-white">
                What we offer:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
                    1
                  </span>
                  <div>
                    <h4 className="font-semibold dark:text-white">
                      Connect with others
                    </h4>
                    <p className="dark:text-gray-300">
                      Join our global community and chat with like-minded
                      individuals.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
                    2
                  </span>
                  <div>
                    <h4 className="font-semibold dark:text-white">
                      Build projects together
                    </h4>
                    <p className="dark:text-gray-300">
                      Collaborate on open-source projects and learn from others.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
                    3
                  </span>
                  <div>
                    <h4 className="font-semibold dark:text-white">
                      Attend events
                    </h4>
                    <p className="dark:text-gray-300">
                      Participate in workshops, hackathons, and meetups.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </main>

        {/* Project Section */}
        <section className="bg-gray-200 dark:bg-gray-800 py-12 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4"
                >
                  <img
                    src={`/api/placeholder/200/150?text=Project ${i}`}
                    alt={`Project ${i}`}
                    className="w-full rounded mb-4"
                  />
                  <h3 className="font-semibold mb-2 dark:text-white">
                    Project Name
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Short description of the project goes here.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8 px-4">
          <UserForm />
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Our Community. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Page;
