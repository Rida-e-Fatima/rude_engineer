import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rida-E-Fatima",
  description: "Software Engineer @ GCUF 🎓|| Web Developer 🌟 || Digital Growth Expert🔹|| Python Enthusiast 🐍 || Coder || Wordpress || Mern Stack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className=""
      >
        {children}
      </body>
    </html>
  );
}
