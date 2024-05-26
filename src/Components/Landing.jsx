import React, { useState } from "react";
import { Navlinks } from "../constatnts";
import Navitem from "./Navitem";
import styles from "../style";
import bg6 from "../assets/bg6.png";
import { Link } from "react-router-dom";
import Button from "./Button";
import { AiOutlineArrowRight } from 'react-icons/ai'

const Landing = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <section
        className={`relative w-screen min-h-screen bg-bg4 bg-no-repeat bg-cover`}
      >
        <div className="w-full h-screen bg-black bg-opacity-50 relative">
          <div className="w-full text-center relative py-4">
            <Link
              to="/"
              className="text-[40px] md:text-[70px] xl:text-[100px] font-bold text-white drop-shadow-lg "
            >
              <span className="text-[60px] md:text-[90px] xl:text-[120px] bg_gradient_blue">
                Bubble
              </span>
              .lib
            </Link>
          </div>

          <div
            className={`${styles.flexCenter} text-white w-full my-2 relative z-10`}
          >
            <ul className={`flex  gap-5   `}>
              {Navlinks.map(({ id, title, path }, index) => (
                <Navitem key={id} title={title} path={path} bg={"after:bg-white"} val={""}/>
              ))}
            </ul>
          </div>
          <div className={`w-full ${styles.flexCenter} py-3 z-10  relative `}>
            <div
              className={`bg-black bg-opacity-50 px-6 rounded-3xl py-4 w-[400px] ${
                toggle ? "border-2 border-pink" : "border-black"
              }`}
            >
              <input
                onClick={() => setToggle((prev) => !prev)}
                type="search"
                name="search"
                id="search"
                placeholder="Search Book"
                className={`bg-transparent h-16 border-none rounded-xl w-full focus:outline-none px-5 text-white  placeholder:text-white`}
              />
              <div
                className={` text-white text-right ${
                  toggle ? "border-t-2 border-blue-400 pt-5" : "hidden"
                } `}
              >
                <button type="search" className="px-5 bg-black rounded-xl py-2">
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0  w-full flex justify-center items-center -z-0 ">
            <img src={bg6} alt="img" className="" />
          </div>
          <div
            className={`${styles.flexCenter} absolute z-20 text-black bottom-0 w-full py-6`}
          >
           
              <Button text={"Go to Home"} path="home" />

          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
