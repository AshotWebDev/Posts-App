import React, { useEffect } from 'react'
import './OnePost.css'
import { useLocation, useNavigate } from 'react-router-dom'
import customAxios from '../../axios'
function OnePost({posts, setPosts,  currentUser}) {

  const navigate = useNavigate()
  const {pathname} = useLocation()

  const handleDelPost = async (id)=>{
    try {
        await customAxios.delete(`/posts/${id}`)
      setPosts([...posts.filter(post => post.id !== id)])
    } catch (error) {
      console.log('error');
    }
  }

  return (
    <>
        {
        posts.map(post=>
            <div className='one-post' key={post.id}>
                <div className='full-info'>
                    <div className='info'>
                        <span>{currentUser?.id === post.userId ? 'By  Me' : 'By  ' +  post.author}</span>
                        <h2>{post.title}</h2>
                        <p>{post.body.slice(0, post.body.indexOf('.'))}</p>
                    </div>
                    {post.img && <img style={{width: 100}} src={post.img} alt=""  />}
                </div>
                <div  className='btns-div'>
                      {pathname === '/myPosts' && <button onClick={()=>handleDelPost(post.id)}>Delete</button>}
                      {pathname === '/myPosts' && <button onClick={()=>navigate('/unique/editPost/'+ post.id)}>Edit</button>}
                      {pathname === '/' && <button onClick={()=>navigate('/unique/showPost/'+ post.id)}>Show All</button>}
                </div>
            </div>
        )
        }
    </>
  )

}
export default OnePost