import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGooglePlusG , FaCcPaypal, FaCcStripe, FaCcVisa, FaCcApplePay, FaCcMastercard, FaCcAmazonPay} from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import { AiFillApple } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-700">
      <footer className="footer p-10 text-base-content">
        <aside>
          <img className="w-56" src="https://i.ibb.co/Q8DS1Xf/food-for-life-logo.png" alt="" />
          <p className="text-white font-semibold">
            <span className="text-xl">Food For Life</span>
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav className="text-white">
          <header className="footer-title">About</header>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">All Foods</a>
          <a className="link link-hover">Add Food</a>
          <a className="link link-hover">Volunteers</a>
        </nav>
        <nav className="text-white">
          <header className="footer-title">Company</header>
          <a className="link link-hover">Why Food For Life</a>
          <a className="link link-hover">Contracts</a>
          <a className="link link-hover">Team</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="text-white">
          <header className="footer-title">Contact Info</header>
          <a className="link link-hover">01777777777777</a>
          <a className="link link-hover">foodforlife@gmail.com</a>
          <a className="link link-hover">Cumilla, Bangladesh</a>
        </nav>
        <nav className="text-white">
          <header className="footer-title">Newsletter</header>
          <a className="link link-hover">Sign up for our newsletter</a>
          <input
            className="border border-gray-500 bg-gray-500 p-2 mb-2 rounded-md w-full text-sm focus:outline-none focus:border-orange-600 transition duration-300 ease-in-out hover:border-orange-200"
            type="text"
            name="password"
            placeholder="Enter your email"
          />
          <button className="bg-blue-600 font-semibold p-2 rounded-md text-white w-full mb-3">
            SUBSCRIBE
          </button>
        </nav>
      </footer>
      <hr />
      <br />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">
            <div className="flex gap-6 justify-center mt-4">
                        <button className="w-9 h-9 rounded-full bg-blue-700 text-white flex justify-center items-center transform duration-300 hover:bg-blue-500 "><FaFacebookF></FaFacebookF></button>
                        <button className="w-9 h-9 rounded-full bg-blue-500 text-white flex justify-center items-center transform duration-300 hover:bg-blue-700 "><FaTwitter></FaTwitter></button>
                        <button className="w-9 h-9 rounded-full bg-blue-800 text-white flex justify-center items-center transform duration-300 hover:bg-blue-600 "><FaLinkedinIn></FaLinkedinIn></button>
                        <button className="w-9 h-9 rounded-full bg-red-500 text-white flex justify-center items-center transform duration-300 hover:bg-red-700 "><FaGooglePlusG></FaGooglePlusG></button>
                    </div>


                    <div className="flex justify-center gap-5">
                      <Link className="bg-gray-500 p-2 rounded-md flex items-center gap-2 text-white">
                          <BiLogoPlayStore className="text-4xl"></BiLogoPlayStore>
                          <div>
                          <p className="text-xs">Download It From</p>
                          <h1 className="font-bold text-xs">Play Store</h1>
                          </div>
                      </Link>
                      <Link className="bg-gray-500 p-2 rounded-md flex items-center gap-2 text-white">
                          <AiFillApple className="text-4xl"></AiFillApple>
                          <div>
                          <p className="text-xs">Download It From</p>
                          <h1 className="font-bold text-xs">App Store</h1>
                          </div>
                      </Link>
                    </div>




                    <div className="flex gap-3 justify-center items-center text-white text-5xl">
                          <Link><FaCcPaypal></FaCcPaypal></Link>
                          <Link><FaCcStripe></FaCcStripe></Link>
                          <Link><FaCcVisa></FaCcVisa></Link>
                          <Link><FaCcApplePay></FaCcApplePay></Link>
                          <Link><FaCcMastercard></FaCcMastercard></Link>
                          <Link><FaCcAmazonPay></FaCcAmazonPay></Link>
                    </div>
      </div>
      <br />
      <hr />
      <br />
      <p className="text-gray-400 text-sm text-center font-semibold">Powered By <span className="text-blue-600">Rahul Sutradhar</span> Food For Life © 2023</p>
      <br />
    </footer>
  );
};

export default Footer;