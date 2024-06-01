import React from 'react'
import { AiOutlineDown } from "react-icons/ai";
import search from "../assets/search.svg"
function About() {
  return (
    <div className='w-full flex flex-col  gap-y-7'>
      <div className='w-10/12 rounded-xl h-56 flex items-center justify-center mx-auto mt-10 bg-green-100'>
        <div className='flex items-center flex-col py-4 justify-center'>
          <h1 className='font-bold text-4xl py-5'>Welcome to About</h1>
          <h2 className='font-semibold'>Here you can find a lot of interesting and useful information that you </h2>
          <h2 className='font-semibold'>need in gardening and creating a beautiful garden</h2>
        </div>
      </div>
      <div className='w-full px-28 flex items-center gap-x-10'>
        <div className='border-2 flex items-center rounded-3xl px-5 gap-x-3 h-12 w-10/12'>
          <img className='w-5 h-5' src={search} alt="" />
          <input className='outline-none bg-transparent' type="text" placeholder='search' />
        </div>
        <div className='w-4/12 h-12  items-center flex justify-between px-5 border rounded-3xl'>
          <div className='flex text-xs flex-col'>
            <span>Sort by</span>
            <p className='font-bold'>Most expensive</p>
          </div>
          <AiOutlineDown />
        </div>

      </div>

    </div>
  )
}

export default About