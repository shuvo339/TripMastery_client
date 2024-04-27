import { Link } from "react-router-dom";

const TouristSpotCard = ({spot}) => {
    const {_id, spot_name, image, average_cost, seasonality, travel_duration, totalVisitorsPerYear} =spot;
    
    return (
        <div className="space-y-3 border p-4 rounded-md shadow-xl">
            <div>
                <img className="h-60 w-full" src={image} alt="" />
                    <div className="bg-cyan-600 h-20 flex justify-around items-center px-4">
                        <h2 className="bg-gradient-to-r from-cyan-500 to-cyan-800 text-white px-3 py-2 bg-clip-border border-dashed border-2 text-xl font-semibold -rotate-6">{spot_name}</h2>
                        <div className="-rotate-3">
                            <h2 className="text-center text-white text-lg font-semibold">{travel_duration}</h2>
                            <h2 className="text-white font-semibold">{average_cost}</h2>
                        </div>
                    </div>
            </div>
            <div className="flex justify-around items-center">
                <div>
                <h2 className="text-lg font-medium">Total Visitors Per Year: {totalVisitorsPerYear}</h2>
                <h2 className="text-lg font-medium">Seasonality: {seasonality}</h2>
                </div>
                <Link to={`/details/${_id}`}><button className="btn text-lg bg-cyan-600 text-white">View Details</button></Link>
            </div>
        </div>
    );
};

export default TouristSpotCard;