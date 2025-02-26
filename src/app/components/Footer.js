"use client";
import { FaWhatsapp, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

import React from "react";

const page = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-white bg-[#000000] flex flex-col justify-center align-items-center py-5"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-center space-x-5 items-center px-6">
        {/* Navigation Links */}
        <nav className="flex space-x-6 text-lg">
          <a href="#home" className="hover:text-purple-400 transition">
            Home
          </a>
          <a href="#about" className="hover:text-purple-400 transition">
            About
          </a>
          <a href="#services" className="hover:text-purple-400 transition">
            Services
          </a>
          <a href="#projects" className="hover:text-purple-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-purple-400 transition">
            Contact
          </a>
        </nav>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 shadow-[0_3px_5px_0_#f600a8] backdrop-blur-[1px] font-semibold px-5 py-3 rounded-lg transition-all duration-300  w-fit mx-auto"
        >
          <span className="relative flex items-center justify-center w-6 h-6 bg-[#f600a8] rounded-full animate-pulse">
            <FaDownload className="text-black text-sm " />
          </span>
          <span className="hover:underline">Download Resume</span>
        </a>

        {/* WhatsApp Floating Button */}
        <motion.a
          href="https://wa.me/1234567890"
          target="_blank"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg text-3xl flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          animate={{
            y: [0, -5, 0], // Bouncing animation
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <FaWhatsapp />
        </motion.a>
      </div>
    </motion.section>
  );
};

export default page;
