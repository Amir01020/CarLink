import React from 'react';
import Filter from '../components/admin_components/Filter';
import Button_foot from '../components/Button_foot';
import { IoIosMore } from 'react-icons/io';


const Users = () => {
    return (
        <div>
            <Filter />
            <div className="cont px-[10px] pt-5">
                <table class="min-w-full text-[8px] border-collapse ">
                    <thead>
                        <tr class="bg-[#FCFCFC] ">
                            <th class=" px-2 py-1 text-left">
                                <input type="checkbox" />
                            </th>
                            <th class=" px-2 py-1 text-left ">Name</th>
                            <th class=" px-2 py-1 text-left">From Email Addresses</th>
                            <th class=" px-2 py-1 text-left">Subject Contains</th>
                            <th class=" px-2 py-1 text-left">Is Exclusive</th>
                            <th class=" px-2 py-1 text-left">Status</th>
                            <th class=" px-2 py-1 text-left">Assigned User</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='bg-[#F7F6FE]'>
                            <td class=" px-2 py-3">
                                <input type="checkbox" />
                            </td>
                            <td class=" px-2 py-3 cursor-pointer text-blue-600 hover:underline">
                                L1
                            </td>
                            <td class=" px-2 py-3"></td>
                            <td class=" px-2 py-3">LeadFI</td>
                            <td class=" px-2 py-3">No</td>
                            <td class=" px-2 py-3 text-green-600">Active</td>
                            <td class=" px-2 py-3">Manager</td>
                        </tr>
                        <tr className='bg-[#FFFFFF]'>
                            <td class=" px-2 py-3">
                                <input type="checkbox" />
                            </td>
                            <td class=" px-2 py-3 cursor-pointer text-blue-600 hover:underline">
                                L1
                            </td>
                            <td class=" px-2 py-3"></td>
                            <td class=" px-2 py-3">LeadFI</td>
                            <td class=" px-2 py-3">No</td>
                            <td class=" px-2 py-3 text-green-600">Active</td>
                            <td class=" px-2 py-3">Manager</td>
                        </tr>
                        <tr className='bg-[#F7F6FE]'>
                            <td class=" px-2 py-3">
                                <input type="checkbox" />
                            </td>
                            <td class=" px-2 py-3 cursor-pointer text-blue-600 hover:underline">
                                L1
                            </td>
                            <td class=" px-2 py-3"></td>
                            <td class=" px-2 py-3">LeadFI</td>
                            <td class=" px-2 py-3">No</td>
                            <td class=" px-2 py-3 text-green-600">Active</td>
                            <td class=" px-2 py-3">Manager</td>
                        </tr>
                        <tr className='bg-[#FFFFFF]'>
                            <td class=" px-2 py-3">
                                <input type="checkbox" />
                            </td>
                            <td class=" px-2 py-3 cursor-pointer text-blue-600 hover:underline">
                                L1
                            </td>
                            <td class=" px-2 py-3"></td>
                            <td class=" px-2 py-3">LeadFI</td>
                            <td class=" px-2 py-3">No</td>
                            <td class=" px-2 py-3 text-green-600">Active</td>
                            <td class=" px-2 py-3">Manager</td>
                        </tr>
                        <tr className='bg-[#F7F6FE]'>
                            <td class=" px-2 py-3">
                                <input type="checkbox" />
                            </td>
                            <td class=" px-2 py-3 cursor-pointer text-blue-600 hover:underline">
                                L1
                            </td>
                            <td class=" px-2 py-3"></td>
                            <td class=" px-2 py-3">LeadFI</td>
                            <td class=" px-2 py-3">No</td>
                            <td class=" px-2 py-3 text-green-600">Active</td>
                            <td class=" px-2 py-3">Manager</td>
                        </tr>
                        <tr className='bg-[#FFFFFF]'>
                            <td class=" px-2 py-3">
                                <input type="checkbox" />
                            </td>
                            <td class=" px-2 py-3 cursor-pointer text-blue-600 hover:underline">
                                L1
                            </td>
                            <td class=" px-2 py-3"></td>
                            <td class=" px-2 py-3">LeadFI</td>
                            <td class=" px-2 py-3">No</td>
                            <td class=" px-2 py-3 text-green-600">Active</td>
                            <td class=" px-2 py-3">Manager</td>
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
    );
};



export default Users;