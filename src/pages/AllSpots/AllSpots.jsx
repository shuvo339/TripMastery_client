import {useLoaderData} from "react-router-dom";
import TouristSpotCard from "../../components/TourisSpotCard/TouristSpotCard";

const AllSpots = () => {
    const tourSpots = useLoaderData();
    return (
        <div className="m-8">
           <div className="my-6 h-20 w-full bg-gradient-to-r from-green-600 to-cyan-500 flex justify-center items-center">
           <h2 className="text-3xl font-bold text-center text-white">All Tourist Spots</h2>
           </div>
         <div className="grid grid-cols-2 gap-4">
            {
                tourSpots?.map(spot=><TouristSpotCard key={spot._id} spot={spot}></TouristSpotCard>)
            }
         </div>
        </div>
    );
};

export default AllSpots;