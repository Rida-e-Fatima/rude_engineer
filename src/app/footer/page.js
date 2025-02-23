"use client";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

import React from 'react'

const page = () => {
  return (
    <div className=" bg-[#000000] text-white">
       <footer className="bg-black text-white ">
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
          className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition"
        >
          Download Resume
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
    </footer>
    </div>
  )
}

export default page




