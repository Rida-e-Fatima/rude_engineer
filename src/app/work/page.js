"use client";
"useclient";
import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { FaEye, FaCode } from "react-icons/fa";
const projects = [
  {
    id: 1,
    title: "Project One",
    image: "/img-1.png",
    description: "A short description of Project One.",
    previewLink: "#",
    codeLink: "#",
  },
  {
    id: 2,
    title: "Project Two",
    image: "/img-2.png",
    description: "A short description of Project Two.",
  },
  {
    id: 3,
    title: "Project Three",
    image: "/img-3.png",
    description: "A short description of Project Three.",
  },
  {
    id: 4,
    title: "Project Four",
    image: "/img-4.png",
    description: "A short description of Project Four.",
  },
  {
    id: 5,
    title: "Project Five",
    image: "/img-5.png",
    description: "A short description of Project Five.",
  },
  {
    id: 6,
    title: "Project Six",
    image: "/img-6.png",
    description: "A short description of Project Six.",
  },
  {
    id: 7,
    title: "Project Seven",
    image: "/img-7.png",
    description: "A short description of Project Seven.",
  },
  {
    id: 8,
    title: "Project Eight",
    image: "/img-8.png",
    description: "A short description of Project Eight.",
  },
  {
    id: 9,
    title: "Project Nine",
    image: "/img-9.png",
    description: "A short description of Project Nine.",
  },
  {
    id: 10,
    title: "Project Ten",
    image: "/img-10.png",
    description: "A short description of Project Ten.",
  },
  {
    id: 11,
    title: "Project Eleven",
    image: "/img-11.png",
    description: "A short description of Project Eleven.",
  },
  {
    id: 12,
    title: "Project Twelve",
    image: "/img-12.png",
    description: "A short description of Project Twelve.",
  },
  {
    id: 13,
    title: "Project Thirteen",
    image: "/img-13.png",
    description: "A short description of Project Thirteen.",
  },
  {
    id: 14,
    title: "Project Fourteen",
    image: "/img-14.png",
    description: "A short description of Project Fourteen.",
  },
];

const page = () => {
  const ref = useRef(null);

  return (
    <div className="min-h-screen bg-[#000000] text-white ">
      <Navbar />
      <div ref={ref} className="flex flex-col items-center ">
        <h2 className="text-4xl font-bold text-[#f600a8] mb-5">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl ">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative bg-[#000000] p-2  rounded-lg shadow-[0_3px_5px_0_#f600a8] overflow-hidden flex flex-col items-center"
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.div
                className="w-52 h-52 relative"
                initial={{ rotateY: -90 }}
                whileInView={{ rotateY: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: index * 0.3,
                }}
                viewport={{ once: false }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </motion.div>
              <h3 className="text-lg font-semibold text-[#f600a8] ">
                {project.title}
              </h3>
              <p className="text-gray-300  text-center text-sm">
                {project.description}
              </p>
              <div className="flex gap-4 ">
                <a
                  href={project.previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-1-white text-white rounded-full shadow-md transition hover:bg-white hover:text-black"
                >
                  <FaEye size={20} />
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-1-white text-white rounded-full shadow-md transition hover:bg-white hover:text-black"
                >
                  <FaCode size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default page