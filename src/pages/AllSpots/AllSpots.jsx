import {useLoaderData} from "react-router-dom";
import TouristSpotCard from "../../components/TourisSpotCard/TouristSpotCard";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const AllSpots = () => {
    const tourSpots = useLoaderData();
    const [spots, setSpots] = useState([...tourSpots])
    const handleSort=()=>{   
          const sortedSpots = tourSpots.sort((a,b)=>b.average_cost-a.average_cost);
          setSpots(sortedSpots)
    }
    return (
        <div className="my-8">
           <div className="my-6 h-20 w-full bg-gradient-to-r from-green-600 to-cyan-500 flex justify-center items-center">
           <h2 className="text-3xl font-bold text-center text-white">All Tourist Spots</h2>
           </div>
           <div className="flex justify-center my-8"><details className="dropdown">
        <summary className="m-1 btn text-white bg-cyan-500">Sort by <span><IoIosArrowDown /></span></summary>
        <ul className="p-2 gap-1 shadow menu dropdown-content z-[1] bg-transparent rounded-box w-40">
          <li className="hover:bg-cyan-300 rounded-lg bg-cyan-100"><button onClick={handleSort}>Cost</button></li>
        </ul>
      </details>
      </div>
         <div className="grid md:grid-cols-2 gap-4">
            {
                spots?.map(spot=><TouristSpotCard key={spot._id} spot={spot}></TouristSpotCard>)
            }
         </div>
        </div>
    );
};

export default AllSpots;