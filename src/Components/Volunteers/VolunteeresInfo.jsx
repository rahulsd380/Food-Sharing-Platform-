import { useEffect, useState } from "react";
import VolunteersInfoCard from "./VolunteersInfoCard";
import Navbar from "../Navbar/Navbar";
import NewNavbar from "../NewNavbar/NewNavbar";


const VolunteeresInfo = () => {
    const [volunteers, setVolunteers] = useState([]);
    
    

    useEffect(() => { 
        fetch('https://food-sharing-server-three.vercel.app/volunteers')
          .then(res => res.json())
          .then(data => {
            setVolunteers(data);
          });
      }, []);
    return (
        <div>
            <NewNavbar></NewNavbar>
           <div className="max-w-6xl mx-auto">
           <div className="bg-blue-900 py-2 mt-10 mb-5 rounded-3xl">
                <h1 className="text-3xl text-white font-bold text-center">Our Volunteers</h1>
            </div>

            <div className="bg-blue-50 flex justify-around mb-5 rounded-md">
                <p className="font-bold max-w-2xl">Photo</p>
                <p className="font-bold max-w-2xl">Name</p>
                <p className="font-bold">Phone</p>
                <p className="font-bold">Location</p>
                <p className="font-bold">Opertions</p>
            </div>


            <div>
            {
                volunteers.map(volunteer => <VolunteersInfoCard key={volunteer._id} volunteer={volunteer}></VolunteersInfoCard>)
            }
            </div>

           </div>
        </div>
    );
};

export default VolunteeresInfo;