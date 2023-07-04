import React, { useRef } from 'react'
import './NewPost.css'
import customAxios from '../../axios'
import { useNavigate } from 'react-router-dom'
import Header from '../Header/Header'
import { convertFileToBase64 } from '../../halpers/convertFunck'

function NewPost({currentUser}) {
  const navigate =  useNavigate()
  const formRef = useRef(null)
  const handleSubmit = async(e)=>{
    e.preventDefault()

    const file = formRef.current[2].files[0]
    
    const convertedFile = await convertFileToBase64(file)

    const [{value: title}, {value: body}] = formRef.current
    const newPost = {
      userId: currentUser.id,
      author: currentUser.name,
      title: title,
      body: body,
      img: convertedFile,
    }
    
    try {
      const res = await customAxios.post('/posts', newPost)
      navigate('/myPosts')
    } catch (error) {
      navigate('*')
    }
  }
  return (
    <div className='container'>
        <Header title='New Post' desc='You can add a new post here'/>
        <form ref={formRef} onSubmit={handleSubmit}>
            <input required placeholder='title' type="text" />
            <textarea placeholder='body' cols="30" rows="10"></textarea>
            <input type="file" accept='image/*'/>
            <button>Add Post</button>
        </form>
    </div>
  )
}

export default NewPost