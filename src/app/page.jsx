"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:mb-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-2/3 lg:h-full lg:w-1/3 relative flex items-center justify-center">
          {/* Wrapper with percentage width */}
          <div className="relative w-[65%] h-[65%]"> 
            <Image src="/moni.png" alt="Moni" fill className="object-contain" />
          </div>
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            IAM FULLSTACK DEVELOPER
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Welcome to my Portfolio, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <a href="/portfolio" className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </a>
            <a href="mailto:moneshshanmugam@gmail.com" className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
