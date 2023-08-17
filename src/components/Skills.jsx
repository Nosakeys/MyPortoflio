import React from "react";
import html from "../assests/html.png";
import css from "../assests/css.png";
import JS from "../assests/javascript.png";
import react from "../assests/react.png";
import tailwind from "../assests/tailwind.png";
import node from "../assests/node.png";
import mongodb from "../assests/mongo.png";
import github from "../assests/github.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f]   text-gray-300 pt-40 sm:pt-0">
      {/* Container! */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pl-6">
          <p className="text-4xl  font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>
      

      <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
        <div className=" shadow-md  shadow-[#040c16] hover:scale-110 duration-500 m-[20px]" >
          <img className="w-12 mx-auto" src={html} alt="HTML icon" />
          <p className="my-2">HTML</p>
        </div>
        <div className=" shadow-md  shadow-[#040c16] hover:scale-110 duration-500 m-[20px]">
          <img className="w-12 mx-auto" src={css} alt="css icon" />
          <p className="my-4">CSS</p>
        </div>
        <div className=" shadow-md  shadow-[#040c16] hover:scale-110 duration-500 m-[20px]">
          <img className="w-12 mx-auto" src={JS} alt="Js icon" />
          <p className="my-4">JavaScript</p>
        </div>
        <div className=" shadow-md  shadow-[#040c16] hover:scale-110 duration-500 m-[20px]">
          <img className="w-12 mx-auto" src={react} alt="react icon" />
          <p className="my-4">React</p>
        </div>
        <div className=" shadow-md  shadow-[#040c16] hover:scale-110 duration-500 m-[20px]">
          <img className="w-12 mx-auto" src={tailwind} alt="tailwind icon" />
          <p className="my-4">Tailwind CSS</p>
        </div>
        <div className=" shadow-md  shadow-[#040c16] hover:scale-110 duration-500 m-[20px]">
          <img className="w-12 mx-auto" src={node} alt="node icon" />
          <p className="my-4">NodeJS</p>
        </div>
        <div className=" shadow-md  shadow-[#040c16] hover:scale-110 duration-500 m-[20px]">
          <img className="w-12 mx-auto" src={mongodb} alt="mongithub icon" />
          <p className="my-4">MongoDB</p>
        </div>
        <div className=" shadow-md  shadow-[#040c16] hover:scale-110 duration-500 m-[20px]">
          <img className="w-12 mx-auto" src={github} alt="github icon" />
          <p className="my-4">GitHub</p>
        </div>
      </div>
      </div>
      </div>
  );
};

export default Skills;
