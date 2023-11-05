import { useEffect, useState } from "react";
import AvailableFoodsCard from "./AvailableFoodsCard";
import { BiSortDown } from "react-icons/bi";
import Navbar2 from "../Navbar/Navbar2";


const AvailableFoods = () => {
    const [availableFoods, setAvailableFoods] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/available-foods')
        .then(res => res.json())
        .then(data => setAvailableFoods(data))
    }, [])
    return (
        <div>
            <Navbar2></Navbar2>
            <div className="max-w-7xl mx-auto flex justify-between items-center mt-10">
                <h1 className="text-2xl font-semibold"><span className="text-blue-800 font-bold">Available Foods :</span> {availableFoods.length}</h1>
                <div className="">
                <button className="flex items-center justify-center rounded-md focus:outline-none py-2 px-3 text-center border bg-[#6c7b8a] text-white font-semibold transition duration-300 tooltip" data-tip="Sort by expire-date">
                    <BiSortDown className="text-xl font-bold"></BiSortDown>
                </button>
                </div>
            </div>
             <div className="grid px-5 md:p-0 md:grid-cols-2 gap-5 max-w-7xl mx-auto mb-4 mt-5">
            {
                availableFoods.map(food => <AvailableFoodsCard key={food._id} food={food}></AvailableFoodsCard>)
            }
            </div>
        </div>
    );
};

export default AvailableFoods;