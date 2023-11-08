import { MdProductionQuantityLimits, MdDateRange, MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const AditionalFoodCard = ({food}) => {
    const {_id, food_Img, food_name, donator_img, donator_name,food_quantity, location, expired_date, description} = food;
    console.log(food);
    return (
        <div className="">
            <div className="flex gap-5 mb-4 mr-4 bg-gray-50 border border-blue-300 transition duration-300 cursor-pointer rounded-md w-auto p-5">
                <div className="bg-blue-100 p-2 rounded-md flex items-center">
                <img className="w-52" src={food_Img} alt="" />
                </div>
                <div>
                <h1 className="font-bold text-2xl text-blue-800 mb-2">{food_name}</h1>
                <p className="text-gray-600 mb-3">{description}</p>
                <div className="bg-blue-800 h-0.5 w-full mb-3"></div>
                <div className="flex gap-3 items-center mb-3">
                    <img className="w-10 rounded-full" src={donator_img} alt="" />
                    <p className="font-semibold">{donator_name}</p>
                </div>
                <div className="flex justify-between items-center mb-3">
                <p className="flex items-center gap-3"><MdProductionQuantityLimits className="text-2xl font-bold text-blue-800"></MdProductionQuantityLimits> Quantity : {food_quantity}</p>
                </div>
                <p className="flex items-center gap-3 mb-2"><MdDateRange className="text-2xl font-bold text-blue-800"></MdDateRange> Expires In : {expired_date}</p>

                <p className="flex gap-3 items-center mb-3"><MdLocationOn className="text-2xl font-bold text-blue-800"></MdLocationOn>{location}</p>

                <Link to={`/food/${_id}`} className="flex items-center justify-center rounded-md focus:outline-none py-2 px-3 text-center bg-blue-800 text-white font-semibold hover:bg-blue-600 transition duration-300">
              View Details
            </Link>
                </div>
            </div>
        </div>
    );
};

export default AditionalFoodCard;