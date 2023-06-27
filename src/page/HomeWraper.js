import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'

function HomeWraper() {
  return (
    <div>
        <NavBar/>
        <Outlet/>
    </div>
  )
}

export default HomeWraper