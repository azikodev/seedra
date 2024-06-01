import React from 'react'
import search from '../assets/search.svg'
import flue from "../assets/flue.svg"
import paper from "../assets/paper.svg"
import herbs from "../assets/herbs.svg"
import vegatable from "../assets/vegatable.svg"
import fruit from "../assets/fruit.svg"
import supples from "../assets/supples.svg"
import flower from "../assets/flower.svg"
import { AiOutlineDown } from "react-icons/ai";
import { products } from '../data/Products'
import ProductCard from '../components/ProductCard'
function AllProducts() {
  return (
    <div className='w-full p-10 px-28 mx-auto'>
      <div className='w-full flex items-center gap-x-10'>
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
      <div className='w-full py-5 flex items-center justify-between gap-x-3'>
        <button className='p-1.5 flex cursor-pointer hover:bg-slate-100 ease-linear duration-100 items-center gap-x-2 border rounded px-7'>
          <img src={flue} alt="" />
          ALL
        </button>
        <button className='p-1.5 flex cursor-pointer hover:bg-slate-100 ease-linear duration-150 items-center gap-x-2 border rounded px-7'>
          <img src={paper} alt="" />
          BUNDLES
        </button>
        <button className='p-1.5 flex cursor-pointer hover:bg-slate-100 ease-linear duration-150 items-center gap-x-2 border rounded px-7'>
          <img src={herbs} alt="" />
          HERBS
        </button>
        <button className='p-1.5 flex cursor-pointer hover:bg-slate-100 ease-linear duration-150 items-center gap-x-2 border rounded px-4'>
          <img src={vegatable} alt="" />
          VEGETABLES
        </button>
        <button className='p-1.5 flex cursor-pointer hover:bg-slate-100 ease-linear duration-150 items-center gap-x-2 border rounded px-7'>
          <img src={fruit} alt="" />
          FRUITS
        </button>
        <button className='p-1.5 flex cursor-pointer hover:bg-slate-100 ease-linear duration-150 items-center gap-x-2 border rounded px-7'>
          <img src={supples} alt="" />
          SUPPLIES
        </button>
        <button className='p-1.5 flex cursor-pointer hover:bg-slate-100 ease-linear duration-150 items-center gap-x-2 border rounded px-7'>
          <img src={flower} alt="" />
          FLOWERS
        </button>
      </div>
      <div className='w-full h-96 grid grid-cols-3 gap-6 rounded-lg'>
        {
          products.map(item =>
            <ProductCard key={item.id}
              item={item}
            />
          )
        }
      </div>



    </div>
  )
}

export default AllProducts