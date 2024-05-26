import React from "react";
import styles from "../style";
import { AiTwotoneStar } from "react-icons/ai";
import Button from "./Button";

const Hero = () => {
  return (
    <section className={` w-full  xl:h-96 md:h-[400px] h-[450px]   z-10`}>
      <div className=" w-full flex relative h-full">
        <div className="md:flex-1 w-full sm:w-2/3 md:w-2/5 bg-black bg-opacity-30 relative z-10 flex justify-center items-center ">
          <div className="w-[80%] md:w-[90%] mx-auto h-[90%]  relative">
            <div className="bg-white md:bg-black md:bg-opacity-30 bg-opacity-30 px-6 py-3 gap-3 text-xl font-semibold flex justify-around items-center w-fit rounded-xl mt-6 text-white ">
                <AiTwotoneStar/>
                <p>
                    100% Done
                </p>

            </div>
            <h1 className="text-3xl md:text-[34px] font-bold text-white my-4">Available All kinds Of Books</h1>
            <p className="text-xl text-white indent-8 font-semibold md:text-slate-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sint facere optio perferendis illo repellat cum iusto quas soluta mollitia.</p>
            <div className="w-full flex justify-center items-center absolute bottom-2">
                <div className="text-white ">
                <Button text="Check Book List" path="booklist"/>
                </div>
            </div>
          </div>
        </div>
        <div className="  md:flex-1 md:relative absolute w-full h-full z-0 md:px-2 py-3 ">
          <div className="w-full h-full border md:rounded-xl bg-bg1 bg-no-repeat bg-cover "></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
