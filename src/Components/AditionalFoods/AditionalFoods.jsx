import { useContext, useEffect, useState } from "react";
import { BiSortDown } from "react-icons/bi";
import AditionalFoodCard from "./AditionalFoodCard";
import { AuthContext } from "../AuthProvider/AuthProvider";
import NewNavbar from "../NewNavbar/NewNavbar";


const AditionalFoods = () => {
    const [aditionalFoods, setAditionalFoods] = useState([]);
    const {user} = useContext(AuthContext);
    const  url = `https://food-sharing-server-three.vercel.app/aditional-foods?email=${user.email}`

    useEffect( () => {
        fetch(url)
        .then(res => res.json())
        .then(data => setAditionalFoods(data))
    }, [url])
    return (
        <div>
            <NewNavbar></NewNavbar>
            <div className="max-w-7xl mx-auto flex justify-between items-center mt-10">
                <h1 className="text-2xl font-semibold"><span className="text-blue-800 font-bold">Available Foods :</span> {aditionalFoods.length}</h1>
                <div className="">
                <button className="flex items-center justify-center rounded-md focus:outline-none py-2 px-3 text-center border bg-[#6c7b8a] text-white font-semibold transition duration-300 tooltip" data-tip="Sort by expire-date">
                    <BiSortDown className="text-xl font-bold"></BiSortDown>
                </button>
                </div>
            </div>
             <div className="grid px-5 md:p-0 md:grid-cols-2 gap-5 max-w-7xl mx-auto mb-4 mt-5">
            {
                aditionalFoods.map(food => <AditionalFoodCard key={food._id} food={food}></AditionalFoodCard>)
            }
            </div>
        </div>
    );
};

export default AditionalFoods;