import React from 'react'
import OnePost from '../OnePost/OnePost'
import './AllPosts.css'
function AllPosts({posts, setPosts, currentUser}) {
  return (
    <div className='container'>
        <OnePost {...{posts, setPosts, currentUser}}/>
    </div>
  )
}

export default AllPosts