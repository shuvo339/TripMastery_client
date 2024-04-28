import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import { useLoaderData } from 'react-router-dom';
// import UseAuth from '../../hooks/UseAuth';
import { useState } from 'react';

const MyList = () => {
    const loadedSpots = useLoaderData();
    // const {user} = UseAuth() || {};
   const [tourSpots,setTourSpots]=useState(loadedSpots)
    const handleDelete=id=>{Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/tourspots/${id}`,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                    const remaining = tourSpots?.filter(spot=>spot._id !== id);
                    setTourSpots(remaining)
    
                }
            })
        }
      });
        
     }
    return (
    //     <div className="px-8 my-8">
    //         <h2 className="text-4xl font-semibold text-center pb-6">My Cart</h2>
    //         <div className="grid grid-cols-3 gap-5">
    //         {
    //             tourSpots.map(spot=>
    //             <div key={spot._id} className="p-4 shadow-lg rounded-xl">
    //                 <img className="rounded-full mx-auto size-80" src={spot.image} alt="" />
    //                 <div className="bg-cyan-500 h-16 flex justify-center items-center"><h2 className="text-2xl font-bold">{spot.spot_name}</h2></div>
    //                 <h2>Location: {spot.location}</h2>
    //                 <h2>Travel Duration: {spot.travel_duration}</h2>
    //                 <h2>Budget: {spot.average_cost}</h2>
    //                 <div className="flex items-center justify-between my-4">
    //                 <Link className="w-[47%]" to={`/update/${spot._id}`}><button type="button" className="btn w-full text-white font-medium bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-cyan-400 ...">
    //                     UPDATE
    //                     </button></Link>
    //                 <button onClick={()=>handleDelete(spot._id)} type="button" className="btn w-[47%] text-white font-medium bg-gradient-to-r from-red-400 to-pink-700 hover:from-pink-600 hover:to-amber-600 ...">
    //                     DELETE
    //                     </button>
                        
    //                 </div>
    //             </div>)
    //         }
    //     </div>
    //     </div>
    <div className="w-full md:w-3/4 my-12 shadow-xl mx-auto">
    <div className="overflow-x-auto">
       <h2 className="text-center text-2xl font-semibold pb-4">My Cart</h2>
           <table className="table">
               {/* head */}
               <thead>
                   <tr>
                       <th>SL</th>
                       <th>Destination</th>
                       <th>Country</th>
                       <th>Duration</th>
                       <th>Cost</th>
                       <th>Action</th>
                       <th>Action</th>
                   </tr>
               </thead>
               <tbody>
   {
       tourSpots.map((spot, idx)=>
                   <tr key={spot.spot_name}>
                       <td>{idx+1}</td>
                       <td>{spot.spot_name}</td>
                       <td>{spot.country_name}</td>
                       <td>{spot.travel_duration}</td>
                       <td>${spot.average_cost}</td>
                       <td><Link to={`/update/${spot._id}`}><button className="btn">Update</button></Link></td>
                       <td><button onClick={()=>handleDelete(spot._id)} className="btn">Delete</button></td>
                   </tr>)
          
   }
   </tbody>
           </table>
       </div>

   
</div>
    );
};

export default MyList;