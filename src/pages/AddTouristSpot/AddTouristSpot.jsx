import UseAuth from "../../hooks/UseAuth";
import Swal from 'sweetalert2'

const AddTouristSpot = () => {
    const {user}=UseAuth();
    const name = user?.displayName;
    const email = user?.email;
    const handleAddTouristsSpot=(e)=>{
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
        
        const tourSpot = {spot_name, country_name, location, image, average_cost, seasonality, travel_duration, totalVisitorsPerYear, description, email, name};
        fetch('https://trip-mastery-server.vercel.app/tourspots', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(tourSpot)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                        title: "Added!",
                        text: "Tourist spot has been added",
                        icon: "success"
                      });
            }
        })
    }
    return (
        <div className="mb-6">
            <div style={{backgroundImage: `url("https://i.ibb.co/QfHqCKr/add-bg.png")`}} className="bg-black bg-blend-overlay bg-opacity-30 w-full md:w-3/5 lg:w-3/5 shadow-2xl mx-auto mt-8 p-6 md:p-10 rounded-md ">
                <h2 className="text-4xl font-bold mx-auto w-full text-center pb-6 bg-gradient-to-r from-stone-700 via-slate-100 to-stone-400 inline-block text-transparent bg-clip-text">Add Tourists Spot</h2>
                <form onSubmit={handleAddTouristsSpot} className="w-full">
                   <div  className="flex md:flex-row flex-col gap-4">
                   <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium text-lg text-white">Tourists Spot Name</span>
                        </label>
                        <input type="text" placeholder="tourists spot name" name="spot_name" className="input input-bordered bg-opacity-70" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium text-lg text-white">Country Name</span>
                        </label>
                        <input type="text"  placeholder="country name" name="country_name" className="input input-bordered bg-opacity-70" required />
                    </div>
                   </div>

                   <div  className="flex gap-4 md:flex-row flex-col">
                   <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium text-lg text-white">Location</span>
                        </label>
                        <input type="text" placeholder="location" name="location" className="input input-bordered bg-opacity-70" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium text-lg text-white">Image URL</span>
                        </label>
                        <input type="text"  placeholder="image url" name="image" className="input input-bordered bg-opacity-70" required />
                    </div>
                   </div>

                   <div  className="flex gap-4 md:flex-row flex-col">
                   <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium text-lg text-white">Average Cost</span>
                        </label>
                        <input type="text" placeholder="average cost" name="average_cost" className="input input-bordered bg-opacity-70" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium text-lg text-white">Seasonality</span>
                        </label>
                        <input type="text"  placeholder="seasonality" name="seasonality" className="input input-bordered bg-opacity-70" required />
                    </div>
                   </div>

                   <div  className="flex gap-4 md:flex-row flex-col">
                   <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium text-lg text-white">Travel Duration</span>
                        </label>
                        <input type="text" placeholder="travel duration" name="travel_duration" className="input input-bordered bg-opacity-70" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium text-lg text-white">Total Visitor Per Year</span>
                        </label>
                        <input type="text"  placeholder="total visitor per year" name="totalVisitorsPerYear" className="input input-bordered bg-opacity-70" required />
                    </div>
                   </div>

                   <div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium text-lg text-white">Short Description</span>
                        </label>
                        <input type="text"  placeholder="short description" name="description" className="input input-bordered bg-opacity-70" required />
                    </div>
                   </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-black text-white bg-opacity-75">ADD NEW SPOT</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTouristSpot;