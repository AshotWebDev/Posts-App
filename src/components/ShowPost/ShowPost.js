import React, { useEffect, useState } from 'react'
import customAxios from '../../axios'
import { useParams } from 'react-router-dom'
import './ShowPost.css'
import AddComment from '../AddComment/AddComment'
function ShowPost({currentUser}) {
  const [currentPost, setCurrentPost] = useState(null)
  const [comments, setComments] = useState([])
  const {id} = useParams()
  useEffect(()=>{
    customAxios.get('/posts?id=' + id)
                .then(({data})=>{
                    setCurrentPost({...data.at(0)})
                })
  },[])

  useEffect(()=>{
    customAxios.get('/comments?postId=' + currentPost?.id)
    .then(({data})=>{
        setComments([...data])
    })
  },[currentPost])
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
              {
                comments.map(comment =>
                    <h3 className='com' key={comment.id}>{comment.author}-{comment.body}</h3>
                  )
              }
            <AddComment {...{currentPost, setComments, currentUser}}/>
    </div>
  )
}

export default ShowPost