import { Link } from "react-router-dom";


const ApplyForVolunteer = () => {
    return (
        <div className="dark:bg-gray-600 grid grid-cols-1 md:grid-cols-2 gap-16 p-10  max-w-6xl mx-auto bg-blue-50 rounded-3xl mt-10 mb-20">

            <div className="" data-aos="fade-left" data-aos-duration="3000">
                <h1 className="font-bold text-orange-400 mb-3">Apply For Volunteer</h1>
                <h1 className="font-bold text-5xl mb-5 max-w-2xl dark:text-blue-500">Be a volunteer to add yourself in this great work.</h1>
                <p className="mb-4 w-3/4 dark:text-gray-300">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                <p className="mb-6 w-3/4 dark:text-gray-300">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <Link to={"/volunteerApply"} className="w-32 flex items-center justify-center rounded-md focus:outline-none h-12 px-5 text-center bg-blue-800 text-white font-semibold hover:bg-blue-600 transition duration-300">
              Apply Now
            </Link>
            </div>

            <div  className="relative" data-aos="fade-right" data-aos-duration="3000">
                <img className="w-full rounded-lg" src="https://i.ibb.co/ssw3T1M/aboutus.png" alt="" />
            </div>

        </div>
    );
};

export default ApplyForVolunteer;