import React from 'react'

const Book = ({img,title,author,desc}) => {
  return (
    <div className=' bg-white shadow-md shadow-slate-500 p-4 rounded-md mx-auto'>
        <img src={img} alt="" className='w-full rounded-md' />
        <h1 className='font-bold py-2 text-xl

        '>{title}</h1>
        <h2 className='font-semibold uppercase text-md'>By: {author}</h2>
        <p className=' font-semibold text-black text-opacity-70 line-clamp-3 '>{desc}</p>

    </div>
  )
}

export default Book