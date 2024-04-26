import { useLoaderData } from "react-router-dom";

const MyList = () => {
    const tourSpots = useLoaderData()
    return (
        <div className="px-8 my-8">
            <h2 className="text-4xl font-semibold text-center pb-6">My Cart</h2>
            <div className="grid grid-cols-3 gap-5">
            {
                tourSpots.map(spot=>
                <div key={spot._id} className="p-4 shadow-lg rounded-xl">
                    <img className="rounded-full mx-auto size-80" src={spot.image} alt="" />
                    <div className="bg-cyan-500 h-16 flex justify-center items-center"><h2 className="text-2xl font-bold">{spot.spot_name}</h2></div>
                    <h2>Location: {spot.location}</h2>
                    <h2>Travel Duration: {spot.travel_duration}</h2>
                    <h2>Budget: {spot.average_cost}</h2>
                    <div className="flex items-center justify-between my-4">
                        <button className="btn w-[45%]">UPDATE</button>
                        <button className="btn w-[45%]">DELETE</button>
                    </div>
                </div>)
            }
        </div>
        </div>
    );
};

export default MyList;