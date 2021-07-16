/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Typewriter from "typewriter-effect";

const links = {
  github: "https://github.com/arsaizdihar",
  linkedin: "https://linkedin.com/in/arsaizdihar",
  twitter: "https://twitter.com/bisainterus",
  instagram: "https://instagram.com/arsaizdihar",
  youtube: "https://www.youtube.com/channel/UCncYu-OhvVdu4pdVW2dMlVw",
};

const Home = () => {
  return (
    <div className="container max-w-7xl mx-auto h-full flex text-white px-4 items-center sm:justify-between flex-col sm:flex-row justify-center space-y-4 space-x-4">
      <div className="text-7xl font-medium font-serif">
        <p>Hello,</p>
        <h1 className="mb-2">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("I'm Arsa").start();
            }}
          />
        </h1>
        <p className="text-base text-gray-200">
          Undergraduate Electrical & Informatics Engineering Student at
          Institute of Technology Bandung
        </p>
        <div className="text-2xl flex justify-center space-x-8 my-2">
          <a
            href={links.github}
            className="hover:text-gray-200 duration-300"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href={links.linkedin}
            className="hover:text-blue-400 duration-300"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            href={links.twitter}
            className="hover:text-blue-400 duration-300"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href={links.instagram}
            className="hover:text-red-400 duration-300"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href={links.youtube}
            className="hover:text-red-500 duration-300"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
      <div className="sm:flex-grow flex justify-center">
        <div className="h-full max-w-[20rem] max-h-[50%]">
          <img src="arsa.jpg" alt="arsa" className="rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
