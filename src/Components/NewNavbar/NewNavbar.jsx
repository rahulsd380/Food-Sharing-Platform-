import { Link } from "react-router-dom";
import SideDrawer from "../SideDrawer/SideDrawer";
import { BsSearch } from "react-icons/bs";
import { BiSolidUserRectangle } from "react-icons/bi";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";
import { FaAngleDown, FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { LiaFlagUsaSolid } from "react-icons/lia";


const NewNavbar = () => {
    const {user, logout} = useContext(AuthContext);

    const handleLogout = () => {
        logout()
        .then(result => {
          console.log(result.user);
        })
        .then(error => {
          console.log(error);
        })
    }
    return (
        <div className="sticky top-0 z-10">
                  <div className="dark:bg-gray-600 bg-blue-950 px-5 md:px-10 py-2">
          <div className="flex items-center justify-between">
          <div className="flex gap-3 items-center text-white text-xl">
            <BiSolidUserRectangle></BiSolidUserRectangle>
            <p>{user?.displayName}</p>
          </div>


         <div className="flex gap-10 items-center">
         
          <div className="flex gap-6 justify-center">
                        <button className="w-7 h-7 rounded-full bg-gray-500 text-white flex justify-center items-center transform duration-300 hover:bg-blue-500 "><FaFacebookF></FaFacebookF></button>
                        <button className="w-7 h-7 rounded-full bg-gray-500 text-white flex justify-center items-center transform duration-300 hover:bg-blue-700 "><FaTwitter></FaTwitter></button>
                        <button className="w-7 h-7 rounded-full bg-gray-500 text-white flex justify-center items-center transform duration-300 hover:bg-blue-600 "><FaLinkedinIn></FaLinkedinIn></button>
                        <button className="w-7 h-7 rounded-full bg-gray-500 text-white flex justify-center items-center transform duration-300 hover:bg-red-500 "><FaGooglePlusG></FaGooglePlusG></button>
                    </div>

                    <div>
            <select className="bg-blue-500 rounded-sm text-gray-200 p-1">
              <option className="flex items-center gap-2 text-gray-200" value="">
               <LiaFlagUsaSolid className=""></LiaFlagUsaSolid> ENG
              </option>
              <option className="flex items-center gap-2 text-gray-200" value="">
               <LiaFlagUsaSolid className=""></LiaFlagUsaSolid> BAN
              </option>
              <option className="flex items-center gap-2 text-gray-200" value="">
               <LiaFlagUsaSolid className=""></LiaFlagUsaSolid> ARABIC
              </option>
            </select>
          </div>
          

          </div>
         </div>
      </div>


            <div className="bg-gray-50 dark:bg-gray-500 px-10 shadow-md py-2">
                <div className="md:flex md:items-center md:justify-between">
                <div className="flex justify-between gap-5 items-center">
                 <SideDrawer></SideDrawer>
                 <img className="w-24" src="https://i.ibb.co/Q8DS1Xf/food-for-life-logo.png" alt="" />
                </div>
                
                <div className="hidden md:flex md:gap-8">
                    <Link to={"/"} className="font-semibold hover:text-blue-600 transition dark:text-gray-200">Home</Link>
                    <Link to={"/availableFoods"} className="font-semibold hover:text-blue-600 transition dark:text-gray-200">Available Foods</Link>
                    <Link to={"/addFood"} className="font-semibold hover:text-blue-600 transition dark:text-gray-200">Add Food</Link>
                    <Link to={"/aditionalFood"} className="font-semibold hover:text-blue-600 transition dark:text-gray-200">My Donated Foods</Link>
                    <Link className="font-semibold">
                    <div className="relative group">
          <button className="flex items-center gap-1 hover:text-blue-600 transition">
            <span className="dark:text-gray-200">Volunteers</span>
            <FaAngleDown className="transition-transform transform group-hover:rotate-180 dark:text-gray-200" />
          </button>
          <ul className="w-52 absolute hidden group-hover:block bg-white border border-gray-200 py-2 px-4 rounded shadow-md">
            <li className="mb-2 hover:text-blue-600 transition">
              <Link to={"volunteerInfo"}>
                <span>Our Volunteers</span>
              </Link>
            </li>
            <li className="mb-2 hover:text-blue-600 transition">
              <Link to={"volunteerApply"}>
                <span>Become a Volunteer</span>
              </Link>
            </li>
          </ul>
        </div>
                    </Link>
                </div>

                    <div className="flex gap-4">
                    <div className="hidden md:flex">
                    <input className="rounded-l-md border-t-2 border-b-2 border-l-2 bg-white h-12 px-5 text-sm focus:outline-none focus:border-indigo-500 transition duration-300 ease-in-out hover:border-indigo-300 w-full" type="text"  placeholder="Find Categories" />
                    <button className="dark:bg-blue-500 rounded-r-md focus:outline-none h-12 px-4 bg-blue-800 text-white font-semibold hover:bg-blue-600 transition duration-300">
                        <BsSearch></BsSearch>
                    </button>
                </div>


                <div className="hidden md:flex">
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
    );
};

export default NewNavbar;