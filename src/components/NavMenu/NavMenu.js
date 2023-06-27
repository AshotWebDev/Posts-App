import React from 'react'
import NavMenuItem from '../NavMenuItem/NavMenuItem'
import HomePage from '../HomePage/HomePage'

function NavMenu() {
  return (
    <ul className='nav-menu'>
        <NavMenuItem name='Home Page' path='/'/>
        <NavMenuItem name='My Posts' path='/myPosts'/>
        <NavMenuItem name='New Post' path='/newPost'/>
        <NavMenuItem/>
    </ul>
  )
}

export default NavMenu