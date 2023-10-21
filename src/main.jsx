import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './LayOut/MainLayout';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';

import AddProduct from './Pages/AddProduct';
import Brand from './Components/Brand/Brand';

import ProductDetailsCard from './Components/ProductDetailsCrad/ProductDetailsCard';
import BrandDetailsUpdate from './Components/BrandDetailsUpdate/BrandDetailsUpdate';
import MyCart from './Components/MyCart/MyCart';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import GalaryCard from './Components/Galary/GalaryCard';
import GalaraCardAdd from './Components/Galary/GalaraCardAdd';
import 'aos/dist/aos.css'; // Import the AOS CSS
import AOS from 'aos';
import ErrorPage from './Pages/ErrorPage';
// Initialize AOS with your preferred options
AOS.init({
  duration: 1000, // Animation duration in milliseconds
  easing: 'ease-in-out', // Easing for the animation
  once: true, // Only animate elements once
});


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://b8a10-brandshop-server-side-alauddin-24434-qzj8zo0im.vercel.app/galary')
        
      },

      {
        path: '/addProduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,

      }
      ,
      {
        path: '/brand/:brand',
        element: <PrivateRoute><Brand></Brand></PrivateRoute>,
        loader: ({ params }) => fetch(`https://b8a10-brandshop-server-side-alauddin-24434-qzj8zo0im.vercel.app/brand/${params.brand}`)
      },
    
      {
        path: '/brandSingle/:id',
        element: <ProductDetailsCard></ProductDetailsCard>,
        loader: ({ params }) => fetch(`https://b8a10-brandshop-server-side-alauddin-24434-qzj8zo0im.vercel.app/brandSingle/${params.id}`)


      },
      {
        path: '/brandDetailsUpdate/:id',
        element: <BrandDetailsUpdate></BrandDetailsUpdate>,
        loader: ({ params }) => fetch(`https://b8a10-brandshop-server-side-alauddin-24434-qzj8zo0im.vercel.app/brandDetailsUpdate/${params.id}`)
      }
      ,
      {
        path: '/myCart',
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: () => fetch('https://b8a10-brandshop-server-side-alauddin-24434-qzj8zo0im.vercel.app/cart')
      }
      ,
      {
        path:'/galary',
        element:<GalaraCardAdd></GalaraCardAdd>,
       
      },
      {
        path:'/galary',
        element:<GalaryCard></GalaryCard>,
       
      }
      ,
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  },
]);












ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
