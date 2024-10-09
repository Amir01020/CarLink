import React from 'react';
import Filter from '../components/messages_components/Filter'
import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa6';
import Button_foot from '../components/Button_foot';
import { IoIosMore } from 'react-icons/io';
import axios from 'axios';

const lids = {
    
}


const Messages = () => {
   
    return (
        <div >
            <Filter />
            <div className="cont px-5">
                <table className="min-w-full   mt-5 border-gray-200">
                    <thead>
                        <tr className="w-full border-b-[0.5px] border-gray-300 text-[8px]">
                            <th className="py-2 px-0 text-left"><input type="checkbox" className="h-3 w-3" /> </th>
                            <th className="py-2 px-0 text-left">From</th>
                            <th className="py-2 px-0 text-left">Subject</th>
                            <th className="py-2 px-0 text-right"></th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr className=" text-[8px] border-b-[0.5px] border-gray-300 ">
                            <td className="py-2 px-0 text-left">
                                <div className="flex items-center gap-1">
                                    <input type="checkbox" className="h-3 w-3" />
                                    <div className="relative w-4 h-4">
                                        <CiStar className='absolute text-[16px] opacity-0' />
                                        <FaStar className='absolute text-[16px] text-yellow-500 opacity-100' />
                                    </div>
                                    <span className="bg-blue-500 text-white px-1 py-0.5 rounded-full text-[8px]">NEW</span>
                                </div>
                            </td>
                            <td className="py-2 px-0 text-left">
                                <p>
                                    do-not-reply@centraldispatch.com
                                </p>
                                <div className="text-green-500 mt-1">support</div>
                            </td>
                            <td className="py-2 px-0 text-left">
                                New request from LD TRANSPORTATION CORP<br />

                            </td>
                            <td className="py-2 px-0 text-right text-gray-500">
                                02.08.2014 04:16 PM
                            </td>
                        </tr>
                        <tr className=" text-[8px] border-b-[0.5px] bg-[#F7F6FE] border-gray-300 ">
                            <td className="py-2 px-0 text-left">
                                <div className="flex items-center gap-1">
                                    <input type="checkbox" className="h-3 w-3" />
                                    <div className="relative w-4 h-4">
                                        <CiStar className='absolute text-[16px] opacity-100' />
                                        <FaStar className='absolute text-[16px] text-yellow-500 opacity-0' />
                                    </div>
                                    <span className="bg-blue-500 opacity-0 text-white px-1 py-0.5 rounded-full text-[8px]">NEW</span>
                                </div>
                            </td>
                            <td className="py-2 px-0 text-left">
                                <p>
                                    do-not-reply@centraldispatch.com
                                </p>
                                <div className="text-green-500 mt-1">support</div>
                            </td>
                            <td className="py-2 px-0 text-left">
                                New request from LD TRANSPORTATION CORP<br />

                            </td>
                            <td className="py-2 px-0 text-right text-gray-500">
                                02.08.2014 04:16 PM
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex justify-between items-center mt-5 mb-[10px]">
                    <p className='text-[10px]'>Showing 1-09 of 78</p>
                    <div className="border-[0.6px] overflow-hidden border-[#D5D5D5] rounded-md flex items-center justify-center">
                        <div className="hover:bg-[#e4e2e2] overflow-hidden cursor-pointer border-r-[1px] border-r-[#979797]">
                            <img src="/arrow.svg" className='mx-[20px] w-[8px] my-[5px] rotate-[180deg]' alt="" />
                        </div>
                        <div className="hover:bg-[#e4e2e2] overflow-hidden cursor-pointer">
                            <img src="/arrow.svg" className='mx-[20px] w-[8px] my-[5px]' alt="" />
                        </div>
                    </div>
                </div>
                <footer className='cont px-[10px]' >
                    <div className="flex items-center gap-[34px] border-t-[1px] border-[#979797] py-4">
                        <div
                            className="hover:bg-[#4880FF] hover:text-[#fff] flex items-center justify-center cursor-pointer w-[30px] h-[30px]  rounded-full">
                            <IoIosMore className=' text-[20px] transition-none ' />

                        </div>
                        <div className={`${true ? 'flex  ' : 'hidden'} gap-2`}>
                            <Button_foot text='REASSIGN' />
                            <Button_foot text='SMS' />
                            <Button_foot text='EMAIL' />
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};



export default Messages;