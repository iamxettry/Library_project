import React from "react";
import { Link } from "react-router-dom";
import { footer, socialMedia } from "../constatnts";
import styles from "../style";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} flex-col w-4/5 mx-auto `}>
      <div className={`${styles.flexBet} w-full`}>
        <div className={`flex-1 flex flex-col justify-start mr-10`}>
          <Link
            to="/"
            className="text-[30px]  font-bold text-yellow tracking-widest"
          >
            <span className="text-[40px] text-white">X</span>
            .lib
          </Link>
          <p className={`${styles.paragraph} mt-4 max-w-[310px] `}>A new way ro make the payments easy, reliable and secure</p>
        </div>
        <div className="flex-[1.5] flex flex-row  justify-between flex-wrap w-full md:mt-0 mt-10 ">
            {footer.map(({title,links},index)=>(
                <div key={index} className="flex flex-col  ss:my-0 my-4 min-w-[150px]">
                    <h1 className="font-poppins font-medium text-[18px] leading-[27px] text-white">{title}</h1>
                    <ul className="" >
                        {links.map(({name,link})=>(
                            <li key={name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimwhite hover:text-white cursor-pointer ${index!==links.lenght-1?'mb-3':'mb-0'} `}>
                                {name}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            
        </div>
      </div>
      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]'>
            <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>
                2021 HooBank. All Rights Reserved
            </p>
            <div className='flex flex-row md:mt-0 mt-6'>
                                {socialMedia.map((social,index)=>(
                                    <img key={social.id} src={social.icon} alt="social_links" className={`w-[21px] h-[20px] object-contain cursor-pointer
                                    ${index!==socialMedia.length-1?'mr-6':'mr-0'} `}/>
                                ))}
            </div>
        </div>
    </section>
  );
};

export default Footer;
