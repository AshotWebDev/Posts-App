import React, { useEffect, useState } from 'react'
import customAxios from '../../axios'
import AllMyPosts from '../AllMyPosts/AllMyPosts'
import Header from '../Header/Header'
import './MyPosts.css'
function MyPosts({currentUser}) {
  const [posts, setPosts] = useState([])
   useEffect(()=> {
    try {
      customAxios.get(`/posts?userId=${currentUser.id}`)
                      .then(({data})=>{
                          setPosts([...data])
                      })
    } catch (error) {
      console.log('error');
    }
   },[])

  return (
    <div className='my-posts'>
        <Header title='My Posts' desc='You can only see your posts here'/>
        <AllMyPosts {...{posts, setPosts, currentUser}}/>
    </div>
  )
}

export default MyPosts