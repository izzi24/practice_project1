import { useEffect, useState } from "react";
import Header from "../components/Header";
// import Footer from "../components/Footer";
import { deleteNewBlog } from "../data/api";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

export default function DeleteContent() {
    const [image, setImage] = useState('')
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const navigate = useNavigate()
  const params = useParams()

  const changeImage = (e)=> {
    setImage(e.target.value)
  }

  const changeAuthor = (e)=> {
    setAuthor(e.target.value)
  }

  const changeTitle = (e)=> {
    setTitle(e.target.value)
  }

  const changeContent = (e)=> {
    setContent(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('button clicked');

    const data = {
      img : image,
      title : title,
      content : content,
      author : author,
    }
    // console.log(data);
    await  deleteNewBlog(params.id, data).then((res)=>{
        console.log(res);
        toast.success('existing blog deleted successfully')
        navigate(`/news_info/${params.id}`)
      }).catch((err)=>{
        console.log(err)
        toast.error('Error deleting existing blog')
      })
      
      
    }
  
    const getBlog = async () => {
      await  deleteNewBlog(params.id).then((res)=>{
        setImage(res.data.img);
        setAuthor(res.data.author);
        setTitle(res.data.title);
        setContent(res.data.content);
    })
    }
    
  
    useEffect(()=>{
      getBlog()
      
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

   
  return (
     <div className=" min-h-[100vh] w-full    bg-gradient-to-r from-violet-500 to-fuchsia-500">
          <Header/>
         <div className="text-center mt-">
         <p className="capitalize font-bold text-3xl text-center  p-10">
              delete this blog
            </p>
         <form className="">
           <div className="py-3">
           <input 
            className="w-[90%] capitalize p-4 border" 
            type="text" 
            placeholder="image"
            value={image}
            onChange={(e)=>changeImage(e)}
          />
           </div>
           <div className="py-3"> <input
              className="w-[90%] capitalize p-4 border"
              type="text"
              placeholder="Author"
              value={author}
              onChange={(e)=>changeAuthor(e)}
            /></div>
           <div className="py-3 marker:">
           <input
              className="w-[90%] capitalize  p-4 "
              type="tittle"
              placeholder="title"
              value={title}
              onChange={(e)=>changeTitle(e)}
            />
           </div>
            <div className="py-5"> 
              <textarea 
                className="w-[90%] h-[30vh] capitalize" 
                name="Content" 
                placeholder="Content" 
                id=""
                value={content}
                onChange={(e)=>changeContent(e)}
                ></textarea>
            </div>
            <div><button onClick={(e)=>handleSubmit(e)}  className="w-[90%] bg-[blue] p-5 uppercase font-semibold text-xl text-white ">Submit</button></div>
          </form>
        </div>
        {/* <Footer/> */}
         </div>
  )
}
