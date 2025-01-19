import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './Features.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import yoga from '../../assets/yoga.png'
import pilates from '../../assets/pillates.jpg'
import barre from '../../assets/barre.jpeg'
import fittness from '../../assets/fitness.png'
import hiit from '../../assets/HIIT.jpeg'
import ct from '../../assets/circuitraining (1).webp'
import mind from '../../assets/mindfulness.png'
import self from '../../assets/self-care.png'

const Features = () => {
    return (
        <div>
            <div className='lg:max-w-5xl lg:mx-auto text-center items-center'>
                <h1 className='text-5xl font-bold libreFranklin mt-20'>FIND WHAT MOVES YOU</h1>
                <p className='text-gray-600 my-6'>Whether you’re a complete beginner or you want to step up your routine, get the full studio experience at home with thousands of classes for body, mind, and spirit.</p>
            </div>
            <div className='max-w-6xl mx-auto mb-20'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    breakpoints={{
                        // When the screen width is >= 640px
                        640: {
                          slidesPerView: 2,
                        },
                        // When the screen width is >= 768px
                        768: {
                          slidesPerView: 3,
                        },
                        // When the screen width is >= 1024px
                        1024: {
                          slidesPerView: 4,
                        },
                      }}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper">
                    <SwiperSlide>
                        <div className='text-center bg-[#e2ff31] bg-opacity-50 rounded-tl-3xl rounded-br-3xl space-y-2 mx-10'>
                            <img className='rounded-tl-3xl rounded-br-3xl h-[114px] w-full' src={yoga} alt="yoga" />
                            <p className='text-black pb-1'>YOGA</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text-center bg-[#e2ff31] bg-opacity-50 rounded-tl-3xl rounded-br-3xl space-y-2 mx-10'>
                            <img className='rounded-tl-3xl rounded-br-3xl h-[114px] w-full' src={pilates} alt="yoga" />
                            <p className='text-black pb-1'>PILATES</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text-center bg-[#e2ff31] bg-opacity-50 rounded-tl-3xl rounded-br-3xl space-y-2 mx-10'>
                            <img className='rounded-tl-3xl rounded-br-3xl h-[114px] w-full' src={barre} alt="yoga" />
                            <p className='text-black pb-1'>BARRE</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text-center bg-[#e2ff31] bg-opacity-50 rounded-tl-3xl rounded-br-3xl space-y-2 mx-10'>
                            <img className='rounded-tl-3xl rounded-br-3xl h-[114px] w-full' src={fittness} alt="yoga" />
                            <p className='text-black pb-1'>WEIGHT LOSE</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text-center bg-[#e2ff31] bg-opacity-50 rounded-tl-3xl rounded-br-3xl space-y-2 mx-10'>
                            <img className='rounded-tl-3xl rounded-br-3xl h-[114px] w-full' src={hiit} alt="yoga" />
                            <p className='text-black pb-1'>HIIT</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text-center bg-[#e2ff31] bg-opacity-50 rounded-tl-3xl rounded-br-3xl space-y-2 mx-10'>
                            <img className='rounded-tl-3xl rounded-br-3xl h-[114px] w-full' src={ct} alt="yoga" />
                            <p className='text-black pb-1'>CIRCUIT TRAINING</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text-center bg-[#e2ff31] bg-opacity-50 rounded-tl-3xl rounded-br-3xl space-y-2 mx-10'>
                            <img className='rounded-tl-3xl rounded-br-3xl h-[114px] w-full' src={mind} alt="yoga" />
                            <p className='text-black pb-1'>MINDFULNESS</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text-center bg-[#e2ff31] bg-opacity-50 rounded-tl-3xl rounded-br-3xl space-y-2 mx-10'>
                            <img className='rounded-tl-3xl rounded-br-3xl h-[114px] w-full' src={self} alt="yoga" />
                            <p className='text-black pb-1'>SELF-CARE</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Features;