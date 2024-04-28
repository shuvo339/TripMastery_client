import { useLoaderData, useParams } from "react-router-dom";
import TouristSpotCard from "../../components/TourisSpotCard/TouristSpotCard";

const CountrySpots = () => {
            const {country_name} = useParams()
            const spots =useLoaderData()
    
    
    return (
        <div className="my-8">
           <div className="my-6 h-20 w-full bg-gradient-to-r from-green-600 to-cyan-500 flex justify-center items-center">
           <h2 className="text-3xl font-bold text-center text-white">{country_name} Tourist Spots</h2>
           </div>
         <div className="grid md:grid-cols-2 gap-4">
            {
                spots?.map(spot=><TouristSpotCard key={spot._id} spot={spot}></TouristSpotCard>)
            }
         </div>
        </div>
    );
};
export default CountrySpots;