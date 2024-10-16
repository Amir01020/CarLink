import React, { useState } from 'react';
import { CiCalendar, CiDark } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoCheckmark } from "react-icons/io5";
import ListCard from '../components/ListCard';
import axios from 'axios';

const cardListArr = [
    { text1: '215', text2: 'Lead', img: '/car.svg' },
    { text1: '215', text2: 'Quote', img: '/dolar.svg' },
    { text1: '215', text2: 'Order', img: '/order.svg' },
    { text1: '215', text2: 'Dispatches Today', img: '/DispatchesToday.svg' },
    { text1: '215', text2: 'Pick-up Today', img: '/Pick-upToday.svg' },
    { text1: '215', text2: 'Deliveries Today', img: '/deliveriesToday.svg' },
];

const Home = () => {
    const [topic, setTopic] = useState(true);
    const host = 'https://api.carlink.pro';
    const authentication_get = '/api/v1/Authentication/ValidateToken';
    const urls = `${host + authentication_get}`;

    const post = () => {
        axios.post(urls).then(res => console.log(res));
    };

    return (
        <div className="w-full bg-[#F6F6F8] h-[100vh] overflow-auto">
            <div className="cont">
                <h2 className="text-[14px] leptop:text-[20px] font-[600] mb-5 mt-3 ml-5">
                    Welcome Alan
                </h2>

                <div className="mx-5 flex justify-between">
                    {cardListArr.map((item, index) => (
                        <ListCard key={index} text1={item.text1} text2={item.text2} img={item.img} />
                    ))}
                </div>

                <h2 className="text-[14px] leptop:text-[20px] font-[600] ml-5 mt-3">
                    Performance Overview
                </h2>

                <div className="flex px-5 mt-5 gap-5">
                    <img src="/img_1.png" className="w-1/2" alt="" />
                    <div className="w-1/2">
                        <div className="flex justify-end gap-2 w-full mb-2">
                            <div className="bg-[#0047E1] cursor-pointer rounded-md items-center gap-2 px-2 h-fit py-2 text-white flex">
                                <p className="flex gap-1 text-[8px] leptop:text-[12px] items-center">
                                    <CiCalendar className="text-[10px] leptop:text-[14px]" />
                                    Range
                                </p>
                                <IoIosArrowDown className="text-[12px] leptop:text-[16px]" />
                            </div>

                            <div className="bg-[#0047E1] cursor-pointer rounded-md items-center gap-2 px-2 h-fit py-2 text-white flex">
                                <p className="flex gap-1 text-[8px] leptop:text-[12px] items-center">
                                    <HiOutlineUsers className="text-[10px] leptop:text-[14px]" />
                                    Agents
                                </p>
                                <IoIosArrowDown className="text-[12px] leptop:text-[16px]" />
                            </div>
                        </div>

                        <div className="w-full bg-white flex gap-5 justify-between rounded-xl items-center px-5 py-4">
                            <div className="w-1/2">
                                {['Lead', 'Order', 'Done'].map((status, i) => (
                                    <div
                                        key={status}
                                        className="flex gap-2 items-center p-2 mb-4 rounded-md border-[1px] border-[#D5D5D5]"
                                    >
                                        <div
                                            className={`w-3 h-3 ${i === 0
                                                    ? 'bg-[#4880FF]'
                                                    : i === 1
                                                        ? 'bg-[#FF4F00]'
                                                        : 'bg-[#56CA00]'
                                                } flex items-center justify-center`}
                                        >
                                            <IoCheckmark className="text-[10px] leptop:text-[14px] text-white" />
                                        </div>
                                        <p className="text-[10px] leptop:text-[14px]">{status}</p>
                                    </div>
                                ))}
                            </div>
                            <img src="/diogram.svg" className="w-1/2" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
