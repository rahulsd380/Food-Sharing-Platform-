import { useContext, useEffect, useState } from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { CgProfile, CgLogOut, CgLogIn } from "react-icons/cg";
import { AiOutlineUserAdd, AiFillHome, AiOutlineAppstoreAdd } from "react-icons/ai";
import { MdEventAvailable, MdManageHistory } from "react-icons/md";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { BsFillSunFill, BsMoonStarsFill, BsSearch } from 'react-icons/bs';
import { FaPeopleGroup } from "react-icons/fa6";

const Drawer = ({ isOpen, toggleDrawer }) => {
  const {user, logout} = useContext(AuthContext);
  const [mode, setMode] = useState("light");

  const handleLogout = () => {

    logout()
    .then(result => {
      console.log(result.user);
    })
    .then(error => {
      console.log(error);
    })
}




function changeTheme() {
  const html = document.documentElement

  if(mode == "light") {
    html.classList.remove("light")
    html.classList.add("dark")
    setMode("dark")
    localStorage.setItem("mode", "dark")
  }
  else{
    html.classList.remove("dark")
    html.classList.add("light")
    setMode("light")
    localStorage.setItem("mode", "light")
  }
}

useEffect( () => {
  const currentMode = localStorage.getItem("mode") || "light"
  setMode(currentMode)
  const html = document.documentElement
  html.classList.add(currentMode)
}, [])
  return (
    <div className={`rounded-r-3xl fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform dark:bg-blue-950 ${isOpen ? 'translate-x-0 ' : ' -translate-x-full '} transition-transform duration-300 ease-in-out z-50 `}>

      <div className=' dark:bg-blue-900 p-4 flex justify-between border-b bg-gray-50 shadow-sm rounded-t-3xl'>
      <img className="w-24" src="/src/assets/images/food-for-life-logo.png" alt="" />
      {/* <button>
            <BsFillSunFill className="text-orange-600 dark:text-white text-3xl"></BsFillSunFill>
          </button> */}


          <button onClick={changeTheme}>
            <BsMoonStarsFill className="text-blue-800 text-2xl dark:text-yellow-300"></BsMoonStarsFill>
          </button>
      </div>

      <div className='px-3 mt-5 md:hidden'>
      <div className="flex">
                    <input className="rounded-l-md border-t-2 border-b-2 border-l-2 bg-white h-12 px-5 text-sm focus:outline-none focus:border-indigo-500 transition duration-300 ease-in-out hover:border-indigo-300 w-full" type="text"  placeholder="Find Categories" />
                    <button className="dark:bg-blue-500 rounded-r-md focus:outline-none h-12 px-4 bg-blue-800 text-white font-semibold hover:bg-blue-600 transition duration-300">
                        <BsSearch></BsSearch>
                    </button>
                </div>
      </div>
      <div className="p-4 flex flex-col">
        {
          user? <Link className='mb-2 flex gap-5 items-center focus:outline-none font-semibold hover:bg-gray-200 transition duration-300 p-3 rounded-md dark:text-gray-50' to={"/signin"}><CgProfile className="text-2xl"></CgProfile> Profile</Link> : ''
        }
        <Link className=' dark:text-gray-50 mb-2 flex gap-5 items-center focus:outline-none font-semibold hover:bg-gray-200 transition duration-300 p-3 rounded-md' to={"/"}><AiFillHome className="text-2xl"></AiFillHome> Home</Link>
        <Link className=' dark:text-gray-50 mb-2 flex items-center focus:outline-none font-semibold hover:bg-gray-200 transition duration-300 p-3 rounded-md gap-5' to={"/availableFoods"}>
<MdEventAvailable className="text-2xl"></MdEventAvailable> Available Foods</Link>
        <Link className=' dark:text-gray-50 mb-2 flex items-center focus:outline-none font-semibold hover:bg-gray-200 transition duration-300 p-3 rounded-md gap-5' to={"/addFood"}>
<AiOutlineAppstoreAdd className="text-2xl"></AiOutlineAppstoreAdd> Add Food</Link>
        <Link className=' dark:text-gray-50 mb-2 flex items-center focus:outline-none font-semibold hover:bg-gray-200 transition duration-300 p-3 rounded-md gap-5' to={"/manageFood"}>
<MdManageHistory className="text-2xl"></MdManageHistory> Manage My Food</Link>
        <Link className=' dark:text-gray-50 mb-2 flex items-center focus:outline-none font-semibold hover:bg-gray-200 transition duration-300 p-3 rounded-md gap-5' to={"/foodRequest"}>
<VscGitPullRequestGoToChanges className="text-2xl"></VscGitPullRequestGoToChanges> My Food Request</Link>
        <Link className=' dark:text-gray-50 mb-2 flex items-center focus:outline-none font-semibold hover:bg-gray-200 transition duration-300 p-3 rounded-md gap-5' to={"/volunteerInfo"}>
<FaPeopleGroup className="text-2xl"></FaPeopleGroup>Meet Our Volunteere</Link>

{
                user ? <div className='flex flex-col'>
                
                 <Link onClick={() => {
                handleLogout(); // Call the handleLogout function when Logout is clicked
              }} className=' dark:text-gray-50 flex gap-5 items-center focus:outline-none font-semibold hover:bg-gray-200 transition duration-300 p-3 rounded-md' to={"/signup"}><CgLogOut className="text-2xl"></CgLogOut> Log Out</Link> 
            </div>
                :
                <div className='flex flex-col'>
    <Link className=' dark:text-gray-50 mb-2 flex gap-5 items-center focus:outline-none font-semibold hover:bg-gray-200 transition duration-300 p-3 rounded-md' to={"/login"}><CgLogIn className="text-2xl"></CgLogIn> Login</Link>
     <Link className=' dark:text-gray-50 flex gap-5 items-center focus:outline-none font-semibold hover:bg-gray-200 transition duration-300 p-3 rounded-md' to={"/signup"}><AiOutlineUserAdd className="text-2xl"></AiOutlineUserAdd> Sign Up</Link>    
</div>
              }
        <button onClick={toggleDrawer} className=" dark:text-blue-200 bg-blue-800 text-white p-2 rounded-lg">
          Close
        </button>
      </div>

      
    </div>
  );
};

const SideDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleDrawer} className="">
      <BiMenuAltLeft className="dark:text-blue-500 hover:text-blue-800 transform duration-300 text-4xl"></BiMenuAltLeft>
      </button>
      <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      {/* Your content goes here */}
    </div>
  );
};

export default SideDrawer;
