import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
// import newsData from './newsData';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getAllBlogs } from "../data/api";
import { deleteNewBlog, } from "../data/api";

export default function HomePage() {
  const [newsData, setNewsData] = useState([]);
  const navigate = useNavigate();
  const [warning, setWarning] = useState(false);
  const [setDeleteNews] = useState({});
  const [Id, setId]
   = useState("");

 

  const warningDisplay = (e) => {
    setWarning(true);
    setId(e);
    console.log(e);
  };
  const deleteNewsHandler = () => {
    const fetchToBeDeleted = async () => {
      try {
        const getData = await deleteNewBlog(Id);
        setDeleteNews(getData);
        alert("news article deleted successfully");
      } catch (error) {
        console.error("error deleting news", error);
      }
    };
    fetchToBeDeleted();
    setWarning(false);
    // window.location.reload();
  };

  const getBlogs = async () => {
    await getAllBlogs().then((res) => {
      console.log("res", res.data);
      setNewsData(res.data);
    });
  };
  useEffect(()=>{
    const fetchNewsArray =async () =>{
        try{
            const getData =await getAllBlogs()
            setNewsData(getData)
        } catch(error) {
            console.error('error fetching news', error)
        }
    };
    
    fetchNewsArray
  }, [])

  useEffect(() => {
    getBlogs();
    deleteNewsHandler();
  }, []);

  return (
    <div className="">
      <Header />
      <div className="min-h-[80vh] flex w-fit  bg-gray-700">
       <div className="">
       <div className={warning ?"absolute  min-h-[89vh] w-[100%] flex justify-center py-10 ":
        "hidden"
        }>
            <div className="h-fit py-[60px] px-10 rounded-xl bg-gray-700 my-auto">
                <p className="text-center text-white">Are you sure you want to Delete this articule</p>
                <div className="flex justify-center gap-5 bg-gray-700">
                    <button className="bg-gray-600 p-3 rounded hover:bg-gray-500 mt-4" onClick={()=> deleteNewsHandler(false)}>yes, proceed</button>
                    <button className="bg-gray-600 p-3 rounded hover:bg-gray-500 mt-4" onClick={()=>setWarning(false)}>No, Cancel</button>
                </div>
            </div>

        </div>
       </div>
        
        <div className="px-3 py-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 w-[fit] h-fit">
        
          {newsData?.map((element) => (
            // eslint-disable-next-line react/jsx-key
            <div
              key={element.id}
              className="rounded-xl overflow-hidden bg-gray-900"
            >
              <img
                className="h-[35vh] w-[100%] sm:w-[100%] "
                src={element.img}
                alt=""
              />
              <div className="flex flex-col gap-5 p-5 ">
                <p className="capitalize text-sm  text-[gray] font-bold">
                  {" "}
                  <span className="mr-2 text-2xl text-red-500">|</span>
                  {element.author}
                </p>
                <p className="capitalize font-semibold text-white  text-lg">
                  {element.title}
                </p>
                <p className="text-2xl text-gray-400">
                  {element.content}{" "}
                  <span
                    onClick={() => navigate(`/news_info/${element.id}`)}
                    className="block text-blue-900 cursor-pointer"
                  >
                    Read more...
                  </span>
                </p>
              </div>
              <button
                type="button"
                className="m-10 px-5 py-3 rounded text-blue-700 cursor-pointer hover:bg-blue-300 text-lg bg-blue-200" onClick={()=>warningDisplay(element.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
