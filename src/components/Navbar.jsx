import React, { useContext, useState } from 'react'
import logo from "../assets/logo.svg"
import line from "../assets/line.svg"
import instagram from "../assets/instagram.svg"
import facebook from "../assets/facebook.svg"
import search from "../assets/search.svg"
import basket from "../assets/basket.svg"
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from 'react-router-dom'
import { StateContext } from '../context/Context'
function Navbar() {
    const { basketState } = useContext(StateContext)
    const [active, setActive] = useState(0)
    const pages = [{
        title: "ALL PRODUCTS",
        id: 1,
        selected: false,
        page: "allProducts"
    },
    {
        title: "ABOUT SEEDRA",
        id: 2,
        selected: false,
        page: "about"
    },
    {
        title: "OUR BLOG",
        id: 3,
        selected: false,
        page: "ourBlog"
    },
    {
        title: "CONTACTS",
        id: 4,
        selected: false,
        page: "contacts"
    },
    ]
    // const setc = pages.find(item => item.id === active)
    return (
        <nav className='w-full sticky z-50 top-0 h-14 flex items-center justify-between   px-28 bg-white shadow'>
            <NavLink to={'/'}>
                <img className='cursor-pointer' src={logo} alt="" />
            </NavLink>
            <ul className=' flex items-center pl-10 gap-x-3'>
                {pages.map(item => (
                    <li className='flex items-center gap-x-3' onClick={() => setActive(item.id)} key={item.id}>
                        <NavLink to={item.page}>
                            <span className={`${item.id === active ? "bg-green-700 text-white  rounded" : ""} flex cursor-pointer text-[15px] p-1 ease-linear duration-300  items-center justify-center px-2 gap-x-5`}>
                                {item.title}
                            </span>
                        </NavLink>
                        <img src={line} alt="" />

                    </li>
                ))}
            </ul>
            <ul className='flex  items-center pl-5  gap-x-3'>
                <li className='flex items-center gap-x-2'>
                    <img className='w-7 h-7 cursor-pointer' src={instagram} alt="" />
                    <img className='w-7 h-7 cursor-pointer' src={facebook} alt="" />
                </li>
                <li className='w-72 p-1 px-3 rounded-3xl gap-x-3 flex items-center border'>
                    <img className='w-6 h-6' src={search} alt="" />
                    <input className='w-full outline-none bg-transparent' type="text" placeholder='search' />
                </li>
                <li className='flex items-center gap-x-5'>
                    <NavLink className='flex items-center gap-x-3' to={'/basket'}>
                        <FaRegHeart className='w-5 cursor-pointer text-green-700 h-5' />
                        <div className='flex items-start'>
                            <img className='w-6 h-6 cursor-pointer' src={basket} alt="" />
                            <span className='w-4 h-4 text-white flex items-center justify-center text-xs bg-green-700 rounded-full'>
                                {basketState?.basket?.length}
                            </span>
                        </div>
                    </NavLink>
                </li>

            </ul>

        </nav>
    )
}

export default Navbar