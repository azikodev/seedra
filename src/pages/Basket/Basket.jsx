import React, { useContext, useState } from 'react'
import { StateContext } from '../../context/Context'
import BasketCart from './BasketCart'
import { useNavigate } from 'react-router-dom'
import { AiOutlineDown } from "react-icons/ai";
import { SlBasketLoaded } from "react-icons/sl";
import search from "../../assets/search.svg"

function Basket() {
  const { basketState, basketDispatch } = useContext(StateContext)
  const [promocode, setPromocode] = useState("")
  const navigate = useNavigate()
  const promocodee = [
    {
      prom: "2928tx"
    }
  ]
  if (basketState.basket.length === 0) {
    return <div>
      <div className=' m-auto h-96 flex flex-col items-center justify-center'>
        <div >
          <SlBasketLoaded className='w-20 h-20 my-5 text-green-600' />
        </div>
        {/* <img className='w-60' src="https://img.freepik.com/free-vector/shopping-cart-realistic_1284-6011.jpg?w=740&t=st=1709796152~exp=1709796752~hmac=4cee5fd16f91b86a8b682220f1f5d662b2e59765cde35a6f9dd3fcb550da745a" alt="" /> */}
        <div className='flex flex-col gap-y-1 items-center justify-center'>
          <h1 className='text-xl text-green-600 font-bold'>Savatda hozircha mahsulot yo'q !</h1>
          <p className='text-gray-400'>Products sahifadagi termalardan boshlang yoki kerakli mahsulotni qidiruv orqali toping.</p>
          <button onClick={() => navigate('/allProducts')} className='px-7 p-1 border-2 border-green-600 rounded-lg'>Products</button>
        </div>
      </div>
    </div>
  }
  const contHandle = () => {
    const check = promocodee.find(item => item.prom.toLowerCase() === promocode.toLowerCase())
    if (check) {
      alert("Promocod muvafaqqiyatli o'tdi")
      navigate('/payment')
    } else if (!check) {
      alert("Promocodingizni tekshirib ko'ring")
      navigate('/payment')
    }
    else {
      navigate('/payment')
    }
  }
  const total = basketState.basket.map(item => {
    return item.price
  }).reduce((a, b) => (a + b))
  return (
    <div className='w-full  flex items-start justify-between '>
      <div className='w-full px- p-10'>
        {basketState?.basket?.map(item =>
          <BasketCart key={item.id} item={item} />
        )}
      </div>
      <div className='w-96 mt-10 sticky top-16 h-80 rounded-xl mr-20 bg-green-50 shadow-xl'>
        <div className='flex w-full flex-col gap-y-3 p-7 items-center '>
          <div className='flex w-full items-center justify-between'>
            <h1 className='font-bold text-xl'>Item: {basketState?.basket?.length}</h1>
            <h2 className='font-bold'>
              {total}
            </h2>
          </div>
          <div className='w-full flex flex-col gap-y-2 items-center'>
            <div className='w-full h-12  items-center bg-white flex justify-between px-5 border rounded-3xl'>
              <div className='flex text-xs flex-col'>
                <span>Sort by</span>
                <p className='font-bold'>Most expensive</p>
              </div>
              <AiOutlineDown />
            </div>
            <form className='flex gap-y-2 flex-col'>
              <label className='text-sm' htmlFor="">Promocode</label>
              <input onChange={e => setPromocode(e.target.value)} className='w-full px-4 text-[15px] p-1.5 border rounded outline-none' placeholder='Promocode' type="text" />
            </form>

          </div>
          <hr className='w-full ' />

          <div className='flex flex-col gap-y-5 w-full'>
            <div className='w-full text-sm font-medium flex items-center justify-between'>
              <h2>Total amount</h2>
              <h2 className='font-bold'>{total}</h2>
              {/* <div className=' flex items-center'>
                {basketState.basket?.map(item => (
                  <h2 className=' font-bold' key={item.id}>
                    {item.price}
                  </h2>
                ))}</div> */}
            </div>
            <button onClick={contHandle} className='p-1.5 px-5 text-sm bg-green-600 text-white rounded-lg'>Continue</button>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Basket