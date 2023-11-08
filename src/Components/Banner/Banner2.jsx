import { FaHandHoldingHeart } from "react-icons/fa";
import { RiFundsBoxFill } from "react-icons/ri";
import { GiHeartInside } from "react-icons/gi";

const Banner2 = () => {
    return (
        <div className="max-w-6xl mx-auto py-20">
            <div className="bg-gray-50 p-6 rounded-lg dark:bg-gray-300">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    
                <div>
                    <div className="flex gap-5 items-center mb-4">
                        <p className="text-3xl font-bold text-orange-600"><FaHandHoldingHeart></FaHandHoldingHeart></p>
                        <p className="text-3xl font-bold">Become Volunteer</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sapiente placeat at, saepe commodi deserunt magni harum ipsam illum repellat voluptas impedit incidunt ex, doloremque aspernatur ea mollitia ad voluptatibus.</p>
                </div>


                <div>
                    <div className="flex gap-5 items-center mb-4">
                        <p className="text-3xl font-bold text-blue-600"><RiFundsBoxFill></RiFundsBoxFill></p>
                        <p className="text-3xl font-bold">Quick Fundrise</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sapiente placeat at, saepe commodi deserunt magni harum ipsam illum repellat voluptas impedit incidunt ex, doloremque aspernatur ea mollitia ad voluptatibus.</p>
                </div>


                <div>
                    <div className="flex gap-5 items-center mb-4">
                        <p className="text-3xl font-bold text-green-500"><GiHeartInside></GiHeartInside></p>
                        <p className="text-3xl font-bold">Start Donating</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sapiente placeat at, saepe commodi deserunt magni harum ipsam illum repellat voluptas impedit incidunt ex, doloremque aspernatur ea mollitia ad voluptatibus.</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Banner2;