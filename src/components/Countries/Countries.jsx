import { useEffect, useState } from "react";
import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://trip-mastery-server.vercel.app/countries")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);
  return (
    <div className="my-16">

      <div className="App">
        <h1 className="pb-8 font-bold text-4xl text-center">
          Countries:{" "}
          <span className=" text-cyan-600 ">
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[
                "Bangladesh",
                "Thailand",
                "Malaysia",
                "Indonesia",
                "Vietnam",
                "Cambodia",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
      </div>
     
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-8">
        {countries.map((country) => ( 
          <div
            key={country._id}
            className="p-4 shadow-lg rounded-xl flex flex-col"
          >
            <img
              className="rounded-full mx-auto size-80"
              src={country.image}
              alt=""
            />
            <div className="bg-cyan-500 h-16 flex justify-center items-center">
              <h2 className="text-2xl font-bold">{country.country_name}</h2>
            </div>
            <p className="opacity-90 text-justify py-3 flex-1">
              {country.description}
            </p>
            <div className="my-2 flex justify-center items-center">
              <Link to={`countryspots/${country.country_name}`}>
                {" "}
                <button className="btn w-full mx-auto bg-cyan-600 text-white">
                  VISIT SPOTS
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;
