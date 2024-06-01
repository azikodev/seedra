import React, { useContext } from 'react'
import strel from "../assets/strelll.svg"
import pay from "../assets/pay.svg"
import pal from "../assets/pal.svg"
import visa from "../assets/visa.svg"
import master from "../assets/mastercard.svg"
import { StateContext } from '../context/Context'
import right_strel from "../assets/right_strel.svg"
import { useNavigate } from 'react-router-dom'
function Payment() {
    const { basketState } = useContext(StateContext)
    const navigate = useNavigate()
    const exitHandler = () => {
        navigate('/basket')
    }
    return (
        <div className='w-full'>
            <div className='w-4/12 mt-4 h-[500px] bg-white shadow-xl mx-auto rounded-xl'>
                <div className='p-7 flex flex-col gap-y-5 w-full'>
                    <div className='w-full flex items-center gap-x-2 justify-start'>
                        <img className='cursor-pointer' onClick={exitHandler} src={strel} alt="" />
                        <h1 className='font-bold text-2xl'>Payment info</h1>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <p className='text-sm'>Card type</p>
                        <div className='flex items-center gap-x-3'>
                            <div className='h-10 flex items-center justify-center border rounded px-2'>
                                <img src={pay} alt="" />
                            </div>
                            <div className='h-10 border flex items-center justify-center rounded px-2'>
                                <img src={visa} alt="" />
                            </div>
                            <div className='h-10 border flex items-center justify-center rounded px-2'>
                                <img src={master} alt="" />
                            </div>
                            <div className='h-10 border flex items-center justify-center rounded px-2'>
                                <img className='w-14' src={pal} alt="" />
                            </div>

                        </div>

                    </div>
                    <form className='flex flex-col'>
                        <div className='flex flex-col gap-y-2'>
                            <label className='text-sm' htmlFor="">card number</label>
                            <input required className='p-2 px-3 outline-none border rounded' type="text" placeholder='0000 0000 0000 0000' />
                        </div>
                        <div className='w-full flex items-center gap-x-3 justify-start'>
                            <div className='w-[250px] flex flex-col gap-y-2'>
                                <p className='text-sm'>Expiring data</p>
                                <input required className='p-2 px-3 outline-none border rounded' placeholder='01/01' type="text" />

                            </div>
                            <div className='w-[180px] flex flex-col gap-y-2'>
                                <p className='text-sm'>CCV</p>
                                <input required className='p-2 px-3 outline-none border rounded' placeholder='123' type="text" />
                            </div>
                        </div>
                        <div className='py-5'>

                            <hr />
                        </div>
                        <div className='w-full flex flex-col gap-y-7 h-20'>
                            <div className='w-full flex justify-between'>
                                <p>Total amount</p>

                                <div className=' flex items-center'>
                                    {basketState.basket?.map(item => (
                                        <h2 className=' font-bold' key={item.id}>
                                            {item.price}
                                        </h2>
                                    ))}</div>

                            </div>
                            <button className='flex items-center justify-between p-2 rounded bg-green-600 text-white hover:bg-green-500 ease-linear duration-150'>
                                <div className=' flex items-center'>
                                    {basketState.basket?.map(item => (
                                        <h2 className=' font-bold' key={item.id}>
                                            {item.price}
                                        </h2>
                                    ))}</div>
                                <div className='flex items-center gap-x-2'>
                                    <span className='tex-sm font-medium'>Continue</span>
                                    <img src={right_strel} alt="" />

                                </div>

                            </button>

                        </div>

                    </form>

                </div>
            </div>

        </div>
    )
}

export default Payment