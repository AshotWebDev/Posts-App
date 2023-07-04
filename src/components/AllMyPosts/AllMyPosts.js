import React from 'react'
import OnePost from '../OnePost/OnePost'
import './AllMyPosts.css'
function AllMyPosts({posts, setPosts, currentUser}) {
  return (
    <div className='container'>
        <OnePost {...{posts, setPosts,  currentUser}}/>
    </div>
  )
}

export default AllMyPosts