"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/Navbar";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPython,
  FaGithub,
  FaFigma,
  FaGitAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaDiscord,
  FaBehance,
 
} from "react-icons/fa";

const socialLinks = [
  { icon: FaFacebook, link: "#" },
  { icon: FaInstagram, link: "#" },
  { icon: FaTwitter, link: "#" },
  { icon: FaLinkedin, link: "#" },
  { icon: FaGithub, link: "#" },
  { icon: FaDiscord, link: "#" },
  { icon: FaBehance, link: "#" },
];

const skills = {
  frontend: [
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
    { name: "JavaScript", icon: FaJsSquare },
    { name: "React.js", icon: FaReact },
  ],
  backend: [
    { name: "Node.js", icon: FaNodeJs },
    { name: "Databases", icon: FaDatabase },
    { name: "Python", icon: FaPython },
    
  ],
  tools: [
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: FaGithub },
    { name: "Figma", icon: FaFigma },
  ],
};

const page = () => {
  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col items-center ">
      <Navbar />

      {/* Card Container */}
      <div className="flex justify-center items-center w-full px-3">
        <motion.div
          className="rounded-3xl bg-[#000000] shadow-[0_3px_5px_0_#f600a8] flex flex-col md:flex-row max-w-6xl w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Profile Image Section */}
          <div className="md:w-1/3 flex flex-col justify-center items-center p-3">
            <Image
              src="/Rida-e-Fatima.png"
              alt="Profile"
              width={200}
              height={200}
              className="rounded-full shadow-[0_3px_5px_0_#f600a8]"
            />
            <h1 className="text-xl font-bold text-[#f600a8] mt-4">@Rude_Engineer</h1>
          </div>

          {/* Description Section */}
          <div className="md:w-2/3 p-6 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-3xl font-bold text-[#f600a8]">About Me</h2>
            <p className="text-gray-300 mt-4 leading-relaxed">
              Hi, I'm <span className="text-white font-semibold">Rida-e-Fatima @ Software Engineer</span> 👋! 
              A passionate <strong>web developer</strong> & <strong>designer</strong> who loves creating 
              beautiful and functional digital experiences. With expertise in 
              <strong>Next.js, Framer Motion, and Tailwind CSS</strong>, I specialize in 
              crafting smooth, interactive, and user-friendly websites.
            </p>
            <p className="text-gray-400 mt-4">Let's build something amazing together! 🚀</p>

            {/* Social Media Icons */}
            <motion.div initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }} className="flex justify-center md:justify-start space-x-4 mt-6">
              {socialLinks.map(({ icon: Icon, link }, index) => (
                <motion.a 
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                key={index} href={link} target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-[#f600a8] transition">
                  <Icon />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Skills Section */}
      <motion.div 
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-6xl my-4 text-center">
        {/* <h2 className="text-4xl font-bold text-[#f600a8] mb-6">Skills</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillsList]) => (
            <div key={category} className="p-4 rounded-3xl bg-[#000000] shadow-[0_3px_5px_0_#f600a8]">
              <h3 className="text-xl font-semibold text-[#f600a8] mb-4 capitalize">{category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {skillsList.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 bg-[#222] p-3 rounded-lg shadow-md"
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >

                    <skill.icon className="text-white text-lg" />
                    <span className="text-white text-lg">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}


export default page