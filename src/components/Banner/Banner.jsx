import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './Banner.css';
// import required modules
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Banner = () => {
    return (
        <div className='my-8'>
        <Swiper className='rounded-xl' navigation={true} pagination={{clickable:true}} modules={[Navigation, Autoplay, Pagination]} loop={true} autoplay={{delay:3000}}>
          <SwiperSlide><div data-aos="zoom-out" data-aos-duration="2000"  style={{backgroundImage: `url("https://i.ibb.co/6PGx1vk/bali.jpg")`}} className='object-cover w-full bg-cover bg-no-repeat h-[500px] rounded-lg flex flex-col justify-center items-center gap-3'>
        
          <div className='bg-black bg-opacity-40 rounded-lg'>
                <h2 data-aos="fade-down" data-aos-duration="1000" className='text-3xl lg:text-4xl text-white font-bold px-6 py-3'>Southeast Asia: Where Culture Meets Nature</h2>
                <p  data-aos="fade-up" data-aos-duration="1000" className='text-white max-w-[600px] px-3 mx-auto pb-3 opacity-90'>Embark on a journey through Southeast Asia, a region rich in culture, history, and breathtaking landscapes.</p>
            </div>
           
            </div>
        </SwiperSlide>
          <SwiperSlide><div data-aos-delay="2900" data-aos="zoom-out" data-aos-duration="2000" style={{backgroundImage: `url("https://i.ibb.co/17743nV/phiphi-1.jpg")`}} className='object-cover w-full bg-cover h-[500px]  bg-no-repeat rounded-lg flex flex-col justify-center items-center gap-3'>
          <div className=' bg-black bg-opacity-40 rounded-lg'>
                <h2 data-aos="fade-left" data-aos-delay="3000" data-aos-duration="1000"  className='text-3xl lg:text-4xl text-white font-bold px-6 py-3'>Explore the World: Your Adventure Awaits</h2>
                <p  data-aos="fade-right" data-aos-delay="3000" data-aos-duration="1000" className='text-white max-w-[600px] px-3 mx-auto pb-3 opacity-90'>Experience the beauty of travel with unforgettable destinations. From beaches to ancient temples, a journey that promises adventure.</p>
            </div>
            </div>
        </SwiperSlide>
          <SwiperSlide><div data-aos-delay="5900" data-aos="zoom-out" data-aos-duration="2000"  style={{backgroundImage: `url("https://i.ibb.co/3ktyytF/halong.jpg")`}} className='object-cover w-full bg-cover h-[500px] bg-no-repeat rounded-lg flex flex-col justify-center items-center gap-3'>
          <div className=' bg-black bg-opacity-40 rounded-lg'>
                <h2 data-aos-delay="6000" data-aos="fade-down" data-aos-duration="1000" className='text-3xl lg:text-4xl text-white font-bold px-6 py-3'>Discover the Wonders of Southeast Asia</h2>
                <p data-aos-delay="6000"  data-aos="fade-up" data-aos-duration="1000" className='text-white max-w-[600px] px-3 mx-auto pb-3 opacity-90'>Experience the harmony of culture and nature in Southeast Asia. Wander through temples, trek lush rainforests, and relax on pristine beaches. </p>
            </div>
            </div>
        </SwiperSlide>
        </Swiper>
      </div>
    );
};


export default Banner;