
import { useState,useEffect } from 'react'
// import blogData from '../pages/newsData'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../components/Header'
import { getSingleBlog } from '../data/api'

export default function SinglePage() {
    const [blog, setBlog] =useState({})


    const params = useParams()

    const navigate = useNavigate()
    
    const getBlog = async () =>{
        await getSingleBlog(params.id).then((res)=>{
            console.log('res', res);
            setBlog(res.data);
            
        })
    }
    
    useEffect(()=>{
        console.log('para', params.id);
        
        getBlog()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
    <div className=''>
        <Header/>
        <div className= 'min-h[80vh]'>
            
            <div className='bg-gray-400'>
                <button onClick={()=>navigate(`/edit_Content/${blog.id}`)} type='button' className='m-10 px-5 py-3 rounded text-blue-700 cursor-pointer hover:bg-blue-300 text-lg bg-blue-200'>Edit this blog</button>
                <p className='p-10 font-bold text-3xl'>{blog.title}</p>
                <img className='px-10 w-full h-[70vh]' src={blog.img} alt="" />
                <p className='capitalize text-3xl px-10 py-5 text-black font-bold'> <span className= 'mr-2 text-4xl text-red-500'>|</span>{blog.author}</p>
                <p className='capitalize  px-10 py-5 font-semibold text-black  text-3xl'>{blog.description}</p>
                <p className='px-10 py-5 text-3xl'>{blog.content}</p>
            </div>
        </div>
    </div>
  )
}
