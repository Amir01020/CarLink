
import React from 'react';
import Filter from '../components/payments_componenrs/Filter'
import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa6';
import Button_foot from '../components/Button_foot';
import { IoIosMore } from 'react-icons/io';
import axios from 'axios';
const Payments = () => {

    return (
        <div >
            <Filter />
            <div className="cont px-5 py-5">
                <table className="min-w-full bg-white border border-gray-200 text-[8px]">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-300">

                            <th className="py-2 px-3 text-left">
                                <div className="flex items-center gap-1">
                                    <input type="checkbox" className="h-3 w-3" />Date
                                </div>
                                
                            </th>
                            <th className="py-2 px-3 text-left">Direction</th>
                            <th className="py-2 px-3 text-left">Carrier</th>
                            <th className="py-2 px-3 text-left">Order</th>
                            <th className="py-2 px-3 text-left">Amount</th>
                            <th className="py-2 px-3 text-left">Amount Paid</th>
                            <th className="py-2 px-3 text-left">Type</th>
                            <th className="py-2 px-3 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b bg-[#F7F6FE]">

                            <td className="py-2 px-3">
                                <div className="flex items-center gap-1">
                                    <input type="checkbox" className="h-3 w-3" />02.11.2023
                                </div>
                            </td>
                            <td className="py-2 px-3">Carrier2 broker</td>
                            <td className="py-2 px-3"></td>
                            <td className="py-2 px-3">
                                <p className='text-[#56ca00]'>303465169-RY</p>
                                <p>Steven the (completed)</p>
                                <p className="text-red-500">Total: $75</p>
                            </td>
                            <td className="py-2 px-3 text-blue-500">150</td>
                            <td className="py-2 px-3 text-[#56ca00]">100</td>
                            <td className="py-2 px-3">Credit Card</td>
                            <td className="py-2 px-3 text-[#56ca00] ">
                                <div className="px-2 py-1 rounded-full  w-fit bg-[#F0FFF2]">
                                    paid
                                </div>
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



export default Payments;