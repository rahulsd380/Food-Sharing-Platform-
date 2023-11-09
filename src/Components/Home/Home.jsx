import { Helmet } from "react-helmet-async";
import SimpleSlider from "../Banner/Banner";
import FeaturedFoods from "../FeaturedFoods/FeaturedFoods";
// import Navbar from "../Navbar/Navbar";
import PreviousNextMethods from "../Volunteers/Volunteers";
import AboutUs from "../AboutUs/AboutUs";
import MyyyMap from "../Map/Map";
import AutoPlay from "../ImageGalary/ImageGalary";
import ApplyForVolunteer from "../AppkyForVolunteer/AppkyForVolunteer";
import Banner2 from "../Banner/Banner2";
import NewNavbar from "../NewNavbar/NewNavbar";


const Home = () => {
    return (
        <div>
            <Helmet>
              <title>Food For Life | Home</title>
          </Helmet>
            {/* <Navbar></Navbar> */}
            <NewNavbar></NewNavbar>
            <SimpleSlider></SimpleSlider>
            <FeaturedFoods></FeaturedFoods>
            <AboutUs></AboutUs>
            <Banner2></Banner2>
            {/* Volunteers */}
            <PreviousNextMethods></PreviousNextMethods>
            {/* Image Galary */}
            <AutoPlay></AutoPlay>
            <ApplyForVolunteer></ApplyForVolunteer>
            <MyyyMap></MyyyMap>
        </div>
    );
};

export default Home;