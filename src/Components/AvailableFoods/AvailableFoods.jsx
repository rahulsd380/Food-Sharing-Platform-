import { useContext, useEffect, useState } from "react";
import AvailableFoodsCard from "./AvailableFoodsCard";
import { BiSortDown } from "react-icons/bi";
import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../AuthProvider/AuthProvider";
import SideDrawer from "../SideDrawer/SideDrawer";
import { BiSolidUserRectangle } from "react-icons/bi";
import { FaAngleDown, FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";


const AvailableFoods = () => {
  const {user, logout} = useContext(AuthContext);
    const [availableFoods, setAvailableFoods] = useState([]);
    console.log(availableFoods);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(0);
    const [sortOrder, setSortOrder] = useState("asc");
    const [searchValue, setSearchValue] = useState('');


    
    // const [filteredData, setFilteredData] = useState();

    const {count} = useLoaderData();
    const numberOfPages = Math.ceil(count / itemsPerPage);

    const pages = [];
    for(let i = 0; i < numberOfPages; i++){
      pages.push(i)
    }
    
    

    useEffect(() => { 
        fetch(`https://food-sharing-server-three.vercel.app/available-foods?page=${currentPage}&size=${itemsPerPage}`)
          .then(res => res.json())
          .then(data => {
            const sortedData = data.sort((a, b) => {
              if (sortOrder === "asc") {
                return new Date(a.expired_date) - new Date(b.expired_date);
              } else {
                return new Date(b.expired_date) - new Date(a.expired_date);
              }
            });
    
            setAvailableFoods(sortedData);
          });
      }, [sortOrder, currentPage, itemsPerPage]);



      const toggleSortOrder = () => {
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
      };



      // search functionality

      const handleInputChange = (e) => {
        setSearchValue(e.target.value);
      };



      const handleSearch = () => {
        const filtered = availableFoods.filter((data) =>
          data.food_name.toLowerCase().includes(searchValue.toLowerCase())
        );
        setAvailableFoods(filtered);
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


// Pagination functionality
    const handleItemsPerPage = e => {
      const val = parseInt(e.target.value);
      setItemsPerPage(val);
      setCurrentPage(0);
    }


    const handlePrevPage = () => {
      if(currentPage > 0){
        setCurrentPage(currentPage - 1)
      }
    }

    const handleNextPage = () => {
      if(currentPage < pages.length -1 ){
        setCurrentPage(currentPage + 1)
      }
    }
    // ------------ Pagination End----------------


    

    return (
        <div>
          <Helmet>
              <title>Food For Life | Available Foods</title>
          </Helmet>
                
                
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





            <div className="max-w-7xl mx-auto flex justify-between items-center mt-10">
                <h1 className="text-2xl font-semibold"><span className="text-blue-800 font-bold">Available Foods :</span> {availableFoods.length}</h1>
                <div className="">
                <button onClick={toggleSortOrder} className="flex items-center justify-center rounded-md focus:outline-none py-2 px-3 text-center border bg-[#6c7b8a] text-white font-semibold transition duration-300 tooltip" data-tip="Sort by expire-date">
                    <BiSortDown className="text-xl font-bold"></BiSortDown>
                </button>
                </div>
            </div>

             <div className="grid px-5 md:p-0 md:grid-cols-2 gap-5 max-w-7xl mx-auto mb-4 mt-5">
            {
                availableFoods.map(food => <AvailableFoodsCard key={food._id} food={food}></AvailableFoodsCard>)
            }
            </div>

 

            
            <div className="flex justify-center mb-10">
            <button onClick={handlePrevPage} className="mr-5 rounded-md focus:outline-none py-2 px-3 text-center bg-blue-800 text-white font-semibold hover:bg-blue-600 transition duration-300">
                Previous
            </button>
                {
                  pages.map(page => <button 
                    onClick={() => setCurrentPage(page)}
                    className={currentPage === page ? 'mr-5 rounded-md focus:outline-none py-2 px-3 text-center bg-red-500 text-white font-semibold hover:bg-blue-600 transition duration-300' : 'mr-5 rounded-md focus:outline-none py-2 px-3 text-center bg-blue-800 text-white font-semibold hover:bg-blue-600 transition duration-300' } key={page}>{page}</button>)
                }

                <button onClick={handleNextPage} className="mr-5 rounded-md focus:outline-none py-2 px-3 text-center bg-blue-800 text-white font-semibold hover:bg-blue-600 transition duration-300">
                 Next
            </button>
                <select value={itemsPerPage} onChange={handleItemsPerPage} name="" id="">
                    <option value="5">05</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                </select>
                
            </div>
            
        </div>
    );
};

export default AvailableFoods;