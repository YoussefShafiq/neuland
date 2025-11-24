import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout'
import 'aos/dist/aos.css';
import Home from './pages/Home'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Projects from './pages/Projects'


function App() {


  const routers = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'projects', element: <Projects /> },
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={routers} ></RouterProvider>

    </>
  )
}

export default App
