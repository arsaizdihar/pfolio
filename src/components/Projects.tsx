/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
// import img1 from "../../public/twitterclone.png";
// import img2 from "../../public/personalblog.png";
// import img3 from "../../public/typesfaster.png";
// import img4 from "../../public/chatapp.png";

const projects = [
  {
    name: "Twitter Clone",
    image: "twitterclone.png",
    url: "https://tweetrs.vercel.app",
  },
  {
    name: "Personal Blog",
    image: "personalblog.png",
    url: "https://arsa-blog.web.app/",
  },
  {
    name: "TypesFaster",
    image: "typesfaster.png",
    url: "https://typesfaster-76781.web.app/",
  },
  {
    name: "Chat App",
    image: "chatapp.png",
    url: "https://arsa-blog.web.app/chat",
  },
];

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Projects = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      className="h-full border"
    >
      {projects.map((project) => (
        <SwiperSlide
          key={project.name}
          className="flex justify-center items-center"
        >
          <div className="flex-grow flex justify-center px-10 flex-col text-center space-y-2">
            <h3 className="text-xl font-bold">{project.name}</h3>
            <a href={project.url} target="_blank" rel="noreferrer">
              <img src={project.image} alt={project.image} />
            </a>
            {/* <div className="py-2">
              <a
                href={project.image}
                target="_blank"
                rel="noreferrer"
                className="outline-none p-2 border border-blue-400 text-blue-400 font-bold rounded-full hover:bg-blue-100"
              >
                View Image
              </a>
            </div> */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Projects;
