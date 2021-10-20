/* eslint-disable @next/next/no-img-element */
import React from "react";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

const projects = [
  {
    name: "Twitter Clone",
    image: "twitterclone.png",
    url: "https://arsaiz.xyz",
  },
  {
    name: "Try Out Web",
    image: "terjago.jpg",
    url: "https://terjago.id/",
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
    <div className="w-full">
      <h2 className="text-center text-2xl md:text-4xl font-bold py-2">
        My Projects
      </h2>
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
            className="flex justify-center items-center py-10"
          >
            <div className="flex-grow px-10 text-center space-y-2 max-h-full">
              <h3 className="text-xl font-bold">{project.name}</h3>
              <div>
                <a
                  href={project.image}
                  target="_blank"
                  rel="noreferrer"
                  className="mx-auto"
                >
                  <img
                    src={project.image}
                    alt={project.image}
                    className="lg:max-w-screen-lg inline-block"
                  />
                </a>
              </div>
              <div className="py-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="outline-none p-2 md:p-4 md:text-xl border border-blue-400 text-blue-400 font-bold rounded-full hover:bg-blue-100"
                >
                  View Site
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
