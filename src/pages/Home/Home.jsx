// import { useState } from "react";
import {useLoaderData} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import TouristSpotCard from "../../components/TourisSpotCard/TouristSpotCard";
import Banner from "../../components/Banner/Banner";
import About from "../../components/About/About";
import ContactUs from "../../components/ContactUs/ContactUs";
// ..
AOS.init();
const Home = () => {
    const tourSpots = useLoaderData();
    return (
        <div className="m-8">
            <Banner></Banner>
         <div className="grid grid-cols-2 gap-4">
            {
                tourSpots?.map(spot=><TouristSpotCard key={spot._id} spot={spot}></TouristSpotCard>)
            }
         </div>
         <About></About>
         <ContactUs></ContactUs>
        </div>
    );
};

export default Home;