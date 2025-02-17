// import React from 'react'
import {BrowserRouter, Route, Routes,} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import NewsContent from '../pages/NewsContent'
import AboutPage from '../pages/AboutPage'
import SignPage from '../pages/SignPage'
import SinglePage from '../pages/SinglePage'
import EditContent from '../pages/EditContent'
// import DeleteContent from '../pages/DeleteContent'
export default function Router() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/NewsContent' element={<NewsContent/>} />
        <Route path='/edit_Content/:id' element={<EditContent/>} />
        {/* <Route path='/delete_Content/:id' element={<DeleteContent/>} /> */}
        <Route path='/AboutPage' element={<AboutPage/>} />
        <Route path='/SignPage' element={<SignPage/>} />
        <Route path='/news_info/:id' element={<SinglePage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}


