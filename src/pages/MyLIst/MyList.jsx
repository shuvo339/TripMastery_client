import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import UseAuth from '../../hooks/UseAuth';
import { useEffect, useState } from 'react';

const MyList = () => {
    const {user} = UseAuth();
    const [loadedSpots, setLoadedSpots] = useState([]);
    useEffect(()=>{
        fetch(`https://trip-mastery-server.vercel.app/tourspots/email/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setLoadedSpots(data)
        })
    }, [])
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
            fetch(`https://trip-mastery-server.vercel.app/tourspots/${id}`,{
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
                    const remaining = loadedSpots?.filter(spot=>spot._id !== id);
                    setLoadedSpots(remaining)
    
                }
            })
        }
      });
        
     }
    return (
    //                 <Link className="w-[47%]" to={`/update/${spot._id}`}><button type="button" className="btn w-full text-white font-medium bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-cyan-400 ...">
    //                     UPDATE
    //                     </button></Link>
    //                 <button onClick={()=>handleDelete(spot._id)} type="button" className="btn w-[47%] text-white font-medium bg-gradient-to-r from-red-400 to-pink-700 hover:from-pink-600 hover:to-amber-600 ...">
    //                     DELETE
    //                     </button>
 
    <div className="w-full md:w-3/4 my-8 min-h-screen shadow-xl mx-auto">
    <div className="overflow-x-auto">
    <div className="my-6 h-20 w-full bg-gradient-to-r from-green-600 to-cyan-500 flex justify-center items-center">
           <h2 className="text-3xl font-bold text-center text-white">My List</h2>
           </div>
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
       loadedSpots.map((spot, idx)=>
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