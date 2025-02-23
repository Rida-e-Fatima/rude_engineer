
"use client";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const page = () => {
  return (
    <div className="min-h-screen bg-[#000000] text-white">
      <Navbar/>
    <div className="flex flex-col items-center justify-center p-6 ">
      <motion.h2
        className="text-white text-3xl md:text-4xl font-bold mb-4 "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get in Touch ✨
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl bg-[#000000] p-8 rounded-lg shadow-[0_3px_5px_0_#f600a8]">
        {/* Contact Details */}
        <motion.div
          className="text-white space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4">
            <FaPhone className="text-purple-400 text-2xl" />
            <span className="text-lg">+123 456 7890</span>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-purple-400 text-2xl" />
            <span className="text-lg">hello@example.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-purple-400 text-2xl" />
            <span className="text-lg">Faisalabad, Pakistan</span>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="space-y-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-purple-400"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
    </div>
  );
}



export default page