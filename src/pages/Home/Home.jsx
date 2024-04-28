// import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import TouristSpotCard from "../../components/TourisSpotCard/TouristSpotCard";
import Banner from "../../components/Banner/Banner";
import About from "../../components/About/About";
import ContactUs from "../../components/ContactUs/ContactUs";
import Countries from "../../components/Countries/Countries";
// ..
AOS.init();
const Home = () => {
  const tourSpots = useLoaderData();
  const slicedSpots = ()=>{
    if(tourSpots.length>6){
      const newTourSpots=tourSpots.slice(0,6)
      return newTourSpots;
    }
  }
  const spots = slicedSpots();
  return (
    <div className="my-8">
      <Banner></Banner>
      <div className="my-20">
        <h2 className="text-4xl font-bold text-center pb-8">Popular Tourist Spots</h2>
        <div className="grid grid-cols-2 gap-4">
          {spots?.map((spot) => (
            <TouristSpotCard key={spot._id} spot={spot}></TouristSpotCard>
          ))}
        </div>
      </div>
      <Countries></Countries>
      <About></About>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
