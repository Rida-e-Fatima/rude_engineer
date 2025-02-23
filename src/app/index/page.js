"use client";
// import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
// import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import Image from "next/image";

import {
  FaFolderOpen,
  FaGraduationCap,
  FaBriefcase,
  FaPhone,
} from "react-icons/fa";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const cards = [
    {
      title: "Portfolio Projects",
     icon:<FaFolderOpen />,
      link: "/work",
    },
    {
      title: "Education",
      icon: <FaGraduationCap />,
      link: "/education",
    },
    {
      title: "Experience",
      icon: <FaBriefcase />,
      link: "/experience",
    },
    {
      title: "Contact",
      icon: <FaPhone />,
      link: "/contact",
    },
  ];

  const fiverrGigs = [
    {
      id: 1,
      image:
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/410300592/original/0e3e3e9a68d37ae7444a846a8d309d6bb7c10600/develop-personal-portfolio-wesbite-business-or-agency-website.png",
      link: "https://www.fiverr.com/rdfeng7/",
    },
    {
      id: 2,
      image:
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/407195429/original/f1479b6e2739cf5ee3162a24c86f8af4f7e34163/do-wordpress-website-speed-optimization-improve-page-rank.png",
      link: "https://www.fiverr.com/rdfeng7/",
    },
    {
      id: 3,
      image:
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/400617377/original/52a62e45b714c78d3620948de71566d0c28dac47/do-web-development-seo-high-loading-speed-payment-method.png",
      link: "https://www.fiverr.com/rdfeng7/",
    },
  ];

  return (
    <>
      <section className="text-gray-600 body-font my-4">
        <div className="container px-5 mx-auto ">
          <div className="grid grid-cols-12 gap-3 ">
            {/* First row: Large Card (8 cols) & Small Card (4 cols) */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-span-12 lg:col-span-8 p-4 cursor-pointer rounded-3xl bg-[#000000] shadow-[0_3px_5px_0_#f600a8] backdrop-blur-[1px]">
              <div className="h-full  w-full flex flex-col  ">
                <h2 className="text-4xl font-semibold mb-4 text-white text-center">
                  Serve on{" "}
                  <motion.span
                    animate={{
                      textShadow: [
                        "0px 0px 5px rgba(34, 197, 94, 0.8)", // Light green glow
                        "0px 0px 10px rgba(34, 197, 94, 1)", // Stronger green glow
                        "0px 0px 15px rgba(34, 197, 94, 0.8)", // Maximum glow intensity
                        "0px 0px 10px rgba(34, 197, 94, 1)",
                        "0px 0px 5px rgba(34, 197, 94, 0.8)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-green-900 text-5xl"
                  >
                    Fiverr
                  </motion.span>
                </h2>

                {/* Dynamic Images Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-col items-center justify-center ">
                  {fiverrGigs.map((gig) => (
                    <a
                      key={gig.id}
                      href={gig.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <motion.div
                        className="rounded-xl overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <img
                          src={gig.image}
                          alt={`Gig ${gig.id}`}
                          className="w-full h-auto"
                        />
                      </motion.div>
                    </a>
                  ))}
                </div>

                <motion.h1
                  onClick={() => router.push("/about")}
                  animate={{
                    textShadow: [
                      "0px 0px 5px rgba(255, 255, 255, 0.8)",
                      "0px 0px 10px rgba(255, 255, 255, 1)",
                      "0px 0px 15px rgba(255, 255, 255, 0.8)",
                      "0px 0px 10px rgba(255, 255, 255, 1)",
                      "0px 0px 5px rgba(255, 255, 255, 0.8)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-white text-xl mt-4 cursor-pointer text-end"
                >
                  Know more
                </motion.h1>
              </div>
            </motion.div>

            {cards.map((card, index) => (
              <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
                key={index}
                className="col-span-12 lg:col-span-4 p-4 rounded-3xl bg-[#000000] shadow-[0_3px_5px_0_#f600a8] backdrop-blur-[1px] h-full"
              >
                <div className="relative h-full w-full flex flex-col items-center justify-center text-center ">
               {/* Main Heading */}
                  <h1 className="text-3xl font-bold mb-4 text-[#f600a8]">
                    {card.title}
                  </h1>
                  <motion.div
                    onClick={() => router.push(card.link)}
                    className=" text-white text-3xl drop-shadow-[0_0_10px_#f600a8] cursor-pointer border-2 rounded-full p-8"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                  >
                    {card.icon}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
