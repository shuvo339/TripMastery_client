import {useLoaderData} from "react-router-dom";
import TouristSpotCard from "../../components/TourisSpotCard/TouristSpotCard";

const AllSpots = () => {
    const tourSpots = useLoaderData();
    return (
        <div className="m-8">
            <h2 className="text-3xl font-bold text-center pb-6">All Tourist Spots</h2>
         <div className="grid grid-cols-2 gap-4">
            {
                tourSpots?.map(spot=><TouristSpotCard key={spot._id} spot={spot}></TouristSpotCard>)
            }
         </div>
        </div>
    );
};

export default AllSpots;