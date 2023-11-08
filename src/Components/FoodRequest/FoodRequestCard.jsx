import { useState } from "react";
import { RiDeleteBin4Fill } from "react-icons/ri";

const FoodRequestCard = ({food, handleDelete}) => {
    const [isAvailable, setIsAvailable] = useState(true);

    const {_id, food_Img, food_name, donator_img, donator_name, food_quantity, location, expired_date, description , aditionalNotes, amount, userName, userImage, userEmail, userPhoneNumber} = food;


    const toggleAvailability = () => {
      setIsAvailable(!isAvailable);
    };
    return (
        <div>
            <div className="bg-blue-50 border p-5 rounded-lg">
                <div className="flex justify-center">
                    <img className="w-4/6" src={food_Img} alt="" />
                </div>
                <h1 className="text-2xl font-bold mb-2">{food_name}</h1>
                <p className="text-gray-600 mb-2">{description}</p>

                <div className="flex gap-3 justify-between items-center mb-3">
                    <div className="flex gap-2">
                    <p className="font-semibold">Donated By: </p>
                    <p className="text-green-600">{donator_name}</p>
                    </div>
                    <div>
                    <img className="w-10 rounded-full" src={donator_img} alt="" />
                    </div>
                </div>


                <p className="text-gray-600 mb-2"><span className="font-semibold">Pickup Location :</span> {location}</p>
                <p className="text-gray-600 mb-2"><span className="font-semibold">Request Date :</span> 10 Oct 2023</p>
                <p className="text-gray-600 mb-2"><span className="font-semibold">Expire Date :</span> {expired_date}</p>
                
                
                <p className="text-gray-600 mb-2"><span className="font-semibold">Donation Amount :</span> $ {amount}</p>
                <hr />

                <div className="flex justify-between mt-2">

                <button
        onClick={toggleAvailability}
        className=""
      >
        {isAvailable ? <div className="bg-white border rounded-md px-2 py-1">
                        <p className="text-sm font-semibold text-green-600">Available</p>
                    </div> : <div className="bg-white border rounded-md px-2 py-1">
                        <p className="text-sm font-semibold text-red-600">Booked</p>
                    </div>}
      </button>


                    

                    <button onClick={() => handleDelete(_id)} className="flex items-center gap-2 bg-white border rounded-md px-2 py-1">
                        <RiDeleteBin4Fill className="text-red-600"></RiDeleteBin4Fill>
                        <p className="text-base">Cancel request</p>
                    </button>
                </div>


                

            </div>
        </div>
    );
};

export default FoodRequestCard;