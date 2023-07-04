import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import customAxios from '../../axios'
import Header from '../Header/Header'
import { convertFileToBase64 } from '../../halpers/convertFunck'
function EditPost() {

  const [currentPost, setCurrentPost] = useState(null)
  const [currentImg, setCurrentImg] = useState('')

  const navigate = useNavigate()
  const formRef = useRef(null)
  const {id} = useParams()
  useEffect(()=>{
    customAxios.get('/posts?id=' + id)
                .then(({data})=>{
                    setCurrentImg(data[0].img || '')
                    setCurrentPost({...data.at(0)})
                    console.log(currentImg);
                })
  },[])

  const handleSubmit = (e)=>{
    e.preventDefault()
    const post = {
      ...currentPost,
      title: formRef.current[0].value,
      body: formRef.current[1].value,
      img: currentImg,
    }
      try {
        customAxios.patch(`/posts/${currentPost.id}`, post)
        navigate('/myPosts')
      } catch (error) {
        console.log('error');
      }
      formRef.current.reset()
  }
  const handleChangeImg = async ({target:{files}}) => {
    const convertedFile = await convertFileToBase64(files[0])
      setCurrentImg(convertedFile)      
  }
  return (
    <div className='container'>
          <Header title='Edit Post' desc='You can edit your post here'/>
          <form ref={formRef} onSubmit={handleSubmit}>
              <input defaultValue={currentPost?.title} required placeholder='title' type="text" />
              <textarea defaultValue={currentPost?.body} placeholder='body' cols="30" rows="10"></textarea>
              <img width={100} src={currentImg} alt="" />
              <input type="file" accept='image/*' onChange={handleChangeImg}/>
              <button>Add Post</button>
          </form>
          
    </div>
  )
}

export default EditPost