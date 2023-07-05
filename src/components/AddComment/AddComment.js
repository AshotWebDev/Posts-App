import React, { useRef } from 'react'
import customAxios from '../../axios'

function AddComment({currentPost}) {
    const formRef = useRef(null)

    const handleSubmit  = async(e) =>{
        e.preventDefault()
        const newComment = {
            postId: currentPost.id,
            author: currentPost.author,
            body: formRef.current[0].value
        }
        try {
             await customAxios.post('/comments', newComment)
            
          } catch (error) {
            console.log('error');
          }
        }
  return (
    <form ref={formRef} onSubmit={handleSubmit}>
        <input type="text" />
        <button>Add</button>
    </form>
  )
}

export default AddComment