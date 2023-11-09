import { useContext, useEffect, useState } from "react";
import FoodRequestCard from "./FoodRequestCard";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaDiagramPredecessor } from "react-icons/fa6";
import Swal from "sweetalert2";
import { BsSearch } from "react-icons/bs";
import SideDrawer from "../SideDrawer/SideDrawer";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { BiSolidUserRectangle } from "react-icons/bi";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaTwitter } from "react-icons/fa";


const FoodRequest = () => {
    const [manageFood, setManageFood] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const {user, logout} = useContext(AuthContext);
    const  url = `https://food-sharing-server-three.vercel.app/requested-food?email=${user.email}`
    console.log(manageFood);

    useEffect( () => {
        fetch(url)
        .then(res => res.json())
        .then(data => setManageFood(data))
    }, [url])





    const handleDelete = id => {
        fetch(`https://food-sharing-server-three.vercel.app/requested-food/${id}`, {
            method : 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            Swal.fire({
                title: "Are you sure want to cancel request?",
                text: "You won't be able to restore this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((data) => {
                if (data.isConfirmed) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                  const remaining = manageFood.filter(booking => booking._id !== id)
                    setManageFood(remaining)
                }
              });
        })
    }


          // search functionality

          const handleInputChange = (e) => {
            setSearchValue(e.target.value);
          };
    
    
    
          const handleSearch = () => {
            const filtered = manageFood.filter((data) =>
              data.food_name.toLowerCase().includes(searchValue.toLowerCase())
            );
            setManageFood(filtered);
          };
         // ------------ Search End----------------


         // logout functionality

    const handleLogout = () => {
        logout()
        .then(result => {
          console.log(result.user);
        })
        .then(error => {
          console.log(error);
        })
    }
        // ------------ Logout End----------------


    return (
      <div>
              {/* Navbar */}
              <div className="sticky top-0 z-10">
                  <div className="dark:bg-gray-600 bg-blue-950 px-5 md:px-10 py-2">
          <div className="flex items-center justify-between">
          <div className="flex gap-3 items-center text-white text-xl">
            <BiSolidUserRectangle></BiSolidUserRectangle>
            <p>{user?.displayName}</p>
          </div>


          <div className="flex gap-6 justify-center">
                        <button className="w-7 h-7 rounded-full bg-gray-500 text-white flex justify-center items-center transform duration-300 hover:bg-blue-500 "><FaFacebookF></FaFacebookF></button>
                        <button className="w-7 h-7 rounded-full bg-gray-500 text-white flex justify-center items-center transform duration-300 hover:bg-blue-700 "><FaTwitter></FaTwitter></button>
                        <button className="w-7 h-7 rounded-full bg-gray-500 text-white flex justify-center items-center transform duration-300 hover:bg-blue-600 "><FaLinkedinIn></FaLinkedinIn></button>
                        <button className="w-7 h-7 rounded-full bg-gray-500 text-white flex justify-center items-center transform duration-300 hover:bg-red-500 "><FaGooglePlusG></FaGooglePlusG></button>
                    </div>

          </div>
      </div>


            <div className="bg-gray-50 px-10 shadow-md py-2">
                <div className="md:flex md:items-center md:justify-between">
                <div className="flex justify-between gap-5 items-center">
                 <SideDrawer></SideDrawer>
                 <img className="w-24" src="https://i.ibb.co/Q8DS1Xf/food-for-life-logo.png" alt="" />
                </div>
                
                <div className="hidden md:flex md:gap-8">
                    <Link to={"/"} className="font-semibold hover:text-blue-600 transition">Home</Link>
                    <Link to={"/availableFoods"} className="font-semibold hover:text-blue-600 transition">Available Foods</Link>
                    <Link to={"/addFood"} className="font-semibold hover:text-blue-600 transition">Add Food</Link>
                    <Link to={"/volunteerInfo"} className="font-semibold">
                    <div className="relative group">
          <button className="flex items-center gap-1 hover:text-blue-600 transition">
            <span className="">Volunteers</span>
            <FaAngleDown className="transition-transform transform group-hover:rotate-180" />
          </button>
          <ul className="w-52 absolute hidden group-hover:block bg-white border border-gray-200 py-2 px-4 rounded shadow-md">
            <li className="mb-2 hover:text-blue-600 transition">
              <Link>
                <span>Our Volunteers</span>
              </Link>
            </li>
            <li className="mb-2 hover:text-blue-600 transition">
              <Link>
                <span>Become a Volunteer</span>
              </Link>
            </li>
          </ul>
        </div>
                    </Link>
                </div>

                    <div className="flex gap-4">
                    <div className="hidden md:flex">
                    <input value={searchValue} onChange={handleInputChange} className="rounded-l-md border-t-2 border-b-2 border-l-2 bg-white h-12 px-5 text-sm focus:outline-none focus:border-indigo-500 transition duration-300 ease-in-out hover:border-indigo-300 w-full" type="text"  placeholder="Find Food" />
                    <button onClick={handleSearch} className="dark:bg-blue-500 rounded-r-md focus:outline-none h-12 px-4 bg-blue-800 text-white font-semibold hover:bg-blue-600 transition duration-300">
                        <BsSearch></BsSearch>
                    </button>
                </div>


                <div>
                {
        user?
        <button className="flex items-center justify-center rounded-md focus:outline-none h-12 px-5 text-center bg-blue-800 dark:bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-300" onClick={() => {
                handleLogout(); // Call the handleLogout function when Logout is clicked
              }}>
          Logout
        </button>
      :
            <Link to={"/signup"} className="dark:bg-blue-500 md:flex items-center justify-center rounded-md focus:outline-none h-12 px-5 text-center bg-blue-800 text-white font-semibold hover:bg-blue-600 transition duration-300 hidden">
              Sign Up
            </Link>
      }
                </div>

                    </div>

                </div>
            </div>
        </div>



        <div className="py-4 max-w-6xl mx-auto">
            <div className="flex items-center gap-5 mt-6">
                <FaDiagramPredecessor className="text-2xl font-bold text-blue-800"></FaDiagramPredecessor>
                <h1 className="text-3xl font-bold">My Requested Foods</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-5">
            {
                manageFood.map(food => <FoodRequestCard key={food._id} food={food} handleDelete={handleDelete}></FoodRequestCard>)
            }
        </div>
        </div>
      </div>
    );
};

export default FoodRequest;