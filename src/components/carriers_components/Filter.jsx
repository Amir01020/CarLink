import React from 'react';
import { FaArrowRotateLeft, FaCirclePlus } from "react-icons/fa6";
import { IoIosArrowDown, IoIosSearch } from 'react-icons/io';
import { RiArrowDownWideLine } from 'react-icons/ri';

const Filter = () => {
    return (
        <div className='mt-5  flex justify-between h-[25px] '>
            <div className="h-full bg-[#F9F9FB] flex border-[0.5px] border-[#979797] rounded-[3px] ">
                <div className="flex px-2 h-full justify-center items-center">
                    <img className='w-[15px]' src="/filter.svg" alt="" />
                </div>
                <div className="border-l-[0.5px] relative cursor-pointer font-[600] flex justify-between items-center px-2 gap-5 text-[10px] text-[#7A7A7A] border-[#979797]">
                    <p>Name</p>
                    <div className={`absolute  bottom-0 left-0 border-[0.5px] rounded-[0px_0px_3px_3px] bg-[#F9F9FB] border-[#979797] w-full p-2 translate-y-full`}>
                        <p className='text-[8px] text-[#8BA3CB]'>text</p>
                    </div>
                    <RiArrowDownWideLine />
                </div>
                <div className="border-l-[0.5px] relative cursor-pointer font-[600] flex justify-between items-center px-2 gap-5 text-[10px] text-[#7A7A7A] border-[#979797]">
                    <p>City</p>
                    <div className={`absolute  bottom-0 left-0 border-[0.5px] rounded-[0px_0px_3px_3px] bg-[#F9F9FB] border-[#979797] w-full p-2 translate-y-full`}>
                        <p className='text-[8px] text-[#8BA3CB]'>text</p>
                    </div>
                    <RiArrowDownWideLine />
                </div>
                <div className="border-l-[0.5px] relative cursor-pointer font-[600] flex justify-between items-center px-2 gap-5 text-[10px] text-[#7A7A7A] border-[#979797]">
                    <p>State</p>
                    <div className={`absolute  bottom-0 left-0 border-[0.5px] rounded-[0px_0px_3px_3px] bg-[#F9F9FB] border-[#979797] w-full p-2 translate-y-full`}>
                        <p className='text-[8px] text-[#8BA3CB]'>text</p>
                    </div>
                    <RiArrowDownWideLine />
                </div>
                <div className="border-l-[0.5px] cursor-pointer font-[600] flex justify-between items-center px-2 gap-2 text-[10px] text-[#FF4F00] border-[#979797]">
                    <FaArrowRotateLeft className='' />
                    <p>Reset Filter</p>
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <div className="flex border-[0.5px] border-[#D5D5D5] gap-4 rounded-[3px] h-[25px] items-center px-2 ">
                    <div className="flex items-center gap-2">
                        <IoIosSearch className='text-[#718EBF]' />
                        <input
                            className='text-[8px] outline-none text-[#8BA3CB]'
                            type="text"
                            placeholder='Search for something' />
                    </div>
                    <IoIosArrowDown className=' text-[#4F575E]' />
                </div>
                <button className='bg-[#0047E1] text-[#fff] rounded-[3px] h-[25px] px-2'>
                    <IoIosSearch/>
                </button>
                <FaCirclePlus className='text-[24px] cursor-pointer text-[#0047E1]' />
                <div className="border-[0.5px] text-[8px] cursor-pointer rounded-md flex px-2 gap-4 py-1 items-center border-[#D5D5D5] ">
                    <p>Alan</p>
                    <RiArrowDownWideLine className='text-[#718EBF] text-[12px]'/>
                </div>
            </div>
            
        </div>
    );
};



export default Filter;