import { Link } from "react-router-dom";


const AboutUs = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-28 pl-10 lg:pl-0  max-w-6xl mx-auto bg-blue-50 dark:bg-gray-600 dark:hover:text-gray-200 rounded-tl-[500px] rounded-br-[500px] rounded-tr-3xl">
            <div  className="relative" data-aos="fade-right" data-aos-duration="3000">
                <img className="w-full rounded-lg" src="https://i.ibb.co/ssw3T1M/aboutus.png" alt="" />
            </div>

            <div className="" data-aos="fade-left" data-aos-duration="3000">
                <h1 className="font-bold text-orange-400 mb-3">About Us</h1>
                <h1 className="font-bold text-5xl mb-5 max-w-2xl">We are qualified <br /> & of experience <br /> in this field</h1>
                <p className="mb-4 w-3/4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                <p className="mb-6 w-3/4">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <Link to={""} className="w-32 flex items-center justify-center rounded-md focus:outline-none h-12 px-5 text-center bg-blue-800 text-white font-semibold hover:bg-blue-600 transition duration-300">
              Read More
            </Link>
            </div>
            </div>
        </div>
    );
};

export default AboutUs;