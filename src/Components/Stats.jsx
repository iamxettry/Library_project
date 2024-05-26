import React from 'react'
import { stats } from '../constatnts'

const Stats = () => {
  return (
    <div className='w-4/5 mx-auto rounded-xl py-4 px-6 bg-white  flex gap-5  flex-wrap justify-around items-center mb-10'>

        {stats.map(({img,title,value})=>(
            <div className=' flex gap-3 justify-center items-center '>
                <img src={img} alt="" className='w-14 m-2' />
                <div className='font-bold' >
                    <h1 className='text-2xl sm:text-3xl'>{value}</h1>
                    <p className='text-xl sm:text-2xl'>{title}</p>
                </div>
            </div>
        ))}


    </div>
  )
}

export default Stats