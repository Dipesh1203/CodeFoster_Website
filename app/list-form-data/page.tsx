"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

interface FormData {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const DataDisplayPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [data, setData] = useState<FormData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await axios.get<FormData[]>("/api/form-submit");
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDarkMode = localStorage.getItem("darkMode") === "true";
      setDarkMode(isDarkMode);
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
  };

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="bg-white h-[100vh] dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <nav className="p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Form Data Display</h1>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
        </nav>

        <main className="container mx-auto p-4">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {data.map((item) => (
                <div
                  key={item._id}
                  className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow"
                >
                  <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {item.email}
                  </p>
                  <p className="mb-2">{item.message}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Created: {new Date(item.createdAt).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default DataDisplayPage;
