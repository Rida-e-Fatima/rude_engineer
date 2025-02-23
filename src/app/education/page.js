"use client";
import React from 'react'
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
const educationData = [
  {
    level: "Masters",
    title: "Not Decided Yet",
    description: "I’m considering pursuing a master’s degree in the future.",
  },
  {
    level: "Bachelors",
    title: "Government College University Faisalabad",
    description: "Currently pursuing a BS in Software Engineering while working as a freelancer.",
  },
  {
    level: "College",
    title: "Superior College",
    description: "Completed pre-engineering with an 86% score.",
  },
  {
    level: "School",
    title: "Cambridge Model High School",
    description: "Completed matriculation in science with 85% marks.",
  },
  
];

const page = () => {
  return (
    <div className="min-h-screen bg-[#000000] text-white">
      <Navbar />
       <section className=" py-5 ">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-[#f600a8]">
            My Education & Skills
          </h2>
        </motion.div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-4 rounded-3xl bg-[#000000] shadow-[0_3px_5px_0_#f600a8] transition-all"
            >
              <h3 className="text-6xl font-semibold text-[#f600a8] opacity-20">{edu.level}</h3>
              <h2 className="text-2xl font-bold my-2">{edu.title}</h2>
              <p className="text-gray-400">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default page
