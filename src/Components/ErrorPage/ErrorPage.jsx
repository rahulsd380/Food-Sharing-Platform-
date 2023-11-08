import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <Helmet>
              <title>Food For Life | Error</title>
          </Helmet>
            <div className="flex justify-center">
                <img className="w-3/6" src="/src/assets/images/error-page.png" alt="" />
            </div>

            <div className="flex justify-center">
            <Link to={"/"} className="w-28 flex items-center justify-center rounded-md focus:outline-none h-12 px-5 text-center bg-blue-800 text-white font-semibold hover:bg-blue-600 transition duration-300">
              Home
            </Link>
            </div>
        </div>
    );
};

export default ErrorPage;