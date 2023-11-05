import SimpleSlider from "../Banner/Banner";
import FeaturedFoods from "../FeaturedFoods/FeaturedFoods";
import Navbar from "../Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <FeaturedFoods></FeaturedFoods>
            <Navbar></Navbar>
            <SimpleSlider></SimpleSlider>
        </div>
    );
};

export default Home;