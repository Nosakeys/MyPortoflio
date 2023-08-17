import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";


const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-3 md:pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hello there! I'm Silas, nice to meet you. Please take a look
              around
            </p>
          </div>
          <div>
            <p>
              I am a passionate developer with a love for crafting seamless
              digital experiences. My journey into the world of coding began
              when I discovered the power of turning ideas into functional,
              user-friendly applications. <br />
              <br />
              <div className="font-bold text-lg ">What Drives Me</div>
              <div className="mt-[3px]">
                I thrive on the dynamic nature of technology and its potential
                to transform lives. From creating visually appealing front-end
                interfaces to architecting robust back-end solutions. I relish
                the challenge of bringing projects to life.
              </div> <br />
              <div className="font-bold text-lg ">Staying Ahead</div>
              <div className="mt-[3px]">
                The tech landscape evolves rapidly, and I'm committed to staying
                ahead of the curve. I'm an avid learner, always exploring new
                languages,tools, and frameworks to enhance my capabilities
              </div>
              <br />
            </p>
          </div>
        </div>
      <button className="text-white py-3 px-4 flex items-center justify-end rounded-lg bg-[#5a3f2c] gap-4 sm:hidden ">
      <BsFillPersonLinesFill size={26} />
      <a 
       href="https://drive.google.com/file/d/1C2upMTnl8XV-NGAhlMTLHnT490UUh5Kj/view?usp=sharing" target="_blank" rel="noopener noreferrer"
            >
            Resume
            </a> 
      </button>
      </div>
    </div>
  );
};

export default About;
