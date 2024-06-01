import React from 'react'
import vector from "../assets/Vector.svg"
import hero from "../assets/images/grren_basil.png"
import cilantro from "../assets/images/cilantro.png"
function Banner() {
    return (
        <>
            <div className='w-full mt-7 flex bg-zinc-100 rounded-xl' >
                <div className='flex flex-col gap-y-6 items-start p-12'>
                    <h1 className='text-3xl font-bold'>SEEDRA Basil Seeds for <br /> Indoor and Outdoor Planting</h1>
                    <h2>
                        Be sure of our quality - the freshest batches of this season. Non-GMO, <br /> Heirloom - our seeds were tested and have the best germination ratings. <br /> Your easy growing experience is our guarantee
                    </h2>
                    <div className='flex items-center gap-x-3'>
                        <img src={vector} alt="" />
                        <h1 className='font-extrabold text-3xl'>$12.56</h1>
                        <h3 className='text-zinc-500 font-bold line-through'>$15.56</h3>
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <button className='p-2 px-5 font-semibold bg-green-600 hover:bg-green-500 ease-linear duration-150 text-white rounded'>Add to card</button>
                        <button className='p-2 px-5 font-semibold bg-white hover:bg-zinc-100 ease-linear duration-150 text-green-600 rounded'>Discover</button>
                    </div>
                </div>
                <div className='flex relative items-end justify-end '>
                    <div className='absolute'>
                        <img className='' src={cilantro} alt="" /> 
                    </div>
                    <div className=' pl-72'>
                        <img src={hero} alt="" />
                    </div>
                </div>
            </div>
            <div className='w-full mx-auto mt-4 rounded-lg py-5  flex items-center flex-col justify-center bg-orange-50'>
                <h2 className=' font-semibold text-xl'>We sell seeds</h2>
                <p>that always sprout and gardening supplies which never break</p>

            </div>
        </>
    )
}

export default Banner