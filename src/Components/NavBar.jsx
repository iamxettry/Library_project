import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navlinks } from "../constatnts";
import styles from "../style";
import Navitem from "./Navitem";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [toggle, setToggle]=useState(false);
  return (
    <header className="w-screen px-6 sm:px-12 md:px-16 py-2 bg-yellow   shadow-md shadow-slate-500 relative z-50

    ">
      <div className={`${styles.flexBet} `}>
        <div className={`${styles.flexCenter}`}>
          <Link
            to="/"
            className="text-[30px]  font-bold text-white tracking-widest"
          >
            <span className="text-[40px] bg_gradient_blue">Bubble</span>
            .lib
          </Link>
        </div>
        <div className={`${styles.flexCenter} hidden sm:flex relative z-10`}>
          <ul className={`flex  gap-5  `}>
            {Navlinks.map(({ id, title, path }, index) => (
              <Navitem key={id} title={title} path={path} bg={"after:bg-blue-500"} val={true} />
            ))}
          </ul>
        </div>
        <div className="sm:hidden flex items-center text-4xl cursor-pointer" onClick={()=>setToggle(prev=>!prev)}>
          {toggle?<AiOutlineClose/>:<AiOutlineMenu />}

          <div className={`${styles.flexCenter} absolute right-6 top-24 px-16  bg-black bg-opacity-50 rounded-xl ${toggle?"flex":"hidden"} slider shadow-xl shadow-current text-white`}>
          <ul className={`flex py-10 gap-3 flex-col  `}>
            {Navlinks.map(({ id, title, path }, index) => (
              <Navitem key={id} title={title} path={path} bg={""} val={false}/>
            ))}
          </ul>
        </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
