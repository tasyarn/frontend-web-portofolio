import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function About() {
  const [blobId, setBlobId] = useState("blob1");

  useEffect(() => {
    const interval = setInterval(() => {
      setBlobId((prev) => (prev === "blob1" ? "blob2" : "blob1"));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-full flex-grow">
      <Navbar />
      <main className="flex flex-col flex-grow w-full max-w-3xl mx-auto px-4 md:px-0 text-black">
        <div className="relative flex justify-center mt-10">
          <svg width="0" height="0">
            <clipPath id="blob1" clipPathUnits="objectBoundingBox">
              <path d="M0.9,0.5C0.8,0.75,0.7,0.9,0.6,0.95C0.5,1,0.3,0.95,0.2,0.85C0.1,0.75,0.05,0.5,0.1,0.35C0.15,0.2,0.3,0.05,0.4,0.05C0.5,0.05,0.7,0.2,0.8,0.35C0.9,0.5,0.9,0.5,0.9,0.5Z" />
            </clipPath>
            <clipPath id="blob2" clipPathUnits="objectBoundingBox">
              <path d="M0.85,0.6C0.8,0.8,0.7,0.9,0.6,0.95C0.5,1,0.3,0.95,0.2,0.85C0.1,0.75,0.05,0.5,0.1,0.3C0.15,0.15,0.3,0.05,0.4,0.05C0.5,0.05,0.7,0.15,0.8,0.3C0.9,0.45,0.9,0.6,0.85,0.6Z" />
            </clipPath>
          </svg>
          <div
            className="w-48 h-48 p-2 border-4 border-dashed bg-gradient-to-r from-pink-500 to-blue-500 animate-spin-slow shadow-xl transform transition-all duration-1000 ease-in-out"
            style={{ clipPath: `url(#${blobId})` }}
          >
            <div className="w-full h-full rounded-full overflow-hidden">
              <Image
                src="/images/profileAbout.jpg"
                width={160}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        <section className="prose dark:prose-dark mt-6 max-w-full text-left">
          <h2 id="about" className="text-3xl font-bold text-center">About</h2>
          <p>
            I am a dedicated student majoring in D-IV Informatics Engineering at Airlangga University with a deep passion for IT. I actively explore new technologies and keep up with the latest industry trends. My strong interpersonal skills enable me to collaborate effectively with diverse groups. Known for quick responsiveness and a commitment to delivering high-quality work, I excel in high-pressure environments, consistently achieving excellent results.
          </p>
        </section>
        <section className="relative mt-10">
          <h2 id="contact" className="text-3xl font-bold text-center">Contact</h2>
          <p>
            Feel free to reach out to me through the following platforms:
          </p>
          <ul className="mt-4 space-y-2">
            <li>Email - <a href="mailto:tasya.rania.arinastia-2021@vokasi.unair.ac.id" className="underline">tasya.rania.arinastia-2021@vokasi.unair.ac.id</a></li>
            <li>LinkedIn - <a href="https://www.linkedin.com/in/tasya-rania-arinastia" className="underline">linkedin.com/in/tasya-rania-arinastia</a></li>
            <li>Portfolio - <a href="https://bit.ly/PortofolioTasyaNew" className="underline">bit.ly/PortofolioTasyaNew</a></li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
