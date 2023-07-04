import React, { useEffect, useState } from 'react'
import customAxios from '../../axios'
import AllpPosts from '../AllPosts/AllPosts'
import Header from '../Header/Header'
import './HomePage.css'
function HomePage({currentUser}) {
   const [posts, setPosts] = useState([])
   useEffect(()=> {
    try {
      customAxios.get('/posts')
                      .then(({data})=>{
                          setPosts([...data])
                      })
    } catch (error) {
      console.log('error');
    }
   },[])
  return (
        <div className='all-posts'>
            <Header title='Home Page' desc='Here you can see all blog posts by users'/>
            <AllpPosts {...{posts, currentUser}}/>
        </div>
  )
}

export default HomePage