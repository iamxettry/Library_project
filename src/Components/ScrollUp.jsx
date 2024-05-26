import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'

const ScrollUp = () => {
  let scroll_up =()=>{
    console.log("clicked");
    window.scrollTo({top:0,left:0,behavior:'smooth'})
  }
  return (
    <div onClick={scroll_up} className='w-12 md:w-24 h-12 md:h-24 bg-yellow rounded-full flex justify-center items-center  top-[85%] right-10 z-50 fixed shadow-md shadow-slate-600'>
        <AiOutlineArrowUp className='text-white text-4xl '/>

    </div>
  )
}

export default ScrollUp