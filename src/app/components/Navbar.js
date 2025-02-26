"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();

  return (
    <section className="bg-[#000000] flex flex-col justify-center align-items-center py-5">
      <nav className="px-5 w-full flex justify-start">
        <motion.div

          onClick={() => router.push("/")}
          className="w-14 h-14 rounded-full cursor-pointer overflow-hidden flex items-center justify-center shadow-[0_5px_17px_0_#f600a8] backdrop-blur-[1px] animate-pulse"
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
    </section>
  );
}
