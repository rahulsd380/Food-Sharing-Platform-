import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Slider from "react-slick";
import { Component } from "react";
import { FaAngleLeft, FaAngleRight   } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default class PreviousNextMethods extends Component {
    constructor(props) {
      super(props);
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
    }
    next() {
      this.slider.slickNext();
    }
    previous() {
      this.slider.slickPrev();
    }
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
    return (
      <div id="volunteerSection" className="max-w-6xl mx-auto py-10">
         <div>
                <h1 className="text-4xl font-bold text-center mb-3 dark:text-blue-500">Meet Our Honourable Volunteers</h1>
                <p className="text-center mb-6 dark:text-gray-400">The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
        <Slider ref={c => (this.slider = c)} {...settings}>
          <div key={1}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* card 1 */}
            <div className="bg-blue-50 border rounded-lg p-4 hover:border-blue-800 transition duration-300 cursor-pointer">
                <div>
                    <div className="relative flex justify-center items-center rounded-lg p-3">
                        <img className="h-44" src="/src/assets/images/volunteers/1.png" alt="" />
                    </div>
                    <h1 className="text-xl font-bold mb-3 text-center">Car Engine Plug</h1>
                    <p className="font-semibold text-gray-500 text-center">Engine Expert</p>

                    <div className="flex gap-6 justify-center mt-4">
                        <button className="w-9 h-9 rounded-full bg-blue-700 text-white flex justify-center items-center transform duration-300 hover:bg-blue-500 "><FaFacebookF></FaFacebookF></button>
                        <button className="w-9 h-9 rounded-full bg-blue-500 text-white flex justify-center items-center transform duration-300 hover:bg-blue-700 "><FaTwitter></FaTwitter></button>
                        <button className="w-9 h-9 rounded-full bg-blue-800 text-white flex justify-center items-center transform duration-300 hover:bg-blue-600 "><FaLinkedinIn></FaLinkedinIn></button>
                        <button className="w-9 h-9 rounded-full bg-red-500 text-white flex justify-center items-center transform duration-300 hover:bg-red-700 "><FaGooglePlusG></FaGooglePlusG></button>
                    </div>
                </div>
            </div>


{/* card 1 */}
<div className="bg-white border rounded-lg p-4 hover:border-blue-800 transition duration-300 cursor-pointer">
                <div>
                    <div className="relative flex justify-center items-center rounded-lg p-3">
                    <img className="h-44 rounded-lg" src="/src/assets/images/volunteers/2.png" alt="" />
                    </div>
                    <h1 className="text-xl font-bold mb-3 text-center">Car Engine Plug</h1>
                    <p className="font-semibold text-gray-500 text-center">Engine Expert</p>

                    <div className="flex gap-6 justify-center mt-4">
                        <button className="w-9 h-9 rounded-full bg-blue-700 text-white flex justify-center items-center transform duration-300 hover:bg-blue-500 "><FaFacebookF></FaFacebookF></button>
                        <button className="w-9 h-9 rounded-full bg-blue-500 text-white flex justify-center items-center transform duration-300 hover:bg-blue-700 "><FaTwitter></FaTwitter></button>
                        <button className="w-9 h-9 rounded-full bg-blue-800 text-white flex justify-center items-center transform duration-300 hover:bg-blue-600 "><FaLinkedinIn></FaLinkedinIn></button>
                        <button className="w-9 h-9 rounded-full bg-red-500 text-white flex justify-center items-center transform duration-300 hover:bg-red-700 "><FaGooglePlusG></FaGooglePlusG></button>
                    </div>
                </div>
            </div>


          {/* card 1 */}
          <div className="bg-white border rounded-lg p-4 hover:border-blue-800 transition duration-300 cursor-pointer">
                <div>
                    <div className="relative flex justify-center items-center rounded-lg p-3">
                    <img className=" h-44 rounded-lg" src="/src/assets/images/volunteers/3.png" alt="" />
                    </div>
                    <h1 className="text-xl font-bold mb-3 text-center">Car Engine Plug</h1>
                    <p className="font-semibold text-gray-500 text-center">Engine Expert</p>

                    <div className="flex gap-6 justify-center mt-4">
                        <button className="w-9 h-9 rounded-full bg-blue-700 text-white flex justify-center items-center transform duration-300 hover:bg-blue-500 "><FaFacebookF></FaFacebookF></button>
                        <button className="w-9 h-9 rounded-full bg-blue-500 text-white flex justify-center items-center transform duration-300 hover:bg-blue-700 "><FaTwitter></FaTwitter></button>
                        <button className="w-9 h-9 rounded-full bg-blue-800 text-white flex justify-center items-center transform duration-300 hover:bg-blue-600 "><FaLinkedinIn></FaLinkedinIn></button>
                        <button className="w-9 h-9 rounded-full bg-red-500 text-white flex justify-center items-center transform duration-300 hover:bg-red-700 "><FaGooglePlusG></FaGooglePlusG></button>
                    </div>
                </div>
            </div>
                </div>
          </div>

          <div key={2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* card 1 */}
<div className="bg-white border rounded-lg p-4 hover:border-blue-800 transition duration-300 cursor-pointer">
                <div>
                    <div className="relative flex justify-center items-center rounded-lg p-3">
                        <img className="mb-5 h-44 rounded-lg" src="https://i.ibb.co/wcqcdZ8/1.png" alt="" />
                    </div>
                    <h1 className="text-xl font-bold mb-3 text-center">Car Engine Plug</h1>
                    <p className="font-semibold text-gray-500 text-center">Engine Expert</p>

                    <div className="flex gap-6 justify-center mt-4">
                        <button className="w-9 h-9 rounded-full bg-blue-700 text-white flex justify-center items-center transform duration-300 hover:bg-blue-500 "><FaFacebookF></FaFacebookF></button>
                        <button className="w-9 h-9 rounded-full bg-blue-500 text-white flex justify-center items-center transform duration-300 hover:bg-blue-700 "><FaTwitter></FaTwitter></button>
                        <button className="w-9 h-9 rounded-full bg-blue-800 text-white flex justify-center items-center transform duration-300 hover:bg-blue-600 "><FaLinkedinIn></FaLinkedinIn></button>
                        <button className="w-9 h-9 rounded-full bg-red-500 text-white flex justify-center items-center transform duration-300 hover:bg-red-700 "><FaGooglePlusG></FaGooglePlusG></button>
                    </div>
                </div>
            </div>



{/* card 1 */}
<div className="bg-white border rounded-lg p-4 hover:border-blue-800 transition duration-300 cursor-pointer">
                <div>
                    <div className="relative flex justify-center items-center rounded-lg p-3">
                        <img className="mb-5 h-44 rounded-lg" src="https://i.ibb.co/JsKrPH1/2.png" alt="" />
                    </div>
                    <h1 className="text-xl font-bold mb-3 text-center">Car Engine Plug</h1>
                    <p className="font-semibold text-gray-500 text-center">Engine Expert</p>

                    <div className="flex gap-6 justify-center mt-4">
                        <button className="w-9 h-9 rounded-full bg-blue-700 text-white flex justify-center items-center transform duration-300 hover:bg-blue-500 "><FaFacebookF></FaFacebookF></button>
                        <button className="w-9 h-9 rounded-full bg-blue-500 text-white flex justify-center items-center transform duration-300 hover:bg-blue-700 "><FaTwitter></FaTwitter></button>
                        <button className="w-9 h-9 rounded-full bg-blue-800 text-white flex justify-center items-center transform duration-300 hover:bg-blue-600 "><FaLinkedinIn></FaLinkedinIn></button>
                        <button className="w-9 h-9 rounded-full bg-red-500 text-white flex justify-center items-center transform duration-300 hover:bg-red-700 "><FaGooglePlusG></FaGooglePlusG></button>
                    </div>
                </div>
            </div>



{/* card 1 */}
<div className="bg-white border rounded-lg p-4 hover:border-blue-800 transition duration-300 cursor-pointer">
                <div>
                    <div className="relative flex justify-center items-center rounded-lg p-3">
                        <img className="mb-5 h-44 rounded-lg" src="https://i.ibb.co/R72yqf4/3.png" alt="" />
                    </div>
                    <h1 className="text-xl font-bold mb-3 text-center">Car Engine Plug</h1>
                    <p className="font-semibold text-gray-500 text-center">Engine Expert</p>

                    <div className="flex gap-6 justify-center mt-4">
                        <button className="w-9 h-9 rounded-full bg-blue-700 text-white flex justify-center items-center transform duration-300 hover:bg-blue-500 "><FaFacebookF></FaFacebookF></button>
                        <button className="w-9 h-9 rounded-full bg-blue-500 text-white flex justify-center items-center transform duration-300 hover:bg-blue-700 "><FaTwitter></FaTwitter></button>
                        <button className="w-9 h-9 rounded-full bg-blue-800 text-white flex justify-center items-center transform duration-300 hover:bg-blue-600 "><FaLinkedinIn></FaLinkedinIn></button>
                        <button className="w-9 h-9 rounded-full bg-red-500 text-white flex justify-center items-center transform duration-300 hover:bg-red-700 "><FaGooglePlusG></FaGooglePlusG></button>
                    </div>
                </div>
            </div>
            </div>
          </div>

          {/* <div key={3}>

          </div> */}

          {/* <div className="grid grid-cols-1 md:grid-cols-2" key={4}>
            <h3>4</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2" key={5}>
            <h3>5</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2" key={6}>
            <h3>6</h3>
          </div> */}

        </Slider>
        <div className="mt-10 flex gap-4 justify-center" style={{ textAlign: "center" }}>
          <button className="dark:text-blue-500 dark:hover:border-blue-500 flex items-center justify-center rounded-md focus:outline-none p-3 text-center border border-gray-300 hover:border-blue-800 font-bold  transition duration-300" onClick={this.previous}>
            <FaAngleLeft></FaAngleLeft>
          </button>
          <button className="dark:text-blue-500 dark:hover:border-blue-500 flex items-center justify-center rounded-md focus:outline-none p-3 text-center border border-gray-300 hover:border-blue-800 font-bold  transition duration-300" onClick={this.next}>
            <FaAngleRight></FaAngleRight>
          </button>
        </div>

        <div className="flex justify-center max-w-7xl mx-auto mb-10 mt-7">
            <Link to={"/volunteerInfo"} className="dark:text-blue-500 dark:hover:border-blue-500 dark:hover:text-gray-300 flex items-center justify-center rounded-md focus:outline-none py-2 px-3 text-center border border-blue-800 hover:bg-blue-600 hover:text-white font-semibold transition duration-300">
              Meet All Volunteers
            </Link>
            </div>
      </div>
    );
  }
}