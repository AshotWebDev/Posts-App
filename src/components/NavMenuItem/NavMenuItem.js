import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './NavMenuItem.css'

function NavMenuItem({name, path}) {

  return (
    <NavLink className={({isActive})=> isActive ? 'active-item':''} to={path}>{name}</NavLink>
  )
}

export default NavMenuItem