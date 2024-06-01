import React from 'react'
import flue from "../assets/flue.svg"
import paper from "../assets/paper.svg"
import herbs from "../assets/herbs.svg"
import vegatable from "../assets/vegatable.svg"
import fruit from "../assets/fruit.svg"
import supples from "../assets/supples.svg"
import flower from "../assets/flower.svg"
import { products } from '../data/Products'
import ProductCard from './ProductCard'
function Products() {
    return (
        <div className='w-full mt-5 h-screen'>
            <div className='w-full flex items-center justify-between py-5'>
                <h1 className='font-bold text-xl'>Our products.</h1>
                <button className='p-1 border px-4 text-green-600 rounded font-medium'>View all (12)</button>
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

export default Products