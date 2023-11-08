import { Link, useLoaderData } from "react-router-dom";
import SideDrawer from "../SideDrawer/SideDrawer";
import { MdProductionQuantityLimits, MdDateRange, MdLocationOn } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const FeaturedFoodDetails = () => {
    const allFoods = useLoaderData()
    const {_id, food_Img, food_name, donator_img, donator_name,food_quantity, location, expired_date, description} = allFoods;

    const {user} = useContext(AuthContext)


    const handleSubmit = (e) => {
        e.preventDefault();
        const aditionalNotes = e.target.aditionalNotes.value;
        const amount = e.target.amount.value;
        const userName = user.displayName;
        const userImage = user.photoURL;
        const userEmail = user.email;
        const userPhoneNumber = user.phoneNumber;



        const requestedData = {food_Img, food_name, donator_img, donator_name,food_quantity, location, expired_date, description, aditionalNotes, amount, userName, userEmail, userImage, userPhoneNumber};
        const toastId = toast.loading("Adding...")
        fetch('https://food-sharing-server-three.vercel.app/requested-food', {
            method : "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(requestedData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                toast.success('Food Added Successfully.', { id: toastId})
                }
        })
    }
    return (
        <div className="">
            <Helmet>
              <title>Food For Life | Featured Food Details</title>
          </Helmet>
            <div className="absolute px-10 mt-5 flex gap-5 items-center">
                <SideDrawer></SideDrawer>
                <img className="w-52" src="https://i.ibb.co/vwcfhFW/logo.png" alt="" />
            </div>
            <div className="grid md:grid-cols-2 gap-10">
                <div className="flex justify-center items-center mt-10">
                    <img className="w-full" src={food_Img} alt="" />
                </div>

                <div className="bg-gray-50 p-4 rounded-lg h-screen">
                    <div className="grid grid-cols-2 gap-5">
                        <div>
                        <div className="bg-blue-800 rounded-lg p-2 w-16 mb-2">
                        <h1 className="font-semibold text-center text-white">Food</h1>
                    </div>
                        <h1 className="text-gray-600"><span className="font-semibold text-base text-blue-950">Food Id :</span> {_id} </h1>

                    <h1 className="text-4xl font-bold mb-2">{food_name}</h1>
                    <div className="flex gap-3 items-center mb-4">
                        <h1 className="text-gray-700"><span className="font-semibold text-base text-blue-950">Donated By:</span> {donator_name}</h1>
                    <img className="w-10 rounded-full" src={donator_img} alt="" />
                    </div>
                        </div>

                        <div>
                            <img className="w-52" src="/src/assets/images/Available food/fish-rice.png" alt="" />
                        </div>
                    </div>

                    <div className="bg-gray-300 h-0.5 w-full mb-4"></div>

                    <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam a doloribus rem sunt voluptate perspiciatis quis tempora. Culpa id ut saepe ducimus corporis quae et fugiat quaerat dicta molestiae, eaque pariatur ab consequuntur consequatur dolor quos eligendi eos aliquam vero eum. Laboriosam debitis consequatur alias iure eaque ad, nesciunt sequi.</p>

                    <div className="bg-gray-300 h-0.5 w-full mb-4"></div>

                <div className="grid md:grid-cols-3 gap-10 mb-2">
                    <div>
                        <p className="font-semibold text-base text-blue-950 mb-2 flex items-center gap-2"><MdProductionQuantityLimits className="text-lg"></MdProductionQuantityLimits> Quantity</p>
                        <div className="border border-gray-400 rounded-md p-2 w-auto text-base text-gray-600">
                            {food_quantity}
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold text-base text-blue-950 mb-2 flex items-center gap-2"><MdLocationOn className="text-lg"></MdLocationOn>Pickup Location</p>
                        <div className="border border-gray-400 rounded-md p-2 w-auto text-base text-gray-600">
                            {location}
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold text-base text-blue-950 mb-2 flex items-center gap-2"><MdDateRange className="text-lg"></MdDateRange> Expire Date</p>
                        <div className="border border-gray-400 rounded-md p-2 w-auto text-base text-gray-600">
                            {expired_date}
                        </div>
                    </div>
                </div>

                <div className="flex gap-6 items-center">
                <div className="flex items-center justify-center rounded-md focus:outline-none h-12 px-5 text-center bg-blue-800 text-white font-semibold hover:bg-blue-600 transition duration-300">
                <div className="">
      <button
        className="hover:text-orange-400 hover:transition transform scale-100"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Have It
      </button>
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box max-w-6xl bg-slate-100">
        <div className="flex justify-between items-center flex-row-reverse">
          <form method="dialog">
            <button className="w-8 h-8 rounded-full border bg-white text-gray-600">
              ✕
            </button>
          </form>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
                <div className="flex justify-between items-center">
                    <div>
                    <h1 className="text-4xl font-bold mb-2 text-gray-500">Make a request for food!!</h1>
                    <p className="mb-7 text-gray-500">If you need food then you can make a request.</p>
                    </div>

                    <div>
                        <img className="w-32" src="/src/assets/images/Available food/fish-rice.png" alt="" />
                    </div>
                </div>
            

            {/* Input Fields */}
            <div className="grid md:grid-cols-2 gap-8 mb-2">
                    <div>
                        <h1 className="font-semibold mb-2 text-left text-gray-500">Food Name</h1>
                        <input type="text" name="name" placeholder={food_name} className="border border-blue-300 p-3 mb-4 rounded-lg w-full text-sm focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out" disabled/>
                    </div>
                    <div>
                        <h1 className="font-semibold mb-2 text-left text-gray-500">Food Image URL</h1>
                        <input type="text" name="chef" placeholder={food_Img} className="border border-blue-300 p-3 mb-4 rounded-lg w-full text-sm focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out" disabled/>
                    </div>
                </div>


            <div className="grid md:grid-cols-2 gap-8 mb-2">
                    <div>
                        <h1 className="font-semibold mb-2 text-left text-gray-500">Food Id</h1>
                        <input type="text" name="name" placeholder={_id} className="border border-blue-300 p-3 mb-4 rounded-lg w-full text-sm focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out" disabled/>
                    </div>
                    <div>
                        <h1 className="font-semibold mb-2 text-left text-gray-500">Food Donator Name</h1>
                        <input type="text" name="chef" placeholder={donator_name} className="border border-blue-300 p-3 mb-4 rounded-lg w-full text-sm focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out" disabled/>
                    </div>
                </div>


            <div className="grid md:grid-cols-2 gap-8 mb-2">
                    <div>
                        <h1 className="font-semibold mb-2 text-left text-gray-500">Food Donator Email</h1>
                        <input type="text" name="name" placeholder="bnb@gmail.com" className="border border-blue-300 p-3 mb-4 rounded-lg w-full text-sm focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out" disabled/>
                    </div>
                    <div>
                        <h1 className="font-semibold mb-2 text-left text-gray-500">User Email</h1>
                        <input type="text" name="chef" placeholder="rahul@gmail.com" className="border border-blue-300 p-3 mb-4 rounded-lg w-full text-sm focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out" disabled/>
                    </div>
                </div>


            <div className="grid md:grid-cols-2 gap-8 mb-2">
                    <div>
                        <h1 className="font-semibold mb-2 text-left text-gray-500">Request Date</h1>
                        <input type="text" name="name" placeholder={expired_date} className="border border-blue-300 p-3 mb-4 rounded-lg w-full text-sm focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out" disabled/>
                    </div>
                    <div>
                        <h1 className="font-semibold mb-2 text-left text-gray-500">Pickup Location</h1>
                        <input type="text" name="chef" placeholder={location} className="border border-blue-300 p-3 mb-4 rounded-lg w-full text-sm focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out" disabled/>
                    </div>
                </div>


            <div className="grid md:grid-cols-2 gap-8 mb-2">
                    <div>
                        <h1 className="font-semibold mb-2 text-left text-gray-500">Expire Date</h1>
                        <input type="text" name="name" placeholder={expired_date} className="border border-blue-300 p-3 mb-4 rounded-lg w-full text-sm focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out" disabled/>
                    </div>
                    <div>
                        <h1 className="font-semibold mb-2 text-left text-gray-500">Donation Amount</h1>
                        <input type="text" name="amount" placeholder="Enter Amount" className="border border-blue-300 p-3 mb-4 rounded-lg w-full text-sm focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out text-gray-700" />

                    </div>
                </div>


            <div className="grid md:grid-cols-2 gap-8 mb-2">
                    <div>
                        <h1 className="font-semibold mb-2 text-left text-gray-500">Aditional Notes</h1>
                        <input type="text" name="aditionalNotes" className="border border-blue-300 p-3 mb-4 rounded-lg w-full text-sm focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out text-gray-600" value={description}/>
                    </div>
                    <div>
                        <h1 className="font-semibold mb-2 text-left text-gray-500">Quantity</h1>
                        <input type="text" name="chef" placeholder={food_quantity} className="border border-blue-300 p-3 mb-4 rounded-lg w-full text-sm focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out" disabled/>
                    </div>
                </div>


            <button
      className="mt-6 block w-full select-none rounded-lg bg-blue-800 py-4 px-6 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      data-ripple-light="true"
    >
      Make A Request
    </button>
        </form>
        </div>
        </div>
      </dialog>
    </div>
            </div>

                <Link to={"/availableFoods"} className="flex items-center justify-center rounded-md focus:outline-none h-12 px-5 text-center border border-gray-600 hover:bg-blue-800 hover:text-white font-semibold  transition duration-300">
              Browse More
            </Link>
                </div>

                </div>
            </div>
            <Toaster
  position="top-center"
  reverseOrder={false}
/>
        </div>
    );
};

export default FeaturedFoodDetails;






