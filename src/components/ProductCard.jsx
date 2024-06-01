import React, { useContext } from 'react'
import basket from "../assets/basket.svg"
import { StateContext } from '../context/Context'
function ProductCard({ item }) {
    const { basketState, basketDispatch } = useContext(StateContext)
    const addToBasket = () => {
        const check = basketState.basket.some(element => item.id === element.id)
        if (check) {
            alert("Bu maxsulot savatda bor!")
            return
        }
        else {
            basketDispatch({ type: "ADD_TO_BASKET", payload: item })
            alert("Mahsulot savatga qo'shildi")
        }
    }
    return (
        <div className='border flex flex-col gap-y-5 rounded-lg p-10'>
            <img className='cursor-pointer' src={item.image} alt="" />
            <div className='flex flex-col gap-y-2 items-start'>
                <div className='flex items-center '>
                    <img src={item.star} alt="" />
                    <img src={item.star} alt="" />
                    <img src={item.star} alt="" />
                    <img src={item.star} alt="" />
                    <img src={item.starr} alt="" />
                    <p className='text-zinc-500 px-4 font-medium'>({item.view})</p>
                </div>
                <h2 className='font-medium'>{item.title}</h2>
                <div className='w-full flex items-center justify-between'>
                    <span className='text-xl font-extrabold'>{item.price}</span>
                    <button onClick={addToBasket} className='w-10 h-10 hover:bg-slate-100 duration-100 ease-linear flex items-center justify-center border rounded-md'>
                        <img src={basket} alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;