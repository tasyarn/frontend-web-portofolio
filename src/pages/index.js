import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Mansalva } from "next/font/google";

const mansalva = Mansalva({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[#E4E0E1] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-1 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center mt-4"
        >
          <Image
            src="/images/profile.png"
            height={200}
            width={200}
            alt="Profile Image"
            className="hover:scale-105 transition-transform duration-300 mb-4"
          />
          <h1 className={`${mansalva.className} text-3xl text-[#493628]`}>
            <Typewriter
              options={{
                strings: ["Welcome to My Portfolio Website", "I'm Tasya Rania Arinastia", "Contact Me, ASAP!"],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </h1>
          <p className="text-[#493628] mt-4">
            A passionate Fullstack Web Developer dedicated to building efficient and scalable digital solutions. <br />
            With expertise in both frontend and backend development, I create fast, responsive, and functional web applications. <br />
            Let’s collaborate to craft exceptional web experiences! Check out <span className="font-bold">My Resume</span> and <span className="font-bold">Portfolio</span>.
          </p>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
