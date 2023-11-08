import { useContext, useEffect, useState } from "react";
import FoodRequestCard from "./FoodRequestCard";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Navbar2 from "../Navbar/Navbar2";
import { FaDiagramPredecessor } from "react-icons/fa6";
import Swal from "sweetalert2";


const FoodRequest = () => {
    const [manageFood, setManageFood] = useState([]);

    const {user} = useContext(AuthContext);
    const  url = `https://food-sharing-server-three.vercel.app/requested-food?email=${user.email}`
    console.log(manageFood);

    useEffect( () => {
        fetch(url)
        .then(res => res.json())
        .then(data => setManageFood(data))
    }, [url])





    const handleDelete = id => {
        fetch(`https://food-sharing-server-three.vercel.app/requested-food/${id}`, {
            method : 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            Swal.fire({
                title: "Are you sure want to cancel request?",
                text: "You won't be able to restore this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((data) => {
                if (data.isConfirmed) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                  const remaining = manageFood.filter(booking => booking._id !== id)
                    setManageFood(remaining)
                }
              });
        })
    }



    return (
        <div className="py-4 max-w-6xl mx-auto">
            <Navbar2></Navbar2>
            <div className="flex items-center gap-5 mt-6">
                <FaDiagramPredecessor className="text-2xl font-bold text-blue-800"></FaDiagramPredecessor>
                <h1 className="text-3xl font-bold">Requested Foods</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-5">
            {
                manageFood.map(food => <FoodRequestCard key={food._id} food={food} handleDelete={handleDelete}></FoodRequestCard>)
            }
        </div>
        </div>
    );
};

export default FoodRequest;