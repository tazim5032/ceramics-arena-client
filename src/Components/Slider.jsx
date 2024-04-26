// Import Swiper React components


// Import Swiper styles

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';


import 'swiper/swiper-bundle.css';




// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

const Slider = () => {




    return (
        <div className="mx-[1%] md:mx-[3%] pt-8">
            <Swiper navigation={true} loop={true} modules={[Navigation, Autoplay]} className="mySwiper" autoplay={{
                delay: 2500,
                disableOnInteraction: false
            }}>
                <SwiperSlide>

                    <div className="h-[calc(100vh-200px)] bg-gradient-to-tr from-[#000000CC] to-[#00000059]" >

                        <div className=' absolute top-1/3 md:left-1/4 lg:left-1/4 left-10 space-y-4'>
                            <h1 className='text-5xl font-bold  text-white'

                            >Modern Downtown Loft</h1>
                            <p className='text-white w-[90%] md:w-4/5 lg:w-3/4'>
                                Discover upscale living at our Modern Townhouses. Elevate your lifestyle with sleek architecture and premium amenities, creating an unparalleled residential experience.</p>
                        </div>
                        <img src={'https://i.ibb.co/bHj97YB/ceramics1.png'} className=' h-full w-full object-cover mix-blend-overlay' alt="" />

                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[calc(100vh-200px)] bg-gradient-to-tr from-[#000000CC] to-[#00000059]">

                        <div className='space-y-4 absolute top-1/3 md:left-1/4 lg:left-1/4 left-10'>
                            <h1 className='text-5xl font-bold  text-white'>Family Houses</h1>
                            <p className='text-white w-[90%] md:w-4/5 lg:w-3/4'>
                                Let us help you create lasting memories in a home designed
                                for your family happiness and well-being.</p>
                        </div>
                        <img src={'https://i.ibb.co/N9qnRDS/ceramics5.png'} className=' h-full w-full object-cover mix-blend-overlay' alt="" />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[calc(100vh-200px)] bg-gradient-to-tr from-[#000000CC] to-[#00000059]">

                        <div className='space-y-4  absolute top-1/3 md:left-1/4 lg:left-1/4 left-10'>
                            <h1 className='text-5xl font-bold  text-white'>Luxury Apartments</h1>
                            <p className='text-white w-[90%] md:w-4/5 lg:w-3/4'>
                                Indulge in the epitome of luxury living, where every detail is designed with care to provide you with an unparalleled lifestyle experience.</p>
                        </div>
                        <img src={'https://i.ibb.co/yqYc2kf/ceramics3.png'} className=' h-full w-full object-cover mix-blend-overlay' alt="" />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-gradient-to-tr from-[#000000CC] to-[#00000059] h-[calc(100vh-200px)]">

                        <div className='space-y-4 absolute top-1/3 md:left-1/4 lg:left-1/4 left-10'>
                            <h1 className='text-5xl font-bold  text-white'>Rent The Right Vacation Home</h1>
                            <p className='text-white w-[90%] md:w-4/5 lg:w-3/4'>
                                Unwind in your dream getaway. Our Vacation Homes 
                                beckon with comfort and charm, offering the perfect 
                                backdrop for unforgettable moments.
                                 Experience relaxation redefined as you 
                                 indulge in the ultimate escape.</p>
                        </div>
                        <img src={'https://i.ibb.co/xC2Nc99/ceramics4.png'} className=' h-full w-full object-cover mix-blend-overlay' alt="" />

                    </div>
                </SwiperSlide>

            </Swiper>


        </div>
    );
};

export default Slider;