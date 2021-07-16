/* eslint-disable @next/next/no-img-element */
import React from "react";

const Home = () => {
  return (
    <div className="container max-w-7xl mx-auto h-full flex text-white px-4 items-center sm:justify-between flex-col sm:flex-row justify-center space-y-4">
      <div className="text-7xl font-medium font-serif">
        <p>Hello,</p>
        <h1>{"I'm Arsa"}</h1>
        <p className="text-base text-gray-200">
          Undergraduate Electrical & Informatics Engineering Student at
          Institute of Technology Bandung
        </p>
      </div>
      <div className="sm:flex-grow flex justify-center">
        <div className="w-80">
          <img src="arsa.jpg" alt="arsa" className="rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
