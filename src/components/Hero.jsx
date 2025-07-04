import React from "react";
import Profile from "../assets/images/Profile.jpeg";

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-8 lg:pb-16 lg:mb-36">
      <div className="flex flex-wrap items-center">
        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-start px-4 lg:px-0">
            <h1 className="pb-4 text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl">
              Burhan Sidiq
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-3xl lg:text-4xl tracking-tight">
              Full Stack Developer
            </span>
            <p className="mt-6 max-w-2xl text-base lg:text-lg font-light text-neutral-400">
              I'm a self-taught developer who loves building full-stack web apps
              with React, Node.js, AWS, and PostgreSQL. I enjoy solving
              real-world problems through clean code and cloud-first
              architecture.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:p-8">
          <div className="flex justify-center lg:justify-end">
            <img
              src={Profile}
              alt="Burhan Sidiq"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-neutral-800 shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
