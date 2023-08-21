import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className=" w-full h-screen bg-[#0a192f] "
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#a18674]"> Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Silas Aigbe
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full-Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] bg-">
          I specialize in delivering (and occasionally
          designing) end-to-end solutions that seamlessly merge aesthetics with
          functionality. My skill set spans both front-end and back-end technologies, enabling me to build comprehensive digital
          experiences. With a deep-rooted passion for responsive design, I excel
          at creating web applications that adapt flawlessly across devices. I
          am committed to consistently refining my skills and eagerly seek
          opportunities to collaborate and innovate.
        </p>
        <div>
          <button className="text-white group sm:border-[1px] py-4 px-4 sm:py-3 my-2 flex items-center hover:bg-[#5a3f2c] sm:hover:border-[#83573a] rounded-lg sm:rounded-[4px] sm:hover:rounded bg-gradient-to-r to-pink-900 from-amber-900">
            <Link to="projects" smooth={true} duration={500}>
              View Projects
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-2" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
