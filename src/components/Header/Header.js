import React from 'react'
import './Header.css'
function Header({title, desc}) {
  return (
    <header>
        <div className='container'>
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    </header>
        
    
  )
}

export default Header