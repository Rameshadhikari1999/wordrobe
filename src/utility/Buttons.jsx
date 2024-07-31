import React from 'react'

const Buttons = ({children}) => {
  return (
    <button className='bg-transparent text-gray-400 outline-none border-[0.5px] border-gray-100 rounded
     px-16 py-2 hover:bg-white hover:text-black'>
        {children}
    </button>
  )
}

export default Buttons
