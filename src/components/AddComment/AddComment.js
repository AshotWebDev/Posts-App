import React, { useRef } from 'react'
import customAxios from '../../axios'

function AddComment({currentPost, setComments, currentUser}) {
    const formRef = useRef(null)

    const handleSubmit  = async(e) =>{
        e.preventDefault()
        const newComment = {
            postId: currentPost.id,
            author: currentUser.name,
            body: formRef.current[0].value
        }
        try {
             await customAxios.post('/comments', newComment)
             setComments(prev => [
              ...prev,
              newComment
             ])
             formRef.current[0].value = ''
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