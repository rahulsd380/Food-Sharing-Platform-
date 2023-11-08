import { FaAngleDown, FaBell } from "react-icons/fa6";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import SideDrawer from "../SideDrawer/SideDrawer";
import { BiSolidUserRectangle } from "react-icons/bi";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Navbar = () => {
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
    <div>
      <div className="dark:bg-gray-600 bg-blue-950 px-10 py-2">
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



        <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-10 gap-8 items-center">
        <SideDrawer></SideDrawer>
        <img className="w-32" src="https://i.ibb.co/H20ksH2/food-for-life-logo.png" alt="" />


        <div className="flex col-span-5 items-center">
        <div className="dark:bg-blue-500 relative inline-block group bg-blue-800 p-3 rounded-l-md">
          <button className="flex items-center gap-1 focus:outline-none hover:text-blue-500">
            <FaAngleDown className="transition-transform transform group-hover:rotate-180 text-white" />
            <span className="text-white">Dropdown</span>
          </button>
          <ul className="absolute left-0 hidden group-hover:block space-y-1 bg-white border border-gray-200 py-2 px-4 rounded shadow-md">
            <li>
              <a href="volunteerSection" className="flex items-center space-x-2">
                <span>Our Volunteers</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2">
                <span>Item 2</span>
              </a>
            </li>
            {/* Add more items as needed */}
          </ul>
        </div>
        <input className="border-t-2 border-b-2 bg-white h-12 px-5 text-sm focus:outline-none focus:border-indigo-500 transition duration-300 ease-in-out hover:border-indigo-300 w-full" type="text"  placeholder="Find Categories" />
        <button className="dark:bg-blue-500 rounded-r-md focus:outline-none h-12 px-5 bg-blue-800 text-white font-semibold hover:bg-blue-600 transition duration-300">
              Search
            </button>
        </div>

      <div className="flex gap-5 items-center">
      <Link><BsFillCartCheckFill className="dark:text-blue-500 text-3xl text-blue-700"></BsFillCartCheckFill></Link>
      <Link><FaBell className="dark:text-blue-500 text-3xl text-blue-700"></FaBell></Link>

      </div>
      <Link to={"/addFood"} className="flex items-center justify-center rounded-md focus:outline-none h-12 px-5 text-center dark:bg-blue-500 bg-blue-800 text-white font-semibold hover:bg-blue-600 transition duration-300">
              Add Food
            </Link>
      {
        user?
        <button className="flex items-center justify-center rounded-md focus:outline-none h-12 px-5 text-center bg-blue-800 dark:bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-300" onClick={() => {
                handleLogout(); // Call the handleLogout function when Logout is clicked
              }}>
          Logout
        </button>
      :
            <Link to={"/signup"} className="dark:bg-blue-500 flex items-center justify-center rounded-md focus:outline-none h-12 px-5 text-center bg-blue-800 text-white font-semibold hover:bg-blue-600 transition duration-300">
              Sign Up
            </Link>
      }






        </div>

    </div>
        
    </div>
  );
};

export default Navbar;
