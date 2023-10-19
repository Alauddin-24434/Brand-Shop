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
import AllProducts from './Components/AllProducts/AllProducts';
import ProductDetailsCard from './Components/ProductDetailsCrad/ProductDetailsCard';
import BrandDetailsUpdate from './Components/BrandDetailsUpdate/BrandDetailsUpdate';
import MyCart from './Components/MyCart/MyCart';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/brand')
      },



      {
        path: '/addProduct',
        element: <AddProduct></AddProduct>,

      }
      ,
      {
        path: '/brand/:brand',
        element: <Brand></Brand>,
        loader: ({ params }) => fetch(`http://localhost:5000/brand/${params.brand}`)
      },
      {
        path: '/brand',
        element: <AllProducts></AllProducts>,
        

      },
      {
        path: '/brandSingle/:id',
        element: <ProductDetailsCard></ProductDetailsCard>,
        loader: ({ params }) => fetch(`http://localhost:5000/brandSingle/${params.id}`)


      },
      {
        path: '/brandDetailsUpdate/:id',
        element: <BrandDetailsUpdate></BrandDetailsUpdate>,
        loader: ({ params }) => fetch(`http://localhost:5000/brandDetailsUpdate/${params.id}`)
      }
      ,
      {
        path: '/myCart',
        element:<MyCart></MyCart>,
        loader: ()=>fetch('http://localhost:5000/cart')
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
    <RouterProvider router={router} />
  </React.StrictMode>,
)
