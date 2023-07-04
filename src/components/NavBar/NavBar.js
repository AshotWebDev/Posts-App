import React from 'react'
import NavMenu from '../NavMenu/NavMenu'
import './NavBar.css'
function NavBar({ setCurrentUser}) {
  return (
    <nav>
        <div className='container'>
            <h1>Personally</h1>
            <NavMenu {...{ setCurrentUser}}/>
        </div>
    </nav>
  )
}

export default NavBar