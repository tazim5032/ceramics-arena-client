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
        <div className="mx-[1%] sm:mx-[3%] pt-8">
            <Swiper navigation={true} loop={true} modules={[Navigation, Autoplay]} className="mySwiper" autoplay={{
                delay: 2500,
                disableOnInteraction: false
            }}>
                <SwiperSlide>

                    <div className="h-[calc(100vh-200px)] bg-gradient-to-tr from-[#000000CC] to-[#00000059]" >

                        <div className=' absolute top-1/3 md:left-1/4 lg:left-1/4 left-10 space-y-4'>
                            <h1 className='text-5xl font-bold  text-white'

                            >Terra Cotta</h1>
                            <p className='text-white  text-xl w-[90%] md:w-4/5 lg:w-3/4'>
                            Experience the timeless elegance of Terra Cotta – where 
                            tradition meets innovation in every hue.
                                </p>
                        </div>
                        <img src={'https://i.ibb.co/bHj97YB/ceramics1.png'} className=' h-full w-full object-cover mix-blend-overlay' alt="" />

                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[calc(100vh-200px)] bg-gradient-to-tr from-[#000000CC] to-[#00000059]">

                        <div className='space-y-4 absolute top-1/3 md:left-1/4 lg:left-1/4 left-10'>
                            <h1 className='text-5xl font-bold  text-white'>Folk Crafts</h1>
                            <p className='text-white text-xl w-[90%] md:w-4/5 lg:w-3/4'>
                            Embrace the soulful artistry of Folk Crafts: Where culture and creativity intertwine.</p>
                        </div>
                        <img src={'https://i.ibb.co/N9qnRDS/ceramics5.png'} className=' h-full w-full object-cover mix-blend-overlay' alt="" />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[calc(100vh-200px)] bg-gradient-to-tr from-[#000000CC] to-[#00000059]">

                        <div className='space-y-4  absolute top-1/3 md:left-1/4 lg:left-1/4 left-10'>
                            <h1 className='text-5xl font-bold  text-white'>Stoneware</h1>
                            <p className='text-white text-xl w-[90%] md:w-4/5 lg:w-3/4'>
                            Elevate your space with Stoneware: Crafted to perfection, inspired by nature's beauty.</p>
                        </div>
                        <img src={'https://i.ibb.co/bsZBvgJ/stone1.png'} className=' h-full w-full object-cover mix-blend-overlay' alt="" />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-gradient-to-tr from-[#000000CC] to-[#00000059] h-[calc(100vh-200px)]">

                        <div className='space-y-4 absolute top-1/3 md:left-1/4 lg:left-1/4 left-10'>
                            <h1 className='text-5xl font-bold  text-white'>Porcelain</h1>
                            <p className='text-white text-xl w-[90%] md:w-4/5 lg:w-3/4'>
                            Porcelain: Where elegance meets durability, creating timeless beauty for your home.</p>
                        </div>
                        <img src={'https://i.ibb.co/fxVqn8M/porcelain1.png'} className=' h-full w-full object-cover mix-blend-overlay' alt="" />

                    </div>
                </SwiperSlide>

            </Swiper>


        </div>
    );
};

export default Slider;