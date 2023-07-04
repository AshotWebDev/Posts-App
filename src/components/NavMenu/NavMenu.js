import React from 'react'
import NavMenuItem from '../NavMenuItem/NavMenuItem'
import './NavMenu.css'
function NavMenu({ setCurrentUser}) {
  return (
    <ul className='nav-menu'>
        <NavMenuItem name='Home Page' path='/'/>
        <NavMenuItem name='My Posts' path='/myPosts'/>
        <NavMenuItem name='New Post' path='/newPost'/>
        <button onClick={()=> setCurrentUser(null)}>Log-Out</button>
    </ul>
  )
}

export default NavMenu