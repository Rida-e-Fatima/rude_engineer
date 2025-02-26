// import Image from "next/image";
"use client"; 

import "./globals.css";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import Navbar from "./components/Navbar";
import HomePage from "./index/page"; 
import Footer from "./components/Footer"

export default function Home() {
 
  return (
    <div className="h-screen bg-[#000000] " >
    <Navbar/>
    <HomePage />
    <Footer/>
    </div>
  );
}
