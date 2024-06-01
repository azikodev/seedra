import React from 'react'
import star from "../assets/half_star.svg"
import star2 from "../assets/starrr.svg"
import user from "../assets/user.svg"
import starr from "../assets/starr.svg"
import frame from "../assets/framee.svg"
import opcyline from "../assets/opcyline.svg"
function Clients() {
    return (
        <div className='w-full flex items-center flex-col'>
            <h1 className='text-2xl p-10 font-bold'>What out clients say</h1>
            <div className='w-full flex justify-between items-center gap-x-5 h-68 mt-5 bg-white'>
                <div className='w-[400px] pt-10 opacity-50 flex flex-col gap-y-5 items-start border rounded-e-xl py-7 bg-white'>
                    <div className='flex flex-col items-start gap-y-1'>
                        <h2 className='text-xl font-semibold text-zinc-600'>Carla Samantoes-Diego </h2>
                        <p>12.09.2021</p>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <img src={star} alt="" />
                        <img className='w-5 h-5' src={star2} alt="" />
                    </div>
                    <p className='text-[14px]'>
                        SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George <br />
                        Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the nation ratings.
                    </p>
                </div>

                <div className='w-[470px] flex flex-col gap-y-4 items-start p-7 h-72 bg-white rounded-xl border'>
                    <div className='flex items-center gap-x-5'>
                        <img src={user} alt="" />
                        <div className='flex flex-col items-start'>
                            <h3 className='font-semibold'>Carla Samantoes-Diego</h3>
                            <p>12.09.2021</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <img className='w-5 h-5' src={starr} alt="" />
                        <img className='w-5 h-5' src={starr} alt="" />
                        <img className='w-5 h-5' src={starr} alt="" />
                        <img className='w-5 h-5' src={starr} alt="" />
                        <img className='w-5 h-5' src={star2} alt="" />
                    </div>
                    <p className='text-sm' >
                        SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and <br /> professional instructions created by PhD Helga George <br />
                        Be sure of our quality - the freshest batches of this season. <br /> Non-GMO, Heirloom - our seeds were tested and have the <br />
                        best germination ratings.
                    </p>

                </div>
                <div className='w-[400px] pt-10  flex flex-col opacity-50 p-7 gap-y-5 items-start border rounded-s-xl py-7 bg-white'>
                    <div className='flex items-center gap-x-5'>
                        <img src={user} alt="" />
                        <div className='flex flex-col items-start'>
                            <h3 className='font-semibold'>Carla Samantoes-Diego</h3>
                            <p>12.09.2021</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <img className='w-5 h-5' src={starr} alt="" />
                        <img className='w-5 h-5' src={starr} alt="" />
                        <img className='w-5 h-5' src={starr} alt="" />
                        <img className='w-5 h-5' src={starr} alt="" />
                        <img className='w-5 h-5' src={star2} alt="" />
                    </div>
                    <p className='text-[12px]'>
                        SEEDRA Spinach Seeds - contains 600 seeds in 2 Pa <br/> and professional instructions created by PhD Helga Geo <br/> Be sure of our quality - the freshest batches of this <br/> season. Non-GMO, Heirloom - our seeds were tested and ha <br/> the best germination ratings.
                    </p>
                </div>

            </div>
            <div className='w-full flex items-center gap-x-1 justify-center py-12'>
                <img className='cursor-pointer' src={frame} alt="" />
                <img className='cursor-pointer' src={opcyline} alt="" />
                <img className='cursor-pointer' src={opcyline} alt="" />

            </div>
        </div>
    )
}

export default Clients;