import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://trip-mastery-server.vercel.app/countries')
        .then(res=>res.json())
        .then(data=>{
            setCountries(data)
        })
    }, [])
    return (
        <div className="my-16">
            <h2 className="text-4xl font-bold text-center pb-6">Countries</h2>
            <div className="grid grid-cols-3 gap-5 my-8">
        {
            countries.map(country=>
            <div key={country._id} className="p-4 shadow-lg rounded-xl flex flex-col">
                <img className="rounded-full mx-auto size-80" src={country.image} alt="" />
                <div className="bg-cyan-500 h-16 flex justify-center items-center"><h2 className="text-2xl font-bold">{country.country_name}</h2></div>
                <p className="opacity-90 text-justify py-3 flex-1">{country.description}</p>
                <div className="my-2 flex justify-center items-center">
                   <Link to={`countryspots/${country.country_name}`}> <button className="btn w-full mx-auto bg-cyan-600 text-white">VISIT SPOTS</button></Link>
                </div>
            </div>)
        }
    </div>
        </div>
    );
};

export default Countries;