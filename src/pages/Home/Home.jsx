// import { useState } from "react";
import {useLoaderData} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import TouristSpotCard from "../../components/TourisSpotCard/TouristSpotCard";
import Banner from "../../components/Banner/Banner";
// ..
AOS.init();
const Home = () => {
    const tourSpots = useLoaderData();
    return (
        <div className="m-8">
            {/* <div style={{backgroundImage: `url("https://i.ibb.co/QfHqCKr/add-bg.png")`}} className="w-full bg-cover bg-no-repeat min-h-screen"  data-aos="zoom-out" data-aos-duration="3000">
            </div> */}
            <Banner></Banner>
         <div className="grid grid-cols-2 gap-4">
            {
                tourSpots?.map(spot=><TouristSpotCard key={spot._id} spot={spot}></TouristSpotCard>)
            }
         </div>
        </div>
    );
};

export default Home;