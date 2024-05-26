import React from "react";
import { about } from "../assets";
import Footer from "../Components/Footer";
import PathBox from "../Components/PathBox";
import ScrollUp from "../Components/ScrollUp";
import Stats from "../Components/Stats";

const About = () => {
  return (
   <>
    <div className="bg-slate-300 w-full ">
      <PathBox title="About Us" />

      <div className="w-[80%] mx-auto flex justify-center items-center  ">
        <div className="flex-1">
          <img src={about} alt="" />
        </div>
        <div className="flex-1 bg-white shadow-md shadow-slate-500 p-4 rounded-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          esse. Veritatis, repellendus? <br /> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Velit harum illo accusamus.
        </div>
      </div>

      <Stats />
      <div className="w-full bg-secondary py-6">
        <Footer />
      </div>
    </div>
    <ScrollUp/>
    </>
  );
};

export default About;
