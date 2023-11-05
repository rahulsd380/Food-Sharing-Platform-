import { useEffect, useState } from "react";
import FeaturedFoodsCard from "./FeaturedFoodsCard";
import { Link } from "react-router-dom";
const FeaturedFoods = () => {
    const [foods, setFoods] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/featured-foods')
        .then(res => res.json())
        .then(data => setFoods(data))
    }, [])
    return (
        <div>
            <div className="grid px-5 md:p-0 md:grid-cols-2 gap-5 max-w-7xl mx-auto mb-4 mt-10">
            {
                foods.map(food => <FeaturedFoodsCard key={food._id} food={food}></FeaturedFoodsCard>)
            }
            </div>


            <div className="flex justify-center max-w-7xl mx-auto mb-10">
            <Link to={"availableFoods"} className="flex items-center justify-center rounded-md focus:outline-none py-2 px-3 text-center border border-blue-800 hover:bg-blue-600 hover:text-white font-semibold transition duration-300">
              View More Foods
            </Link>
            </div>
        </div>
    );
};

export default FeaturedFoods;