import React from 'react'
import clock from "../assets/clock.svg"
import green_faul from "../assets/images/green_faul.png"
import strawberry from "../assets/images/strawberry.png"
import cooker from "../assets/images/cooker.png"
function OurBlog() {
    return (
        <div className='w-full h-screen'>
            <div className='w-full flex items-center justify-between py-5'>
                <h1 className='font-bold text-xl'>Our Blog.</h1>
                <button className='p-1 border px-4 text-green-600 hover:bg-slate-100 ease-linear duration-100 rounded font-medium'>Go to our blog</button>
            </div>
            <div className='w-full flex mt-6 gap-5 h-screen'>
                <div className='w-full flex flex-col gap-5'>
                    <div className='w-full flex items-center justify-between h-80 bg-gray-100 rounded-xl'>
                        <div className='p-7 flex flex-col items-start gap-y-3'>
                            <div className='flex items-center gap-x-2'>
                                <img src={clock} alt="" />
                                <span className='text-zinc-500 font-medium'>12.09.2021</span>
                            </div>
                            <h1 className='text-2xl font-bold'>How to plant spinach correctly <br /> in winter</h1>
                            <p className='text-[15px]'>In most areas, successive sowing can be done from early <br /> spring until early winter, but more often during hotter <br /> months...</p>
                            <button className='p-2 hover:bg-slate-100 hover:outline ease-linear duration-150 rounded px-6 font-semibold text-green-600 bg-white'>Read</button>
                        </div>
                        <div>
                            <img src={green_faul} alt="" />
                        </div>
                    </div>

                    <div className='flex  items-center gap-x-5'>

                        <div className='w-full relative rounded-xl flex justify-end  h-[310px] bg-zinc-100'>
                            <div className='flex items-start'>
                                <div className='p-7 flex flex-col items-start gap-y-3'>
                                    <div className='flex items-center gap-x-2'>
                                        <img src={clock} alt="" />
                                        <span className='text-zinc-500 font-medium'>12.09.2021</span>
                                    </div>
                                    <h1 className='text-2xl font-bold'>How to plant spinach correctly  in winter</h1>
                                    <button className='p-2 hover:bg-slate-100 hover:outline ease-linear duration-150 rounded px-6 font-semibold text-green-600 bg-white'>Read</button>
                                </div>
                            </div>
                            <div className='absolute pt-44 '>
                                <img src={strawberry} alt="" />
                            </div>
                        </div>
                        <div className='w-full relative rounded-xl flex justify-end  h-[310px] bg-zinc-100'>
                            <div className='flex items-start'>
                                <div className='p-7 flex flex-col items-start gap-y-3'>
                                    <div className='flex items-center gap-x-2'>
                                        <img src={clock} alt="" />
                                        <span className='text-zinc-500 font-medium'>12.09.2021</span>
                                    </div>
                                    <h1 className='text-2xl font-bold'>How to plant spinach correctly  in winter</h1>
                                    <button className='p-2 hover:bg-slate-100 hover:outline ease-linear duration-150 rounded px-6 font-semibold text-green-600 bg-white'>Read</button>
                                </div>
                            </div>
                            <div className='absolute pt-44 '>
                                <img src={strawberry} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='w-6/12 relative h-full rounded-xl bg-zinc-100'>
                    <div className='flex flex-col gap-y-3 p-8'>
                        <div className='flex items-center gap-x-2'>
                            <img src={clock} alt="" />
                            <span className='text-zinc-500 font-medium'>12.09.2021</span>
                        </div>
                        <h1 className='text-2xl font-bold'>How to plant spinach <br /> correctly in winter</h1>
                        <p className='text-[15px]'>In most areas, successive sowing can be done from early spring until early winter, but <br /> more often during hotter months...</p>
                        <button className='p-2 w-28 hover:bg-slate-100 hover:outline ease-linear duration-150 rounded px-6 font-semibold text-green-600 bg-white'>Read</button>
                    </div>
                    <div className='absolute flex pl-[117px] items-end justify-end'>
                        <img src={cooker} alt="" />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default OurBlog