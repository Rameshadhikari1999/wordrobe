import React from 'react'
import {IoClose} from '../../assets/icon/index.js'
import { menu } from '../../assets/contants/index.js'
import NavItem from './NavItem.jsx'

const MobileNav = ({menuClose}) => {
  return (
    <div className='w-full h-full bg-gray-800 p-5'>
        <div className='float-right bg-gray-700 p-5 rounded-full '>
            <IoClose size={30} onClick={menuClose}/>
        </div>

        <div className='pt-10 h-full w-full flex items-center justify-start gap-5 flex-col'>
            {menu.map((item) => (
                <div key={item.id} className='w-full bg-gray-700 p-5 rounded text-center hover:bg-gray-900'>
                    <NavItem  name={item.name}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default MobileNav
