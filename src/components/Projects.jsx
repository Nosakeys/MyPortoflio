import React from "react";
import QuizGenius from "../assests/QuizGenius.png"
import wApp from "../assests/wApp.png"
import easyBank from '../assests/Easybank.png'
import Medicare from "../assests/IMG_7792.jpg"
import DRStore from "../assests/Screenshot (7).png"


const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f] pt-14 sm:pt-10"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 ">
            Projects
          </p>
          <p className="py-4">Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid items */}
          <div
            style={{ backgroundImage: `url(${Medicare})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                MediCare App
              </span>
              <div className="pt-8 text-center">
                <a href="https://medicare-smoky.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 hover:bg-[#a82424d2] bg-white text-gray-700  hover:text-white font-bold text-lg">
                    {" "}
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Vpsalmuel/Medi-Care-App" target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#a82424d2] hover:text-white">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
    
          <div
            style={{ backgroundImage: `url(${DRStore})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
             <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                D'Royal Guise Store
              </span>
              <div className="pt-8 text-center">
                <a href="https://droyalstore.netlify.app" target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg  hover:bg-[#a82424d2] hover:text-white">
                    {" "}
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Nosakeys/DRoyalGuise" target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg  hover:bg-[#a82424d2] hover:text-white">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>  
          <div
            style={{ backgroundImage: `url(${easyBank})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                EasyBank Landing Page
              </span>
              <div className="pt-8 text-center">
                <a href="https://nosakeys.github.io/EasyBankLandingPage/" target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg  hover:bg-[#a82424d2] hover:text-white">
                    {" "}
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Nosakeys/EasyBankLandingPage" target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg  hover:bg-[#a82424d2] hover:text-white">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* <div
            style={{ backgroundImage: `url(${realestate})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            {/* <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg  hover:bg-[#a82424d2] hover:text-white">
                    {" "}
                    Demo
                  </button>
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg  hover:bg-[#a82424d2] hover:text-white">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div> */} 
          <div
            style={{ backgroundImage: `url(${wApp})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Weather App
              </span>
              <div className="pt-8 text-center">
                <a href="https://nosakeys.github.io/weathe_app/" target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg  hover:bg-[#a82424d2] hover:text-white">
                    {" "}
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Nosakeys/weathe_app" target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg  hover:bg-[#a82424d2] hover:text-white">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${QuizGenius})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white text-center tracking-wider">
                Quiz Genius
              </span>
              <div className="pt-8 text-center">
                <a href="https://nosakeys.github.io/QuizGenius-main/" target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg  hover:bg-[#a82424d2] hover:text-white">
                    {" "}
                    Demo
                  </button>
                </a>
                <a  href="https://github.com/Nosakeys/QuizGenius-main" target="_blank" rel="noopener noreferrer" > 
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg  hover:bg-[#a82424d2] hover:text-white">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
