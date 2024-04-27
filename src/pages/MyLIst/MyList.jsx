import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const MyList = () => {
    const LoadedTourSpots = useLoaderData();
    const [tourSpots, setTourSpots] = useState(LoadedTourSpots)
    const handleDelete=id=>{
        console.log(id)
        fetch(`http://localhost:5000/tourspots/${id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                const remaining = tourSpots?.filter(spot=>spot._id !== id);
                setTourSpots(remaining)
            }
        })
    }
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
                    
                    <button onClick={()=>handleDelete(spot._id)} type="button" className="btn w-[47%] text-white font-medium bg-gradient-to-r from-red-400 to-pink-700 hover:from-pink-600 hover:to-amber-600 ...">
                        DELETE
                        </button>
                        
                    </div>
                </div>)
            }
        </div>
        </div>
    );
};

export default MyList;