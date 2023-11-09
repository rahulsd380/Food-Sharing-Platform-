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
import AddFood from './Components/AddFood/AddFood';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import AditionalFoods from './Components/AditionalFoods/AditionalFoods';
import ManageMyFood from './Components/ManageMyFood/ManageMyFood';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import SingleFood from './Components/ManageMyFood/SingleFood';
import { HelmetProvider } from 'react-helmet-async';
import FoodRequest from './Components/FoodRequest/FoodRequest';
import VolunteerApply from './Components/VolunteerApply/VolunteerApply';
import VolunteeresInfo from './Components/Volunteers/VolunteeresInfo';
import FeaturedFoodDetails from './Components/FeaturedFoods/FeaturedFoodDetails';
import EditFood from './Components/ManageMyFood/EditFood';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
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
        element : <AvailableFoods></AvailableFoods>,
        loader : () => fetch('https://food-sharing-server-three.vercel.app/foodCount')
      },
      {
        path : "addFood",
        element : <PrivateRoute><AddFood></AddFood></PrivateRoute>
      },
      {
        path : "food/:id",
        element : <PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>,
        loader : ({params}) => fetch(`https://food-sharing-server-three.vercel.app/available-foods/${params.id}`)
      },
      {
        path : "featuredFood/:id",
        element : <PrivateRoute><FeaturedFoodDetails></FeaturedFoodDetails></PrivateRoute>,
        loader : ({params}) => fetch(`https://food-sharing-server-three.vercel.app/featured-foods/${params.id}`)
      },
      {
        path : "aditionalFood",
        element : <PrivateRoute><AditionalFoods></AditionalFoods></PrivateRoute>,
      },
      {
        path : "manageFood",
        element : <PrivateRoute><ManageMyFood></ManageMyFood></PrivateRoute>,
      },
      {
        path : "foodRequest",
        element : <PrivateRoute><FoodRequest></FoodRequest></PrivateRoute>,
      },
      {
        path : "volunteerApply",
        element : <PrivateRoute><VolunteerApply></VolunteerApply></PrivateRoute>,
      },
      {
        path : "volunteerInfo",
        element : <VolunteeresInfo></VolunteeresInfo>,
      },
      {
        path : "manageFood/editFood/:id",
        element : <EditFood></EditFood>,
        loader : ({params}) => fetch(`https://food-sharing-server-three.vercel.app/aditional-foods/${params.id}`)
      },

      {
        path : "manageFood/singleFood/:id",
        element : <PrivateRoute><SingleFood></SingleFood></PrivateRoute>,
        loader : ({params}) => fetch(`https://food-sharing-server-three.vercel.app/aditional-foods/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,

)
