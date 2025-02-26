"use client";
import { motion } from "framer-motion";
import {
  FaFolderOpen,
  FaGraduationCap,
  FaBriefcase,
  FaPhone,
  FaTools,
} from "react-icons/fa";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const cards = [
    // { title: "About", link: "/about" },
    { title: "Portfolio Projects", icon: <FaFolderOpen />, link: "/work" },
    { title: "Skills", icon: <FaTools  />, link: "/skill" },
    { title: "Education", icon: <FaGraduationCap />, link: "/education" },
    { title: "Experience", icon: <FaBriefcase />, link: "/experience" },
    { title: "Contact", icon: <FaPhone />, link: "/contact" },
    { } 
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
    <section className="bg-[#000000] flex flex-col justify-center align-items-center py-5">
      <div className="container px-5 mx-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-12 gap-5">
          {/* First Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="col-span-12 lg:col-span-5 p-4 rounded-3xl bg-[#000000] shadow-[0_3px_5px_0_#f600a8] backdrop-blur-[1px]"
          >
            <div className="h-full flex flex-col">
             
                
              <h2 className="text-4xl font-semibold text-white pb-2">
                Serve on
                <motion.span
                  animate={{
                    textShadow: [
                      "0px 0px 5px rgba(34, 197, 94, 0.8)",
                      "0px 0px 10px rgba(34, 197, 94, 1)",
                      "0px 0px 15px rgba(34, 197, 94, 0.8)",
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
                        loading="lazy"
                      />
                    </motion.div>
                  </a>
                ))}
              </div>


            </div>
          </motion.div>

          {cards.slice(0, 2).map((card, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              key={index}
              className={`col-span-12 lg:col-span-${
                index === 0 ? "4" : "3"
              } p-4 rounded-3xl bg-[#000000] shadow-[0_3px_5px_0_#f600a8] backdrop-blur-[1px]`}
            >
              <div className="h-full flex flex-col items-center justify-center text-center">
              <motion.div
                  onClick={() => router.push(card.link)}
                  className="relative text-white text-lg drop-shadow-[0_0_10px_#f600a8] cursor-pointer "
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                >
                  {card.icon}
                </motion.div>
                <h1 className="text-3xl font-bold mb-4 text-[#f600a8]">
                  {card.title}
                </h1>
                <p className="text-white">
                  The map in the array. Calls a defined callback function on each
                  element of an array, and returns an array that contains the.
                </p>
              </div>
            </motion.div>
          ))}

          {/* Second Row: Three equal divs (Each 4 columns) */}
          {cards.slice(2, 5).map((card, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              key={index}
              className="col-span-12 lg:col-span-4 p-4 rounded-3xl bg-[#000000] shadow-[0_3px_5px_0_#f600a8] backdrop-blur-[1px]"
            >
              
              <div className="h-full flex flex-col items-center justify-center text-center">
              <motion.div
                  onClick={() => router.push(card.link)}
                  className="relative text-white text-lg drop-shadow-[0_0_10px_#f600a8] cursor-pointer "
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                >
                  {card.icon}
                </motion.div>
                <h1 className="text-3xl font-bold mb-4 text-[#f600a8]">
                  {card.title}
                </h1>
              
                <p className="text-white">
                  The map in the array. Calls a defined callback function on each
                  element of an array, and returns an array that contains the.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
