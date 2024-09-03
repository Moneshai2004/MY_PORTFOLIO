"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-blue-300 to-violet-300",
    title: "Ai-Recipes-Recommender",
    desc: "t utilizes basic query logic that can be seen as a part of an AI system in a broader sense: Ingredient-Based Filtering: The backend API endpoint (/api/recipes) uses a query to MongoDB to find recipes that match the ingredients provided by the user. The query logic leverages MongoDB's $all operator",
    img: "/foodie.png", // Corrected path
    link: "https://github.com/Moneshai2004/Ai-Recipes-Recommender",
  },
  // Other items...
  {
    id: 2,
    color: "from-violet-300 to-purple-300",
    title: "Symposium Website",
    desc: "Whacle Mole is an innovative game project that combines classic arcade mechanics with modern twists, offering players a captivating and immersive gaming experience. Set in a vibrant underground world, players take on the role of Whacle, a spirited mole on a quest for adventure and discovery. With a dynamic environment and engaging gameplay mechanics, promises to captivate players of all ages.",
    img: "data:image/jpeg;base64,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",
    link: "https://github.com/Moneshai2004/neuronex24",
   
  },
  {
    id: 3,
     color: "from-blue-300 to-violet-300",
    title: "Chat Application",
    desc: "SpeakEZ is an innovative speech recognition test project aimed at exploring the capabilities and limitations of current speech recognition technologies. The project seeks to evaluate the accuracy, robustness, and usability of speech recognition systems across various contexts and applications.",
    img: "https://images.pexels.com/photos/6567369/pexels-photo-6567369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://github.com/Moneshai2004/Chat-Application",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Image-searcher",
    desc: "The Image Searcher project is an innovative tool designed to simplify and enhance the process of finding images online. With a user-friendly interface and powerful search capabilities, Image Searcher aims to provide users with quick and efficient access to a vast array of high-quality images across the web. Whether for personal or professional use, Image Searcher offers a seamless and intuitive solution for locating the perfect image for any purpose.",
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
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[400px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
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
