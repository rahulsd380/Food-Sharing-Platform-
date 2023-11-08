import { useEffect, useState } from "react";
import FeaturedFoodsCard from "./FeaturedFoodsCard";
import { Link } from "react-router-dom";
import { FaDiagramPredecessor } from "react-icons/fa6";


const FeaturedFoods = () => {
    const [foods, setFoods] = useState([]);

    useEffect( () => {
        fetch('https://food-sharing-server-three.vercel.app/featured-foods')
        .then(res => res.json())
        .then(data => setFoods(data))
    }, [])
    return (
        <div className="max-w-7xl mx-auto mt-10">
            <div className="flex items-center gap-5 mb-9">
                <FaDiagramPredecessor className="dark:text-blue-500 text-3xl font-bold text-blue-800"></FaDiagramPredecessor>
                <h1 className="text-4xl font-bold dark:text-blue-500">Featured Foods</h1>
            </div>
            <div className="grid px-5 md:p-0 md:grid-cols-2 gap-5 mb-4">
            {
                foods.map(food => <FeaturedFoodsCard key={food._id} food={food}></FeaturedFoodsCard>)
            }
            </div>


            <div className="flex justify-center max-w-7xl mx-auto mb-10">
            <Link to={"availableFoods"} className="dark:text-blue-500 dark:hover:text-gray-200 flex items-center justify-center rounded-md focus:outline-none py-2 px-3 text-center border border-blue-800 hover:bg-blue-600 hover:text-white font-semibold transition duration-300">
              View More Foods
            </Link>
            </div>
        </div>
    );
};

export default FeaturedFoods;