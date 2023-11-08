import { useEffect, useState } from "react";
import AvailableFoodsCard from "./AvailableFoodsCard";
import { BiSortDown } from "react-icons/bi";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../Navbar/Navbar";


const AvailableFoods = () => {
    const [availableFoods, setAvailableFoods] = useState([]);
    console.log(availableFoods);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(0);
    const [sortOrder, setSortOrder] = useState("asc");

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



    // const {user, logout} = useContext(AuthContext);

    // const handleLogout = () => {

    //     logout()
    //     .then(result => {
    //       console.log(result.user);
    //     })
    //     .then(error => {
    //       console.log(error);
    //     })
    // }


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



    return (
        <div>
          <Helmet>
              <title>Food For Life | Available Foods</title>
          </Helmet>
                <Navbar></Navbar>
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