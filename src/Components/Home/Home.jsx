import SimpleSlider from "../Banner/Banner";
import FeaturedFoods from "../FeaturedFoods/FeaturedFoods";
import Navbar from "../Navbar/Navbar";
import NewCompo from "../new";


const Home = () => {
    return (
        <div>
            <NewCompo></NewCompo>
            <FeaturedFoods></FeaturedFoods>
            <Navbar></Navbar>
            <SimpleSlider></SimpleSlider>
        </div>
    );
};

export default Home;