import React, { useEffect } from 'react'
import NavBar from '../components/NavBar/NavBar'
import { Outlet, useNavigate } from 'react-router-dom'

function HomeWraper({currentUser, setCurrentUser}) {
  const  navigate = useNavigate()
  useEffect(()=>{
    if(!currentUser){
      navigate('/auth/login')
    }
  },[currentUser])
  return (
    <div>
        <NavBar {...{setCurrentUser}}/>
        <Outlet/>
    </div>
  )
}

export default HomeWraper