"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Chat-Application",
    desc: "Chatify is a cutting-edge communication platform designed to facilitate seamless interactions among users across various channels. Leveraging the power of both GraphQL and REST APIs, Chatify offers unparalleled flexibility, scalability, and performance..",
    img: "https://images.pexels.com/photos/6567369/pexels-photo-6567369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://github.com/Moneshai2004/Chat-Application",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "TextToSpeech",
    desc: "SpeakEZ is an innovative speech recognition test project aimed at exploring the capabilities and limitations of current speech recognition technologies. The project seeks to evaluate the accuracy, robustness, and usability of speech recognition systems across various contexts and applications.",
    img: "https://images.pexels.com/photos/230554/pexels-photo-230554.jpeg",
    link: "https://github.com/Moneshai2004/TextToSpeech",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "MarioGame",
    desc: "Whacle Mole is an innovative game project that combines classic arcade mechanics with modern twists, offering players a captivating and immersive gaming experience. Set in a vibrant underground world, players take on the role of Whacle, a spirited mole on a quest for adventure and discovery. With a dynamic environment and engaging gameplay mechanics, promises to captivate players of all ages..",
    img: "https://images.pexels.com/photos/163077/mario-yoschi-figures-funny-163077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://github.com/Moneshai2004/MarioGame",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Image-searcher",
    desc: "The Image Searcher project is an innovative tool designed to simplify and enhance the process of finding images online. With a user-friendly interface and powerful search capabilities, Image Searcher aims to provide users with quick and efficient access to a vast array of high-quality images across the web. Whether for personal or professional use, Image Searcher offers a seamless and intuitive solution for locating the perfect image for any purpose",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://github.com/Moneshai2004/Image-searcher",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Full Stackk Developer.
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="mailto:moneshshanmugam@gmail.com"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
