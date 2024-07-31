import React from 'react'
import {IoClose} from '../../assets/icon/index.js'

const Cart = ({cartClose}) => {
  return (
    <div className='w-1/2 h-full bg-gray-800 float-right'>
    <div className='w-full flex items-center justify-between shadow-lg p-5 shadow-gray-900'>
        <h3 className='text-2xl font-Lato tracking-wide text-gray-400'>Shopping Cart</h3>
    
        <IoClose size={30} onClick={cartClose} className='text-gray-200 cursor-pointer'/>
    
    </div>

    <div className='pt-10 h-full w-full flex items-center justify-start gap-5 flex-col'>
    </div>
</div>
  )
}

export default Cart
