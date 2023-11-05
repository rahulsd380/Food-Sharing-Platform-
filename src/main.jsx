import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import AvailableFoods from './Components/AvailableFoods/AvailableFoods';
import FoodDetails from './Components/FoodDetails/FoodDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
      {
        path : "/",
        element : <Home></Home>
      },
      {
        path : "signup",
        element : <SignUp></SignUp>
      },
      {
        path : "login",
        element : <Login></Login>
      },
      {
        path : "availableFoods",
        element : <AvailableFoods></AvailableFoods>
      },
      {
        path : "food/:id",
        element : <FoodDetails></FoodDetails>,
        loader : ({params}) => fetch(`http://localhost:5000/available-foods/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
