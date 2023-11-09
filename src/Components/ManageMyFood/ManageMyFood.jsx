import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import ManageMyFoodCard from "./ManageMyFoodCard";
import Swal from "sweetalert2";
import { GrSettingsOption } from "react-icons/gr";
import Navbar2 from "../Navbar/Navbar2";
import NewNavbar from "../NewNavbar/NewNavbar";

const ManageMyFood = () => {
    const [manageFood, setManageFood] = useState([]);
    const {user} = useContext(AuthContext);
    const  url = `https://food-sharing-server-three.vercel.app/aditional-foods?email=${user.email}`
    console.log(manageFood);

    useEffect( () => {
        fetch(url)
        .then(res => res.json())
        .then(data => setManageFood(data))
    }, [url])



    const handleDelete = id => {
        fetch(`https://food-sharing-server-three.vercel.app/aditional-foods/${id}`, {
            method : 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
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
       <div>
             <NewNavbar></NewNavbar>
        <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-5 mt-6">
                <GrSettingsOption className="text-2xl font-bold text-blue-800"></GrSettingsOption>
                <h1 className="text-3xl font-bold">Manage Your Foods</h1>
            </div>
            <div className="py-10">
            {
                manageFood.map(food => <ManageMyFoodCard key={food._id} food={food} handleDelete={handleDelete} ></ManageMyFoodCard>)
            }
        </div>
        </div>
       </div>
        
    );
};

export default ManageMyFood;