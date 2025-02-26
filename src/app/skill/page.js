"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cards = [
  { id: 1, title: "Content Writing", image: "/img-1.png" },
  { id: 2, title: "Business Development", image: "/img-2.png" },
  { id: 3, title: "Graphic Designing", image: "/img-3.png" },
  { id: 4, title: "Digital Marketing", image: "/img-4.png" },
];

const Page = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  // Convert vertical scroll into horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-150%"]);

  return (
    <section ref={scrollRef} className="h-[250vh] bg-[#000000] text-white">
      <div className="sticky top-0 flex items-center h-screen overflow-hidden">
        <motion.div style={{ x }} className="flex space-x-6 md:space-x-10 px-5">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className="relative bg-[#000000] shadow-[0_3px_5px_0_#f600a8] backdrop-blur-[1px] p-5 flex flex-col md:flex-row items-center w-[90vw] sm:w-[70vw] md:w-[400px] lg:w-[450px]"
              whileHover={{ scale: 1.05 }}
            >
              {/* Left Side Image */}
              <img
                src={card.image}
                alt={card.title}
                className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg"
              />
              {/* Right Side Text */}
              <div className="ml-0 md:ml-5 text-center md:text-left mt-4 md:mt-0">
                <h3 className="text-lg sm:text-xl font-semibold">{card.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xs sm:max-w-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat massa eu erat cursus.
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Page;
