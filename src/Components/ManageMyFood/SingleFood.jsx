import { useState } from "react";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { useLoaderData } from "react-router-dom";


const SingleFood = () => {
    const foods = useLoaderData();
    const [isAvailable, setIsAvailable] = useState(true);
    const { location, foodName, foodImage,quantity, expireDate, notes, donarName, donarImage, donarEmail} = foods;
    console.log(location, foodName);

    const toggleAvailability = () => {
        setIsAvailable(!isAvailable);
      };

    return (
        <div>
            <div className="bg-blue-50 border p-5 rounded-lg">
                <div className="flex justify-center">
                    <img className="w-4/6" src={foodImage} alt="" />
                </div>
                <h1 className="text-2xl font-bold mb-2">{foodName}</h1>
                <p className="text-gray-600 mb-2">{notes}</p>

                <div className="flex gap-3 justify-between items-center mb-3">
                    <div className="flex gap-2">
                    <p className="font-semibold">Donated By: </p>
                    <p className="text-green-600">{donarName}</p>
                    </div>
                    <div>
                    <img className="w-10 rounded-full" src={donarImage} alt="" />
                    </div>
                </div>


                <p className="text-gray-600 mb-2"><span className="font-semibold">Pickup Location :</span> {location}</p>
                <p className="text-gray-600 mb-2"><span className="font-semibold">DOnar Email :</span> {donarEmail}</p>
                <p className="text-gray-600 mb-2"><span className="font-semibold">Expire Date :</span> {expireDate}</p>
                
                
                <p className="text-gray-600 mb-2"><span className="font-semibold">Quantity :</span> $ {quantity}</p>
                <hr />

                <div className="flex justify-between mt-2">

                <button
        onClick={toggleAvailability}
        className=""
      >
        {isAvailable ? <div className="bg-white border rounded-md px-2 py-1">
                        <p className="text-sm font-semibold text-green-600">Available</p>
                    </div> : <div className="bg-white border rounded-md px-2 py-1">
                        <p className="text-sm font-semibold text-red-600">Delivered</p>
                    </div>}
      </button>


                    

                    <button className="flex items-center gap-2 bg-white border rounded-md px-2 py-1">
                        <RiDeleteBin4Fill className="text-red-600"></RiDeleteBin4Fill>
                        <p className="text-base">Cancel request</p>
                    </button>
                </div>


                

            </div>
        </div>
    );
};

export default SingleFood;