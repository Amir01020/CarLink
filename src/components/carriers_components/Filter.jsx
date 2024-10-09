import React, { useState } from 'react';
import { FaArrowRotateLeft, FaCirclePlus } from "react-icons/fa6";
import {  IoIosSearch } from 'react-icons/io';
import { RiArrowDownWideLine } from 'react-icons/ri';
import Search_elem from '../Search_elem';

const Filter = () => {
    const [open, setOpen] = useState({
        name: false,
        city: false,
        state: false,
        search: false,
        user: false,
    });
    const open_func = (key) => {
        setOpen(prevState => ({
            ...prevState,  // сохраняем остальные значения
            [key]: !prevState[key]  // инвертируем значение нужного ключа
        }));

    }


    return (
        <div className='mt-5  flex justify-between h-[25px] '>
            <div className="h-full bg-[#F9F9FB] flex border-[0.5px] border-[#979797] rounded-[3px] ">
                <div className="flex px-2 h-full justify-center items-center">
                    <img className='w-[15px]' src="/filter.svg" alt="" />
                </div>
                <div
                    onClick={() => open_func('name')}
                    className="border-l-[0.5px] relative cursor-pointer font-[600] flex justify-between items-center px-2 gap-5 text-[10px] text-[#7A7A7A] border-[#979797]">
                    <p>Name</p>
                    <div
                        className={`absolute ${open.name ? 'h-[100px] ' : 'h-0 opacity-0'} p-2 overflow-hidden bottom-0 left-0 border-[0.5px] rounded-[0px_0px_3px_3px] bg-[#F9F9FB] border-[#979797] w-full  translate-y-full`}>
                        <p className='cursor-pointer hover:border-b-[0.5px] w-full border-[#4880FF] text-[8px] text-[#8BA3CB]'>
                            text
                        </p>
                    </div>
                    <RiArrowDownWideLine />
                </div>
                <div
                    onClick={() => open_func('city')}
                    className="border-l-[0.5px] relative cursor-pointer font-[600] flex justify-between items-center px-2 gap-5 text-[10px] text-[#7A7A7A] border-[#979797]">
                    <p>City</p>
                    <div
                        className={`absolute ${open.city ? 'h-[100px] ' : 'h-0 opacity-0'} p-2 overflow-hidden bottom-0 left-0 border-[0.5px] rounded-[0px_0px_3px_3px] bg-[#F9F9FB] border-[#979797] w-full  translate-y-full`}>
                        <p className='cursor-pointer hover:border-b-[0.5px] w-full border-[#4880FF] text-[8px] text-[#8BA3CB]'>
                            text
                        </p>
                    </div>
                    <RiArrowDownWideLine />
                </div>
                <div
                    onClick={() => open_func('state')}
                    className="border-l-[0.5px] relative cursor-pointer font-[600] flex justify-between items-center px-2 gap-5 text-[10px] text-[#7A7A7A] border-[#979797]">
                    <p>State</p>
                    <div
                        className={`absolute ${open.state ? 'h-[100px] ' : 'h-0 opacity-0'} p-2 overflow-hidden bottom-0 left-0 border-[0.5px] rounded-[0px_0px_3px_3px] bg-[#F9F9FB] border-[#979797] w-full  translate-y-full`}>
                        <p className='cursor-pointer hover:border-b-[0.5px] w-full border-[#4880FF] text-[8px] text-[#8BA3CB]'>
                            text
                        </p>
                    </div>
                    <RiArrowDownWideLine />
                </div>
                <div className="border-l-[0.5px] cursor-pointer font-[600] flex justify-between items-center px-2 gap-2 text-[10px] text-[#FF4F00] border-[#979797]">
                    <FaArrowRotateLeft className='' />
                    <p>Reset Filter</p>
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <Search_elem/>
                <button className='bg-[#0047E1] text-[#fff] rounded-[3px] h-[25px] px-2'>
                    <IoIosSearch />
                </button>
                <FaCirclePlus className='text-[24px] cursor-pointer text-[#0047E1]' />
                <div
                    onClick={() => open_func('user')}
                    className={`${!open.user ? 'rounded-[6px]' : 'rounded-[6px_6px_0px_0px] border-b-0'} border-[0.5px] text-[8px] relative cursor-pointer flex px-2 gap-4 py-1 items-center border-[#D5D5D5]`}>
                    <p>Alan</p>
                    <RiArrowDownWideLine className='text-[#718EBF] text-[12px]' />
                    <div className={`absolute  ${open.user ? 'h-[100px] ' : 'h-0 opacity-0'}  h-[100px]  p-2 overflow-hidden bottom-0 left-0 border-[0.5px] rounded-[0px_0px_3px_3px] bg-[#fff] border-[#D5D5D5] w-full  translate-y-full`}>
                        <p className='cursor-pointer hover:border-b-[0.5px] w-full border-[#4880FF] text-[8px] text-[#8BA3CB]'>
                            text
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};



export default Filter;