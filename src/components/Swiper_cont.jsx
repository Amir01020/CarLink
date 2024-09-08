import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { IoPencilSharp } from "react-icons/io5";
import { IoTrashOutline } from "react-icons/io5";

const Swiper_cont = () => {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}

                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper my-2 min-h-[100px]"
            >
                <SwiperSlide className=''>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                            <h6 className='text-[7px]'>
                                Alan
                            </h6>
                            <p className='text-[6px]'>02/29/2024 03:03 PM</p>
                        </div>
                        <div className="flex gap-1">
                            <button className='p-1 bg-[#4880FF] rounded-[4px] text-white'><IoPencilSharp className='text-[8px]' /></button>
                            <button className='p-1 bg-[#FF4F00] rounded-[4px] text-white'><IoTrashOutline className='text-[8px]' /></button>
                        </div>
                    </div>
                    <div className="h-10 mt-1 rounded-md px-2 py-1 bg-[#ECF4FF]">
                        <p className='text-[6px] text-[#7D7D7D]'>

                            (224) 387-1656Pick up Friday or SaturdayDelivery estimeate 5 to7 daysEnclosed 8 vehicle
                        </p>
                    </div>
                    <p className='flex justify-end text-[6px] text-[#FF4F00]'>delete</p>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                            <h6 className='text-[7px]'>
                                Alan
                            </h6>
                            <p className='text-[6px]'>02/29/2024 03:03 PM</p>
                        </div>
                        <div className="flex gap-1">
                            <button className='p-1 bg-[#4880FF] rounded-[4px] text-white'><IoPencilSharp className='text-[8px]' /></button>
                            <button className='p-1 bg-[#FF4F00] rounded-[4px] text-white'><IoTrashOutline className='text-[8px]' /></button>
                        </div>
                    </div>
                    <div className="h-10 mt-1 rounded-md px-2 py-1 bg-[#ECF4FF]">
                        <p className='text-[6px] text-[#7D7D7D]'>

                            (224) 387-1656Pick up Friday or SaturdayDelivery estimeate 5 to7 daysEnclosed 8 vehicle
                        </p>
                    </div>
                    <p className='flex justify-end text-[6px] text-[#FF4F00]'>delete</p>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                            <h6 className='text-[7px]'>
                                Alan
                            </h6>
                            <p className='text-[6px]'>02/29/2024 03:03 PM</p>
                        </div>
                        <div className="flex gap-1">
                            <button className='p-1 bg-[#4880FF] rounded-[4px] text-white'><IoPencilSharp className='text-[8px]' /></button>
                            <button className='p-1 bg-[#FF4F00] rounded-[4px] text-white'><IoTrashOutline className='text-[8px]' /></button>
                        </div>
                    </div>
                    <div className="h-10 mt-1 rounded-md px-2 py-1 bg-[#ECF4FF]">
                        <p className='text-[6px] text-[#7D7D7D]'>

                            (224) 387-1656Pick up Friday or SaturdayDelivery estimeate 5 to7 daysEnclosed 8 vehicle
                        </p>
                    </div>
                    <p className='flex justify-end text-[6px] text-[#FF4F00]'>delete</p>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                            <h6 className='text-[7px]'>
                                Alan
                            </h6>
                            <p className='text-[6px]'>02/29/2024 03:03 PM</p>
                        </div>
                        <div className="flex gap-1">
                            <button className='p-1 bg-[#4880FF] rounded-[4px] text-white'><IoPencilSharp className='text-[8px]' /></button>
                            <button className='p-1 bg-[#FF4F00] rounded-[4px] text-white'><IoTrashOutline className='text-[8px]' /></button>
                        </div>
                    </div>
                    <div className="h-10 mt-1 rounded-md px-2 py-1 bg-[#ECF4FF]">
                        <p className='text-[6px] text-[#7D7D7D]'>

                            (224) 387-1656Pick up Friday or SaturdayDelivery estimeate 5 to7 daysEnclosed 8 vehicle
                        </p>
                    </div>
                    <p className='flex justify-end text-[6px] text-[#FF4F00]'>delete</p>
                </SwiperSlide>

            </Swiper>
        </>
    );
};



export default Swiper_cont;