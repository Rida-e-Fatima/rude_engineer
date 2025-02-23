"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";
const timelineData = [
  {
    id: 1,
    year: "2022",
    title: "Tech N Sol",
    description: "I have completed the Web Development Course from Tech N Sol.",
  },
  {
    id: 2,
    year: "2023",
    title: "Wodves",
    description: "I have completed the internship for Front-End Development from there.",
  },
  {
    id: 3,
    year: "2023",
    title: "WapExp",
    description: "I have learned and practiced high-level animations there.",
  },
  {
    id: 4,
    year: "2023",
    title: "Soft Bridge",
    description: "I used to collaborate with the Software Development team there.",
  },
  {
    id: 5,
    year: "2024",
    title: "Prob N Tech",
    description: "I was working as a Web Developer in ReactJS at Prob N Tech.",
  },
  {
    id: 6,
    year: "2024",
    title: "Javed Gloves",
    description: "I served as an IT assistant there and worked on ERP modules.",
  },
  {
    id: 7,
    year: "2025",
    title: "Remotely",
    description: "Currently, I am doing content writing as a side gig, focusing on freelancing.",
  },
];

const page = () => {
  return (
    <div className="min-h-screen bg-[#000000] text-white">
      <Navbar />
      <div className="flex justify-center items-centerpx-4">
        <div className="relative w-full max-w-3xl">
          {/* <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full hidden md:block"></div> */}
          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              } flex-col md:flex-row items-center mb-8`}
            >
              <div className="w-[60%]  bg-black text-white p-4 rounded-lg shadow-[0_3px_5px_0_#f600a8] relative">
                <span className="absolute left-1 top-1 bg-[#f600a8] text-white px-3 py-1 rounded-md">
                  {item.id.toString().padStart(2, "0")}
                </span>
                <h3 className="text-xl font-semibold text-[#f600a8] mt-5">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 mt-2">{item.description}</p>
                {/* <span className="absolute -right-3 top-5 w-7 h-7 bg-[#f600a8] rounded-full"></span> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
