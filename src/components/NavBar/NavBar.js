import React from 'react'
import NavMenu from '../NavMenu/NavMenu'
import './NavBar.css'
function NavBar() {
  return (
    <nav>
        <div className='container'>
            {/* <img src={} alt="" /> */}
            <NavMenu/>
        </div>
    </nav>
  )
}

export default NavBar