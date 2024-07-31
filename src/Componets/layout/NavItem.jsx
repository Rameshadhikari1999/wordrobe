import React from 'react'

const NavItem = ({ name }) => {
  return (
    <li className="text-lg font-Lato tracking-wide text-gray-200 cursor-pointer hover:text-gray-300 transition-all ease-in-out duration-300 hover:scale-105 list-none">{name}</li>
  )
}

export default NavItem
