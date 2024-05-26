import React from 'react'
import { Link } from 'react-router-dom'

const PathBox = ({title}) => {
  return (
    <div className='w-full bg-slate-300 py-10 '>
        <h1 className='text-4xl font-semibold w-full text-center'>{title}</h1>
        <div className='w-full flex justify-center items-center py-6 gap-2 text-xl'>
            <Link to="../Home"  className='font-bold'>Home //</Link>
            <Link to='/about' className='font-bold'>{title}//</Link>
            <h2 className='text-cyan-700 font-semibold'>About Us</h2>
        </div>
    </div>
  )
}

export default PathBox