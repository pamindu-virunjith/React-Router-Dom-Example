import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './AllPages/About.jsx'
import{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Gallery from './AllPages/Gallery.jsx'
import ContactUs from './AllPages/ContactUs.jsx'



const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
  },
  {
    path:"/about",
    element: <About/>,
  },
  {
    path:"/gallery",
    element: <Gallery/>,
  },
  {
    path:"/contactus",
    element: <ContactUs/>,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router}/>
  </StrictMode>,
)
