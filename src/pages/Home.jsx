import React, { useState } from "react";
import Container from "../Components/Container";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import ScrollUp from "../Components/ScrollUp";
import { cate } from "../constatnts";

import styles, { layout } from "../style";

const Home = () => {
  
  const [cur_tit, setCur_tit] = useState("Comic")
  let handleClick= (e)=>{
    
    let cur_tit1=e.currentTarget.dataset.id;
    setCur_tit(cur_tit1)
  }
  return (
   <>
    <section className={` min-h-screen w-full relative bg-slate-300  z-10`}>
      <div className={` w-full  `}>
        <Hero />
        <div className="w-full bg-slate-400 shadow-md shadow-gray bg-opacity-60  py-5">
          <h1 className="italic text-2xl md:text-3xl font-bold w-[80%] mx-auto  bg-white p-4 rounded-md">
            Access AnyWhere, Anytime
          </h1>
        </div>
      </div>
      <div className={`${layout.container} flex-col`}>
        <div className="bg-white w-full my-4 rounded-md px-12 text-3xl py-3 font-semibold text-black shadow-lg shadow-slate-700">Recent Release</div>

        <Container data={0} />
      </div>
      <div className={`${layout.container} flex-col`}>
        <div className="bg-white w-full my-4 rounded-md bg-opacity-20 px-12 text-3xl py-3 font-semibold  shadow-lg shadow-slate-700">
          <div className="flex flex-col sm:flex-row justify-between items-center ">
            <h1 className="text-xl w-full sm:w-fit sm:pr-5 ">Category /{cur_tit}</h1>
            <ul className=" text-lg">
              {cate.map(({title,category},index)=>(
                <li key={index} data-id={category} onClick={handleClick} className="inline-flex flex-1 px-2 cursor-pointer ">{title}</li>

              ))}
            </ul>
          </div>
        </div>

        <Container data={1} cur_tit={cur_tit}/>
      </div>
      <div className="w-full bg-secondary py-6">
      <Footer/>
      </div>
    </section>
    <ScrollUp/>
   </>
  );
};

export default Home;
