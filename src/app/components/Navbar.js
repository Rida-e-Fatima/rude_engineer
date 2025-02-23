"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="px-9  w-full  shadow-md py-3 flex justify-end">
      <motion.div

initial={{ boxShadow: "0px 0px 5px 0px #f600a8" }}
animate={{
  boxShadow: [
    "0px 0px 5px 0px #f600a8", 
    "0px 0px 10px 2px #d91f7e", 
    "0px 0px 15px 4px #fff", 
    "0px 0px 10px 2px #d91f7e", 
    "0px 0px 5px 0px #f600a8"
  ],
  y: [0, -5, 0], // Bounce effect
}}
transition={{
  boxShadow: { duration: 3, repeat: Infinity, ease: "linear" },
  y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
}}
onClick={() => router.push("/")}
className="w-14 h-14 rounded-full cursor-pointer overflow-hidden flex items-center justify-center"
      >
        <Image
          src="/logo.jpg" // Tumhara logo image path
          alt="Logo"
          width={50}
          height={50}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </nav>
  );
}
