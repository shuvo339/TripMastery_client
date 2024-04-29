import { Fade } from "react-awesome-reveal";

const About = () => {
    return (
        <div className="my-16"> 
            <h2 className="text-4xl font-bold text-center pb-12">About Us</h2>
            <div className="flex flex-col md:flex-row gap-8">
                <Fade direction="right">
                <div>
                <h2 className="text-2xl font-bold">Explore the Unseen with TripMastery</h2>
                    <p className="py-2 text-justify">Welcome to TripMastery, your ultimate guide to exploring the enchanting wonders of Southeast Asia. Since our inception in 2022, TripMastery has been dedicated to providing unparalleled travel experiences, unlocking the treasures of this culturally rich and diverse region.</p>
    
                    <p className="py-3 text-justify"><span className="text-lg font-semibold">Our Mission: </span>At TripMastery, we believe that travel is not just about visiting new places, but about immersing oneself in unforgettable journeys that inspire, educate, and transform. Our mission is to empower travelers to embark on extraordinary adventures, discover hidden gems, and create lifelong memories.</p>
                    
                    <p className="py-3 text-justify"><span className="text-lg font-semibold">Explore Southeast Asia: </span>Embark on a voyage of discovery as you delve into the captivating landscapes, vibrant cultures, and ancient traditions of Southeast Asia. From the pristine beaches of Thailand and the lush jungles of Indonesia to the majestic temples of Cambodia and the bustling cities of Vietnam, our curated itineraries promise an authentic and immersive experience like no other.</p>
                   
                    <p className="py-3 text-justify"><span className="text-lg font-semibold">Expert Guidance: </span>With a team of seasoned travel experts and local guides, TripMastery ensures that every aspect of your journey is meticulously planned and executed. Whether you're seeking adrenaline-pumping adventures, spiritual retreats, or gastronomic delights, our knowledgeable guides are here to help you navigate through the diverse tapestry of Southeast Asia with ease.</p>
                </div>
                </Fade>
                <Fade direction="left">
                <div className="grid grid-rows-4">
                    <div>
                    <p className="text-justify py-2"><span className="text-lg font-semibold">Sustainable Tourism: </span>At TripMastery, we are committed to promoting responsible and sustainable tourism practices that preserve the natural beauty and cultural heritage of Southeast Asia for future generations. We partner with local communities and eco-friendly initiatives to minimize our environmental footprint and support the livelihoods of indigenous peoples.</p>
                    </div>
                    <div className="row-span-2">
                        <img className="w-full min-h-72 md:h-full lg:h-72 rounded-lg" src="https://i.ibb.co/92dLQ3W/about2.jpg" alt="" />
                    </div>
                    <div>
                    <p className="pt-3 text-justify"><span className="text-lg font-semibold">Join Us on the Journey: </span>Embark on an unforgettable voyage of discovery with TripMastery and unlock the secrets of the most captivating destinations of Southeast Asia. Whether you are a seasoned traveler or a first-time adventurer, let us be your guide to a world of endless possibilities.</p>
                    </div>
                </div>
                </Fade>
            </div>
        </div>
    );
};

export default About;