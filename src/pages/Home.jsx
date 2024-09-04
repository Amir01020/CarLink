import React, { useState } from 'react';

import { CiCalendar, CiDark } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoChatbubbleOutline, IoCheckmark } from "react-icons/io5";
import { MdOutlineLightMode } from 'react-icons/md';
import ListCard from '../components/ListCard';
import { Link } from 'react-router-dom';

const cardListArr = [
    {
        text1: '215',
        text2: 'Lead',
        img: '/car.svg'
    },
    {
        text1: '215',
        text2: 'Quote',
        img: '/car.svg'
    },
    {
        text1: '215',
        text2: 'Order',
        img: '/car.svg'
    },
    {
        text1: '215',
        text2: 'Dispatches Today',
        img: '/car.svg'
    },
    {
        text1: '215',
        text2: 'Pick-up Today',
        img: '/car.svg'
    },
    {
        text1: '215',
        text2: 'Deliveries Today',
        img: '/car.svg'
    },
];

const Home = () => {
    const [topic, setTopic] = useState(true);








    return (
        

        <>
            <div className="flex">
                <div className="h-[calc(100vh-85px)] flex flex-col justify-between items-center w-[300px] p-7">
                    <div className="w-full">
                        <Link  to='/quotes/add' className='link_color  text-[#9298A4] flex items-center gap-5 mb-5'>
                            <img className='w-[30px]' src="/createQuote.svg" alt="Create quote" />Create quote
                        </Link>
                        <a href="#" className='link_color text-[#9298A4] flex items-center gap-5 mb-5'>
                            <img className='w-[30px]' src="/newLeads.svg" alt="New leads" />New leads
                        </a>
                        <a href="#" className='link_color text-[#9298A4] flex items-center gap-5 mb-5'>
                            <img className='w-[30px]' src="/postedToCdOrders.svg" alt="Posted to cd orders" />Posted to cd orders
                        </a>
                        <a href="#" className='link_color text-[#9298A4] flex items-center gap-5 mb-5'>
                            <img className='w-[30px]' src="/unreadMessages.svg" alt="Unread messages" />Unread messages
                        </a>
                        <a href="#" className='link_color text-[#9298A4] flex items-center gap-5 mb-5'>
                            <img className='w-[30px]' src="/openTickets.svg" alt="Open tickets" />Open tickets
                        </a>
                        <a href="#" className='link_color text-[#9298A4] flex items-center gap-5 mb-5'>
                            <img className='w-[30px]' src="/driversManage.svg" alt="Drivers manage" />Drivers manage
                        </a>
                    </div>
                    <div className="w-full flex flex-col items-center gap-10">
                        <div className="w-[150px] h-[150px] flex items-end justify-center py-5 relative rounded-xl bg-[#3f8cff35]">
                            <img src="/home_img.svg" className='absolute w-4/5 -top-1/4' alt="" />
                            <button className='flex items-center gap-2 text-white text-[14px] justify-center rounded-lg w-4/5 py-3 bg-[#3F8CFF]'>
                                <IoChatbubbleOutline className='text-[20px]' />
                                Support
                            </button>
                        </div>
                        <div onClick={()=>setTopic(!topic)} className="flex w-full relative justify-between py-4 cursor-pointer px-5 rounded-[20px] bg-[#EDF1F7]">
                            <p className='flex items-center  text-[#979797] gap-2 text-[14px]'>
                                <CiDark className='text-[20px]' />
                                Dark
                            </p>
                            <p className='flex text-[#979797]  items-center gap-2 text-[14px]'>
                                <MdOutlineLightMode className='text-[20px]' />
                                Light
                            </p>
                            <div className={`absolute w-1/2 h-full ${topic?'translate-x-full':'translate-x-0'} left-0 flex items-center pl-5 shadow-lg  bg-[#3F8CFF] top-0  rounded-[20px]`}>
                                <p className={`${!topic?'flex':'hidden'} items-center  text-[#fff] gap-1 text-[14px]`}>
                                    <CiDark className='text-[25px]' />
                                    Dark
                                </p>
                                <p className={`${!topic?'hidden':'flex'} items-center  text-[#fff] gap-1 text-[14px]`}>
                                    <MdOutlineLightMode className='text-[20px]' />
                                    Light
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[calc(100vh-85px)] w-full bg-[#F6F6F8] overflow-auto">
                    <h2 className='text-[20px] font-[600] mb-10 mt-5 ml-10'>Welcome Alan</h2>
                    <div className="mx-10 flex justify-between">
                        {cardListArr.map((item, index) => (
                            <ListCard key={index} text1={item.text1} text2={item.text2} img={item.img} />
                        ))}
                    </div>
                    <h2 className='text-[36px] font-[600] ml-10 mt-10'>
                        Performance Overview
                    </h2>
                    <div className="flex px-10 mt-5 gap-5">
                        <img src="/img_1.png" className='w-1/2' alt="" />
                        <div className="w-1/2">
                            <div className="flex justify-end gap-5 w-full mb-5">
                                <div className="bg-[#0047E1] cursor-pointer rounded-md items-center gap-6  px-4 py-3 text-white flex">
                                    <p className='flex gap-3 items-center'>
                                        <CiCalendar />
                                        Range

                                    </p>
                                    <IoIosArrowDown />
                                </div>
                                <div className="bg-[#0047E1] cursor-pointer rounded-md items-center gap-6  px-4 py-3 text-white flex">
                                    <p className='flex gap-3 items-center'>
                                        <HiOutlineUsers />
                                        Agents

                                    </p>
                                    <IoIosArrowDown />
                                </div>
                            </div>
                            <div className="w-full bg-white flex justify-between items-center px-5 py-7">
                                <div className="">

                                    <div className="flex gap-10 p-2 mb-5 rounded-md border-[#D5D5D5] border-[1px]">
                                        <div className="w-5 h-5 bg-[#4880FF] flex items-center justify-center">
                                            <IoCheckmark className="text-[16px] text-white" />
                                        </div>
                                        <p className='text-30px'>Lead</p>
                                    </div>
                                    <div className="flex gap-10 p-2 mb-5 rounded-md border-[#D5D5D5] border-[1px]">
                                        <div className="w-5 h-5 bg-[#FF4F00] flex items-center justify-center">
                                            <IoCheckmark className="text-[16px] text-white" />
                                        </div>
                                        <p className='text-30px'>Order</p>
                                    </div>
                                    <div className="flex gap-10 p-2 rounded-md border-[#D5D5D5] border-[1px]">
                                        <div className="w-5 h-5 bg-[#56CA00] flex items-center justify-center">
                                            <IoCheckmark className="text-[16px] text-white" />
                                        </div>
                                        <p className='text-30px'>Done</p>
                                    </div>
                                </div>

                                <img src="/diogram.svg" className='w-1/2' alt="" />

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
        </>
    );
};

export default Home;
