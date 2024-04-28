import { useLoaderData } from "react-router-dom";

const UpdateSpot = () => {
    const spot = useLoaderData();
    const {_id, spot_name, country_name, location, image, average_cost, seasonality, travel_duration, totalVisitorsPerYear, description} = spot;
    const handleUpdateTouristsSpot=(e)=>{
        e.preventDefault();
        const form = e.target;
        const spot_name = form.spot_name.value; 
        const country_name = form.country_name.value; 
        const location = form.location.value; 
        const image = form.image.value; 
        const average_cost = form.average_cost.value; 
        const seasonality = form.seasonality.value; 
        const travel_duration = form.travel_duration.value; 
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value; 
        const description = form.description.value; 
        const tourSpots = {spot_name, country_name, location, image, average_cost, seasonality, travel_duration, totalVisitorsPerYear, description};
        console.log(tourSpots);
        fetch(`http://localhost:5000/tourspots/${_id}`, {
            method: 'PUT',
            headers: {
            'content-type': 'application/json',
            "Access-Control-Allow-Origin": "",
        },
            body: JSON.stringify(tourSpots)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                alert('Product updated successfully')
            }
        })
    }
    return (
        <div className="mb-6">
        <div className="bg-[#429E9D] w-full md:w-3/5 lg:w-3/5 shadow-2xl mx-auto mt-8 p-6 md:p-10 rounded-md ">
            <h2 className="text-4xl font-bold mx-auto w-full text-center pb-6 bg-gradient-to-r from-stone-700 via-slate-500 to-stone-600 inline-block text-transparent bg-clip-text">Update Tourists Spot</h2>
            <form onSubmit={handleUpdateTouristsSpot} className="w-full">
               <div  className="flex md:flex-row flex-col gap-4">
               <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-medium text-lg">Tourists Spot Name</span>
                    </label>
                    <input type="text" placeholder="tourists spot name" defaultValue={spot_name} name="spot_name" className="input input-bordered" required />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-medium text-lg">Country Name</span>
                    </label>
                    <input type="text"  placeholder="country name" defaultValue={country_name} name="country_name" className="input input-bordered" required />
                </div>
               </div>

               <div  className="flex gap-4 md:flex-row flex-col">
               <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-medium text-lg">Location</span>
                    </label>
                    <input type="text" placeholder="location" defaultValue={location} name="location" className="input input-bordered" required />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-medium text-lg">Image URL</span>
                    </label>
                    <input type="text"  placeholder="image url" defaultValue={image} name="image" className="input input-bordered" required />
                </div>
               </div>

               <div  className="flex gap-4 md:flex-row flex-col">
               <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-medium text-lg">Average Cost</span>
                    </label>
                    <input type="text" placeholder="average cost" defaultValue={average_cost} name="average_cost" className="input input-bordered" required />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-medium text-lg">Seasonality</span>
                    </label>
                    <input type="text"  placeholder="seasonality" defaultValue={seasonality} name="seasonality" className="input input-bordered" required />
                </div>
               </div>

               <div  className="flex gap-4 md:flex-row flex-col">
               <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-medium text-lg">Travel Duration</span>
                    </label>
                    <input type="text" placeholder="travel duration" defaultValue={travel_duration} name="travel_duration" className="input input-bordered" required />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-medium text-lg">Total Visitor Per Year</span>
                    </label>
                    <input type="text"  placeholder="total visitor per year" defaultValue={totalVisitorsPerYear} name="totalVisitorsPerYear" className="input input-bordered" required />
                </div>
               </div>

               <div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-medium text-lg">Short Description</span>
                    </label>
                    <input type="text"  placeholder="short description" defaultValue={description} name="description" className="input input-bordered" required />
                </div>
               </div>
                <div className="form-control mt-6">
                    <button className="btn bg-black bg-opacity-75 text-white">UPDATE SPOT</button>
                </div>
            </form>
        </div>
    </div>
);
};


export default UpdateSpot;