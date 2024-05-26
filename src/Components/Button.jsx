import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Button = ({text, path}) => {
  return (
    <Link to={path} className='bg-yellow px-6 py-3 rounded-full text-2xl font-bold flex items-center gap-4'>
            <h2>{text}</h2>
            <AiOutlineArrowRight/>

    </Link>
  )
}

export default Button