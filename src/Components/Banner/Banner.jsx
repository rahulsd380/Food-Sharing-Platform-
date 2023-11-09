import { Component } from "react";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight   } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaFacebookF,FaTwitter,FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

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
      <div className="py-10">
        <Slider className="max-w-6xl mx-auto" ref={c => (this.slider = c)} {...settings}>
          <div className="dark:bg-gray-600 bg-blue-50 rounded-lg px-10" key={1}>
            <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div data-aos="fade-up"
     data-aos-duration="3000">
            <h3 className="text-4xl md:text-6xl font-bold mb-5 dark:text-gray-300"><span className="text-blue-800 dark:bg-text-500 dark:text-blue-500">Give</span> A Little, <br /> Help A <span className="text-blue-800 dark:text-blue-500">Lot.</span></h3>
            <p className="mb-5 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, sint fuga asperiores voluptatem libero autem repellat nobis itaque labore tenetur velit magnam in. Deleniti suscipit optio quaerat illo architecto doloremque tempora consequuntur dicta, eligendi voluptatibus quisquam recusandae voluptates incidunt explicabo laboriosam labore odit odio quasi nemo nesciunt. Adipisci, voluptatibus non?</p>
            <div className="flex gap-6 mb-5">
            <Link to={""} className=" dark:bg-blue-500 flex items-center justify-center rounded-md focus:outline-none h-12 px-5 text-center bg-blue-800 text-white font-semibold hover:bg-blue-600 transition duration-300">
              Get Started
            </Link>
            <Link to={""} className=" dark:bg-blue-500 flex items-center justify-center rounded-md focus:outline-none h-12 px-5 text-center bg-blue-800 text-white font-semibold hover:bg-blue-600 transition duration-300">
              Raise Hand
            </Link>
            </div>

            <div className="py-3 flex justify-between mt-3">
              <div className="flex gap-3 md:gap-6 items-center">
              <h1 className="text-xl font-bold text-blue-800 dark:text-blue-500">Share :</h1>
                <button className="w-10 h-10 rounded-full bg-white text-gray-800 border flex justify-center items-center hover:bg-blue-800 hover:text-white transition duration-300 ease-in-out hover:border-none"><FaFacebookF/></button>
                <button className="w-10 h-10 rounded-full bg-white text-gray-800 border flex justify-center items-center hover:bg-blue-800 hover:text-white transition duration-300 ease-in-out hover:border-none"><FaTwitter/></button>
                <button className="w-10 h-10 rounded-full bg-white text-gray-800 border flex justify-center items-center hover:bg-blue-800 hover:text-white transition duration-300 ease-in-out hover:border-none"><FaGooglePlusG/></button>
                <button className="w-10 h-10 rounded-full bg-white text-gray-800 border flex justify-center items-center hover:bg-blue-800 hover:text-white transition duration-300 ease-in-out hover:border-none"><FaLinkedinIn/></button>
            </div>
            </div>
            </div>
              <img data-aos="fade-down"
     data-aos-duration="2000" className="w-full md:w-2/5" src="https://i.ibb.co/zFwghCj/Untitled-1.png" alt="" />
            

            </div>
          </div>



          {/* banner-02 */}
          <div className="dark:bg-gray-600 bg-blue-50 rounded-lg px-10" key={1}>
            <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div data-aos="fade-up"
     data-aos-duration="3000">
            <h3 className="text-4xl md:text-6xl font-bold mb-5 dark:text-gray-300"><span className="text-blue-800 dark:bg-text-500 dark:text-blue-500">Give</span> A Little, <br /> Help A <span className="text-blue-800 dark:text-blue-500">Lot.</span></h3>
            <p className="mb-5 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, sint fuga asperiores voluptatem libero autem repellat nobis itaque labore tenetur velit magnam in. Deleniti suscipit optio quaerat illo architecto doloremque tempora consequuntur dicta, eligendi voluptatibus quisquam recusandae voluptates incidunt explicabo laboriosam labore odit odio quasi nemo nesciunt. Adipisci, voluptatibus non?</p>
            <div className="flex gap-6 mb-5">
            <Link to={""} className=" dark:bg-blue-500 flex items-center justify-center rounded-md focus:outline-none h-12 px-5 text-center bg-blue-800 text-white font-semibold hover:bg-blue-600 transition duration-300">
              Get Started
            </Link>
            <Link to={""} className=" dark:bg-blue-500 flex items-center justify-center rounded-md focus:outline-none h-12 px-5 text-center bg-blue-800 text-white font-semibold hover:bg-blue-600 transition duration-300">
              Raise Hand
            </Link>
            </div>

            <div className="py-3 flex justify-between mt-3">
              <div className="flex gap-4 md:gap-6 items-center">
              <h1 className="text-xl font-bold text-blue-800 dark:text-blue-500">Share :</h1>
                <button className="w-10 h-10 rounded-full bg-white text-gray-800 border flex justify-center items-center hover:bg-blue-800 hover:text-white transition duration-300 ease-in-out hover:border-none"><FaFacebookF/></button>
                <button className="w-10 h-10 rounded-full bg-white text-gray-800 border flex justify-center items-center hover:bg-blue-800 hover:text-white transition duration-300 ease-in-out hover:border-none"><FaTwitter/></button>
                <button className="w-10 h-10 rounded-full bg-white text-gray-800 border flex justify-center items-center hover:bg-blue-800 hover:text-white transition duration-300 ease-in-out hover:border-none"><FaGooglePlusG/></button>
                <button className="w-10 h-10 rounded-full bg-white text-gray-800 border flex justify-center items-center hover:bg-blue-800 hover:text-white transition duration-300 ease-in-out hover:border-none"><FaLinkedinIn/></button>
            </div>
            </div>
            </div>
              <img data-aos="fade-down"
     data-aos-duration="2000" className="w-full md:w-2/5" src="https://i.ibb.co/zFwghCj/Untitled-1.png" alt="" />
            

            </div>
          </div>



          {/* banner-03 */}
          <div className="dark:bg-gray-600 bg-blue-50 rounded-lg px-10" key={1}>
            <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div data-aos="fade-up"
     data-aos-duration="3000">
            <h3 className="text-4xl md:text-6xl font-bold mb-5 dark:text-gray-300"><span className="text-blue-800 dark:bg-text-500 dark:text-blue-500">Give</span> A Little, <br /> Help A <span className="text-blue-800 dark:text-blue-500">Lot.</span></h3>
            <p className="mb-5 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, sint fuga asperiores voluptatem libero autem repellat nobis itaque labore tenetur velit magnam in. Deleniti suscipit optio quaerat illo architecto doloremque tempora consequuntur dicta, eligendi voluptatibus quisquam recusandae voluptates incidunt explicabo laboriosam labore odit odio quasi nemo nesciunt. Adipisci, voluptatibus non?</p>
            <div className="flex gap-6 mb-5">
            <Link to={""} className=" dark:bg-blue-500 flex items-center justify-center rounded-md focus:outline-none h-12 px-5 text-center bg-blue-800 text-white font-semibold hover:bg-blue-600 transition duration-300">
              Get Started
            </Link>
            <Link to={""} className=" dark:bg-blue-500 flex items-center justify-center rounded-md focus:outline-none h-12 px-5 text-center bg-blue-800 text-white font-semibold hover:bg-blue-600 transition duration-300">
              Raise Hand
            </Link>
            </div>

            <div className="py-3 flex justify-between mt-3">
              <div className="flex gap-4 md:gap-6 items-center">
              <h1 className="text-xl font-bold text-blue-800 dark:text-blue-500">Share :</h1>
                <button className="w-10 h-10 rounded-full bg-white text-gray-800 border flex justify-center items-center hover:bg-blue-800 hover:text-white transition duration-300 ease-in-out hover:border-none"><FaFacebookF/></button>
                <button className="w-10 h-10 rounded-full bg-white text-gray-800 border flex justify-center items-center hover:bg-blue-800 hover:text-white transition duration-300 ease-in-out hover:border-none"><FaTwitter/></button>
                <button className="w-10 h-10 rounded-full bg-white text-gray-800 border flex justify-center items-center hover:bg-blue-800 hover:text-white transition duration-300 ease-in-out hover:border-none"><FaGooglePlusG/></button>
                <button className="w-10 h-10 rounded-full bg-white text-gray-800 border flex justify-center items-center hover:bg-blue-800 hover:text-white transition duration-300 ease-in-out hover:border-none"><FaLinkedinIn/></button>
            </div>
            </div>
            </div>
              <img data-aos="fade-down"
     data-aos-duration="2000" className="w-full md:w-2/5" src="https://i.ibb.co/zFwghCj/Untitled-1.png" alt="" />
            

            </div>
          </div>

        </Slider>
        <div className="mt-10 flex gap-4 justify-center" style={{ textAlign: "center" }}>
          <button className="dark:text-blue-500 dark:hover:border-blue-500 flex items-center justify-center rounded-md focus:outline-none p-3 text-center border border-gray-300 hover:border-blue-800 font-bold  transition duration-300" onClick={this.previous}>
            <FaAngleLeft></FaAngleLeft>
          </button>
          <button className="dark:text-blue-500 dark:hover:border-blue-500 flex items-center justify-center rounded-md focus:outline-none p-3 text-center border border-gray-300 hover:border-blue-800 font-bold  transition duration-300" onClick={this.next}>
            <FaAngleRight></FaAngleRight>
          </button>
        </div>
      </div>
    );
  }
}