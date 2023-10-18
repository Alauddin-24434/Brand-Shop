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
import Cetagory from './Components/Cetagory/Cetagory';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/cetagory',
        element:<Cetagory></Cetagory>,
       
        
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
