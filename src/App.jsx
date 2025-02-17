// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
// import Header from './components/Header'
// import Footer from './components/Footer'
// import HomePage from './pages/HomePage'
// import NewsContent from './pages/NewsContent'
import Router from './router/Router'
import { ToastContainer } from 'react-toastify';

function App() {
 

  return (
    <>
            <ToastContainer />

     <Router/>
     {/* <HomePage/> */}
    
    </>
  )
}

export default App
