import { useContext, useState } from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { CgProfile, CgLogOut, CgLogIn } from "react-icons/cg";
import { AiOutlineUserAdd, AiFillHome, AiOutlineAppstoreAdd } from "react-icons/ai";
import { MdEventAvailable, MdManageHistory } from "react-icons/md";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { BsFillSunFill, BsMoonStarsFill } from 'react-icons/bs';

const Drawer = ({ isOpen, toggleDrawer }) => {
  const {user, logout} = useContext(AuthContext);

  const handleLogout = () => {

    logout()
    .then(result => {
      console.log(result.user);
    })
    .then(error => {
      console.log(error);
    })
}
  return (
    <div className={`rounded-r-3xl fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0 ' : ' -translate-x-full '} transition-transform duration-300 ease-in-out z-50 `}>

      <div className='p-4 flex justify-between border-b bg-gray-50 shadow-sm rounded-t-3xl'>
      <img className="w-24" src="/src/assets/images/food-for-life-logo.png" alt="" />
      {/* <button>
            <BsFillSunFill className="text-orange-600 dark:text-white text-3xl"></BsFillSunFill>
          </button> */}


          <button>
            <BsMoonStarsFill className="text-blue-800 text-2xl"></BsMoonStarsFill>
          </button>
      </div>
      <div className="p-4 flex flex-col mt-6">
        {
          user? <Link className='mb-2 flex gap-5 items-center focus:outline-none font-semibold hover:bg-gray-200 transition duration-300 p-3 rounded-md' to={"/signin"}><CgProfile className="text-2xl"></CgProfile> Profile</Link> : ''
        }
        <Link className='mb-2 flex gap-5 items-center focus:outline-none font-semibold hover:bg-gray-200 transition duration-300 p-3 rounded-md' to={"/"}><AiFillHome className="text-2xl"></AiFillHome> Home</Link>
        <Link className='mb-2 flex items-center focus:outline-none font-semibold hover:bg-gray-200 transition duration-300 p-3 rounded-md gap-5' to={"/signin"}>
<MdEventAvailable className="text-2xl"></MdEventAvailable> Available Foods</Link>
        <Link className='mb-2 flex items-center focus:outline-none font-semibold hover:bg-gray-200 transition duration-300 p-3 rounded-md gap-5' to={"/signin"}>
<AiOutlineAppstoreAdd className="text-2xl"></AiOutlineAppstoreAdd> Add Food</Link>
        <Link className='mb-2 flex items-center focus:outline-none font-semibold hover:bg-gray-200 transition duration-300 p-3 rounded-md gap-5' to={"/signin"}>
<MdManageHistory className="text-2xl"></MdManageHistory> Manage My Food</Link>
        <Link className='mb-2 flex items-center focus:outline-none font-semibold hover:bg-gray-200 transition duration-300 p-3 rounded-md gap-5' to={"/signin"}>
<VscGitPullRequestGoToChanges className="text-2xl"></VscGitPullRequestGoToChanges> My Food Request</Link>

{
                user ? <div className='flex flex-col'>
                
                 <Link onClick={() => {
                handleLogout(); // Call the handleLogout function when Logout is clicked
              }} className=' flex gap-5 items-center focus:outline-none font-semibold hover:bg-gray-200 transition duration-300 p-3 rounded-md' to={"/signup"}><CgLogOut className="text-2xl"></CgLogOut> Log Out</Link> 
            </div>
                :
                <div className='flex flex-col'>
    <Link className='mb-2 flex gap-5 items-center focus:outline-none font-semibold hover:bg-gray-200 transition duration-300 p-3 rounded-md' to={"/login"}><CgLogIn className="text-2xl"></CgLogIn> Login</Link>
     <Link className=' flex gap-5 items-center focus:outline-none font-semibold hover:bg-gray-200 transition duration-300 p-3 rounded-md' to={"/signup"}><AiOutlineUserAdd className="text-2xl"></AiOutlineUserAdd> Sign Up</Link>    
</div>
              }
        <button onClick={toggleDrawer} className="bg-blue-800 text-white p-2 rounded-lg mt-4">
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
      <BiMenuAltLeft className="hover:text-blue-800 transform duration-300 text-4xl"></BiMenuAltLeft>
      </button>
      <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      {/* Your content goes here */}
    </div>
  );
};

export default SideDrawer;
