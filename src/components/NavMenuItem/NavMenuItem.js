import React from 'react'
import { NavLink } from 'react-router-dom'

function NavMenuItem({name, path}) {
  return (
    <NavLink to={path}>{name}</NavLink>
  )
}

export default NavMenuItem