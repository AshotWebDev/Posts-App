import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import customAxios from '../../axios'
import './LoginPage.css'
function LoginPage({setCurrentUser, currentUser}) {
  const formRef = useRef(null)
  const navigate = useNavigate()
  useEffect(()=>{
    if(currentUser){
      navigate('/')
    }
  },[currentUser])
 const handleSubmit = async (e) =>{
    e.preventDefault()
    const [{value: login}, {value: password}] = formRef.current
    const {data} = await customAxios.get(`users?email=${login}&password=${password}`)
   if(data.length){
    setCurrentUser(data.at(0))
   }else{
    console.error('error');
   }
  }
  return (
    <form ref={formRef} onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input type="text" placeholder='Username'/>
        <input type="text" placeholder='password'/>
        <div className='btns'>
            <button>Log-In</button>
            <button type='button' onClick={()=> navigate('/auth/registr')}>Registre</button>
        </div>
    </form>
  )
}

export default LoginPage