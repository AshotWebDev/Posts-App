import React, { useEffect, useState } from 'react'
import customAxios from '../../axios'
import { useParams } from 'react-router-dom'
import './ShowPost.css'
function ShowPost({currentUser}) {
  const [currentPost, setCurrentPost] = useState(null)
  const {id} = useParams()
  useEffect(()=>{
    customAxios.get('/posts?id=' + id)
                .then(({data})=>{
                    setCurrentPost({...data.at(0)})
                })
  },[])
  return (
    <div className='unique-post container'>
            <div className='unique-postDiv'>
                <div>
                    <span>{currentPost?.userId === currentUser?.id ? 'By  Me' : 'By  ' + currentPost?.author}</span>
                    <h2>{currentPost?.title}</h2>
                    <p>{currentPost?.body}</p>
                </div>
                <img width={150} height={150} src={currentPost?.img} alt="" />
            </div>

    </div>
  )
}

export default ShowPost