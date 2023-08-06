import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div className="bg-[#0a192f]">
      <Navbar />
      <Home />
      <About />
      <Skills/>
      <Projects/>
      <Contact/>
      <p className="text-gray-300 bg-[#0a192f] text-center">© {new Date().getFullYear()} Nosakeys</p>git
    </div>
  );
};

export default App;
