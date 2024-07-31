import React from 'react'
import Header from '../layout/Header'
import Buttons from '../../utility/Buttons'
const Hero = () => {
  return (
    <div className='relative w-full h-screen'>
      <div className='w-full h-full fixed top-0 left-0 bg-[url("./assets/images/hero.jpg")] bg-cover bg-center bg-no-repeat'>
        <div className='w-full h-full bg-black/50'>
            <Header/>
        </div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <p className='w-full text-sm  lg:text-lg text-gray-400 font-Lato py-4 text-center'>Casual & Everyday</p>
          <h1 className='w-full text-xl md:text-3xl lg:text-5xl text-gray-200 font-Lato font-bold text-center italic'>
          Effortlessly blend comfort & style!</h1>
          <p className='w-full text-sm md:text-lg
           lg:text-lg  text-gray-400 font-Lato p-4 text-center'>Effortlessly blend comfort and style with our Casual & Everyday collection, featuring cozy sweaters, versatile denim, laid-back tees, and relaxed-fit joggers for your everyday adventures</p>
        <div className='w-full flex justify-center' >
           <Buttons children={"View Collection"}/>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
