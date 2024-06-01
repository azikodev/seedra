import React, { useContext, useState } from 'react'
import check from "../../assets/check.svg"
import vegatable from "../../assets/vegatable.svg"
import like from "../../assets/like.svg"
import { StateContext } from '../../context/Context'
function BasketCart({ item }) {
    const { basketState, basketDispatch } = useContext(StateContext)
    const [deletee, setDelete] = useState(false)
    const deleteBaskett = () => {
        setDelete(prev => !prev)
    }
    const deleteBasketHandler = () => {
        basketDispatch({ type: "DELETE_BASKET", payload: item.id })
        setDelete(false)

    }
    const noHanldeBtn = () => {
        setDelete(false)
    }
    
    return (
        <div className='w-full flex pt-5 items-center justify-between gap-x-5'>
            <div className='w-7/12 flex items-start justify-start h-96'>
                <img className='w-80' src={item.image} alt="" />
            </div>
            <div className='w-full flex-col gap-y-5 flex h-96 '>
                <div className='w-8/12'>
                    <h1 className='text-2xl font-bold'>{item.title}</h1>
                </div>
                <div className='flex items-center gap-x-3'>

                    <button className='h-10 px-5 rounded-3xl bg-green-50 hover:bg-green-100 ease-linear duration-150 hover:text-green-600 text-sm w-36 text-green-600 justify-center flex items-center gap-x-3'>
                        <img src={check} alt="" />
                        AVAILABLE
                    </button>
                    <button className='h-10 px-5 hover:bg-slate-50 ease-linear duration-150 rounded-3xl border text-sm w-36  justify-center flex items-center gap-x-3'>
                        <img className='w-6 h-6' src={vegatable} alt="" />
                        VEGETABLES
                    </button>
                </div>
                <div className='flex flex-col'>

                    <div className='w-8/12 flex items-center justify-between gap-x-5'>
                        <div className='flex flex-col'>
                            <span className='text-sm font-semibold line-through'>$15.56</span>
                            <span className='text-xl font-bold'>{item.price}</span>
                        </div>
                        <div className='flex items-center gap-x-3'>
                            <img className='cursor-pointer' src={like} alt="" />
                            <button onClick={deleteBaskett} className='p-1.5 rounded-lg w-32 bg-green-600 hover:bg-green-500 ease-linear duration-150 text-white'>Delete</button>
                        </div>

                    </div>
                    {deletee ?
                        <div className='w-60 mt-7 ease-linear duration-150 h-20 flex items-center mx-auto gap-x-5 justify-center bg-white shadow-xl rounded-xl'>
                            <button onClick={noHanldeBtn} className='p-1 rounded text-white px-5 bg-green-600 hover:bg-green-500 ease-linear duration-150'>No</button>
                            <button onClick={deleteBasketHandler} className='p-1 rounded text-white px-5 bg-red-600 hover:bg-red-500 ease-linear duration-150'>Yes</button>
                        </div> : ""}
                </div>
            </div>

        </div>
    )
}

export default BasketCart