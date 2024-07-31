import React from 'react'
import Header from '../layout/Header'
const Hero = () => {
  return (
    <div className='w-full h-screen'>
      <div className='w-full h-full fixed top-0 left-0 bg-[url("./assets/images/hero.jpg")] bg-cover bg-center bg-no-repeat'>
        <div className='w-full h-full bg-black/50'>
            <Header/>
        </div>
      </div>
    </div>
  )
}

export default Hero
