import { useLoaderData } from "react-router-dom";
const ViewDetails = () => {
    const spot = useLoaderData();
    const {spot_name, country_name, location, image, average_cost, seasonality, travel_duration, totalVisitorsPerYear, description} = spot;
    return (
        <div className="flex flex-col md:flex-row gap-8 my-12">
            <div className="flex-1">
                <img className="rounded-md h-96 w-full" src={image} alt="" />
            </div>
            <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-semibold">{spot_name}</h2>
            <h2 className="text-xl font-medium"><span className='opacity-90'>Country: </span> {country_name}</h2>
            <p className="my-3 opacity-90 text-justify">{description}</p>
            <p className="mb-2 text-lg"><span className='opacity-90'>Location:</span> {location}</p> 
            <div className='space-y-3'>
            <p className="text-lg"><span className='opacity-90'>Travel Duration:</span> {travel_duration}</p> 
            <p className="text-lg"><span className='opacity-90'>Average Cost:</span> ${average_cost}</p> 
            <p className="text-lg"><span className='opacity-90'>Seasnality: </span> {seasonality}</p> 
            <p className="text-lg"><span className='opacity-90'>Total Visitors Per Year: </span> {totalVisitorsPerYear}</p> 
            </div>
            </div>
        </div>
    );
};

export default ViewDetails;