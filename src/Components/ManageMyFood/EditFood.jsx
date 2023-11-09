
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../Navbar/Navbar";
import { useLoaderData } from "react-router-dom";


const EditFood = () => {
    const food = useLoaderData()
    console.log(food);

    const {_id, amount, foodName, donarEmail, email, expireDate, foodImage, location, notes,quantity} = food;


const handleUpdate = (e) => {
    e.preventDefault();
    const foodName = e.target.foodName.value;
    const foodImage = e.target.foodImage.value;
    const quantity = e.target.quantity.value;
    const location = e.target.location.value;
    const expireDate = e.target.expireDate.value;
    const notes = e.target.notes.value;
    // const donarName = e.target.donarName.value;
    const donarEmail = e.target.donarEmail.value;
    const amount = e.target.amount.value;
    const reqDate = e.target.reqDate.value;

    const allData = { foodName, foodImage, quantity, location, expireDate, notes,amount,reqDate, donarEmail};

    const toastId = toast.loading("Updating...")
    

    fetch(`https://food-sharing-server-three.vercel.app/aditional-foods/${_id}`, {
        method : "PUT",
        headers : {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(allData)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
            toast.success('Food Updated Successfully.', { id: toastId})
            }
    })
}

    

    return (
        <div className="max-w-6xl mx-auto">
          <Navbar></Navbar>
            <div className=" py-10">
            <form onSubmit={handleUpdate} className="bg-blue-50 p-4">
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
                        <input type="text" name="foodName" defaultValue={foodName} className="border border-blue-300 p-3 mb-4 rounded-lg w-full text-sm focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"/>
                    </div>
                    <div>
                        <h1 className="font-semibold mb-2 text-left text-gray-500">Food Image URL</h1>
                        <input defaultValue={foodImage} type="text" name="foodImage"  className="border border-blue-300 p-3 mb-4 rounded-lg w-full text-sm focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"/>
                    </div>
                </div>


            <div className="grid md:grid-cols-2 gap-8 mb-2">
                    <div>
                        <h1 className="font-semibold mb-2 text-left text-gray-500">Food Id</h1>
                        <input type="text" name="id" className="border border-blue-300 p-3 mb-4 rounded-lg w-full text-sm focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"/>
                    </div>
                    <div>
                        <h1 className="font-semibold mb-2 text-left text-gray-500">Food Donator Name</h1>
                        <input type="text" name="donarName" className="border border-blue-300 p-3 mb-4 rounded-lg w-full text-sm focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"/>
                    </div>
                </div>


            <div className="grid md:grid-cols-2 gap-8 mb-2">
                    <div>
                        <h1 className="font-semibold mb-2 text-left text-gray-500">Food Donator Email</h1>
                        <input defaultValue={donarEmail} type="text" name="donarEmail" placeholder="bnb@gmail.com" className="border border-blue-300 p-3 mb-4 rounded-lg w-full text-sm focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"/>
                    </div>
                    <div>
                        <h1 className="font-semibold mb-2 text-left text-gray-500">User Email</h1>
                        <input defaultValue={email} type="text" name="chef" placeholder="rahul@gmail.com" className="border border-blue-300 p-3 mb-4 rounded-lg w-full text-sm focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"/>
                    </div>
                </div>


            <div className="grid md:grid-cols-2 gap-8 mb-2">
                    <div>
                        <h1 className="font-semibold mb-2 text-left text-gray-500">Request Date</h1>
                        <input type="text" name="reqDate"  className="border border-blue-300 p-3 mb-4 rounded-lg w-full text-sm focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"/>
                    </div>
                    <div>
                        <h1 className="font-semibold mb-2 text-left text-gray-500">Pickup Location</h1>
                        <input defaultValue={location} type="text" name="location" className="border border-blue-300 p-3 mb-4 rounded-lg w-full text-sm focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"/>
                    </div>
                </div>


            <div className="grid md:grid-cols-2 gap-8 mb-2">
                    <div>
                        <h1 className="font-semibold mb-2 text-left text-gray-500">Expire Date</h1>
                        <input defaultValue={expireDate} type="text" name="expireDate"  className="border border-blue-300 p-3 mb-4 rounded-lg w-full text-sm focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"/>
                    </div>
                    <div>
                        <h1 className="font-semibold mb-2 text-left text-gray-500">Donation Amount</h1>
                        <input defaultValue={amount} type="text" name="amount" placeholder="Enter Amount" className="border border-blue-300 p-3 mb-4 rounded-lg w-full text-sm focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out text-gray-700" />

                    </div>
                </div>


            <div className="grid md:grid-cols-2 gap-8 mb-2">
                    <div>
                        <h1 className="font-semibold mb-2 text-left text-gray-500">Aditional Notes</h1>
                        <input defaultValue={notes} type="text" name="notes" className="border border-blue-300 p-3 mb-4 rounded-lg w-full text-sm focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out text-gray-600" />
                    </div>
                    <div>
                        <h1 className="font-semibold mb-2 text-left text-gray-500">Quantity</h1>
                        <input defaultValue={quantity} type="text" name="quantity" className="border border-blue-300 p-3 mb-4 rounded-lg w-full text-sm focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"/>
                    </div>
                </div>


            <button
      className="mt-6 block w-full select-none rounded-lg bg-blue-800 py-4 px-6 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none:pointer-events-none:opacity-50:shadow-none"
      data-ripple-light="true"
    >
     Update Info
    </button>
        </form>
        
            

            </div>
            <Toaster
  position="top-center"
  reverseOrder={false}
/>
        </div>
    );
};

export default EditFood;