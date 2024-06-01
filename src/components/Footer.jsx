import React from 'react'
import ellipse from "../assets/ellipse.svg"
import women from "../assets/images/women.png"
import { NavLink } from 'react-router-dom';
import line from "../assets/green_line.svg"
import logo from "../assets/logo.svg"
import linee from "../assets/full_line.svg"
import instagram from "../assets/instagramm.svg"
import facebook from "../assets/facebookk.svg"
function Footer() {
  return (
    <footer className='w-full bg-white'>
      <div className='flex  justify-between gap-x-5'>
        <div className='w-full py-10 '>
          <div className='flex flex-col gap-y-7 pl-24'>
            <h1 className='font-bold text-3xl'>Seedra helps to grow fast and <br /> efficiant</h1>
            <div className='flex flex-col gap-y-7'>
              <h2>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and <br /> professional instructions created by PhD Helga George </h2>
              <h2>

                Be sure of our quality - the freshest batches of this season. Non- <br />GMO, Heirloom - our seeds were tested and have the best <br /> germination ratings. <br /> Your easy growing experience is our guarantee <br /> Spinach commom culinary uses: salads, soups, smoothies, lasagne, <br /> pizza, pies, risotto, and more

              </h2>
              <h2>
                Proudly sourced in the USA - our garden seeds are grown, <br /> harvested, and packaged in the USA. We support local farmers and <br />are happy to produce this American-made product</h2>
            </div>
          </div>

        </div>
        <div className='w-full h-96'>
          <div className=' relative flex flex-col items-center justify-center'>
            <div className='absoulte'>
              <img src={ellipse} alt="" />
            </div>
            <div className='absolute'>
              <img src={women} alt="" />
            </div>
          </div>

        </div>

      </div>
      <div className='w-full h-20 bg-white flex flex-col items-start px-28 mt-32'>
        <ul className='flex font-semibold items-center py-7 gap-x-10'>
          <li className='flex items-center justify-center gap-x-3'>
            <NavLink className="text-green-600" to={'/allProducts'}>
              ALL PRODUCTS
            </NavLink>
            <img className='text-red-500' src={line} alt="" />
          </li>
          <li className='flex items-center  gap-x-3'>
            <NavLink to={'/about'}>
              ABOUT SEEDRA
            </NavLink>
            <img className='text-red-500' src={line} alt="" />

          </li>
          <li className='flex items-center gap-x-3'>
            <NavLink to={'/ourBlog'}>
              OUR BLOG
            </NavLink>
            <img className='text-red-500' src={line} alt="" />
          </li>
          <li className='px-10'>
            <NavLink to={'/'}>
              <img className='cursor-pointer' src={logo} alt="" />
            </NavLink>
          </li>
          <li className='flex items-center gap-x-3'>
            <NavLink to={'/'}>
              Terms&Conditions
            </NavLink>
            <img src={line} alt="" />
          </li>
          <li >
            <NavLink to={'/'}>
              Privacy Policy
            </NavLink>
          </li>
        </ul>
        <div>
          <img src={linee} alt="" />
        </div>
        <div className='w-full flex items-center justify-between py-3 h-20 '>
          <div className='flex items-center py-2 gap-x-4 '>
            <img className='cursor-pointer' src={instagram} alt="" />
            <img className='cursor-pointer' src={facebook} alt="" />
          </div>
          <button>All rights reserved</button>
        </div>
      </div>

    </footer>
  )
}

export default Footer;