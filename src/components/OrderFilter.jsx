import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';


const OrderFilter = ({ arr }) => {

    const [list_oupen, setListOupen] = useState(false)
    const [all_list_oupen, setAllListOupen] = useState(false)
    const [name_list_oupen, setname_list_oupen] = useState(false)

    const list_click = () => {
        setListOupen(prevState => !prevState)

    }
    const name_list_click = () => {
        setname_list_oupen(prevState => !prevState)

    }
    const all_list_click = () => {
        setAllListOupen(prevState => !prevState)

    }

    return (
        <div className="cont px-[20px] pt-[50px] flex justify-between items-center">
            <div className="flex gap-5 items-center">
                {
                    arr.map((i, idx) => (
                        <p key={idx} className='whitespace-nowrap text_anim text-[14px] text-[#585757] '>
                            {i}
                            <div className="w-full bg-[#56CA00] h-[2px] rounded-[10px]"></div>
                        </p>
                    ))
                }


            </div>
            <div className=" flex items-center gap-5 " >
                <div className="h-[48px] border-[0.6px] items-center border-solid bg-[#F9F9FB] border-[#D5D5D5] flex   rounded-lg max-w-full">
                    <div className="h-full px-[20px] border-r-[1px] border-r-[#9797976b] py-[15px]">
                        <img className='w-[28px]' src="/filter.svg" alt="" />
                    </div>
                    
                    <div className=" cursor-pointer h-full border-r-[1px]  flex items-center gap-10 px-[15px] relative border-r-[#9797976b] ">
                        <p
                            onClick={list_click}
                            className='text-[14px]  text-[#7A7A7A] font-[700]  bg-transparent'>
                            Date
                        </p>
                        <IoIosArrowDown onClick={list_click} className='text-[25px]' />
                        <div
                            className={`absolute ${list_oupen ? 'scale-y-[1]  border-[0.6px]' : 'scale-y-[0]'} transition-[0.5s] bottom-0   border-solid rounded-[0px_0px_10px_10px] border-[#D5D5D5]  translate-y-[100%] overflow-auto text-center w-full left-0 max-h-[300px] bg-[#F9F9FB]`}>
                            <p className='text_anim1 text-[14px] py-2 font-[600]'>
                                02.09.2024
                                <div className="w-full bg-[#0047E1] h-[2px] rounded-[10px]"></div>
                            </p>

                        </div>
                    </div>
                    <button className="h-full  px-[15px] text-[14px] text-[#FF4F00] flex gap-2 items-center">
                        <img className='w-[20px]' src="/Path.svg" alt="" />
                        Reset Filter
                    </button>

                </div>
                <div className=" h-[48px] relative w-[300px] border-[0.6px] border-solid rounded-lg bg-[#F9F9FB] border-[#D5D5D5] gap-2 flex items-center px-[10px]">
                    <img className='w-[20px]' src="/search.svg" alt="" />
                    <input type="text" placeholder='Search for something' className='w-full  outline-none  placeholder-[#8BA3CB] text-[16px] bg-transparent' name="" id="" />
                    <img src="/Path1.svg" className='cursor-pointer w-[28px]' onClick={all_list_click} alt="" />
                    <div className={`absolute ${all_list_oupen ? 'scale-y-[1]  border-[0.6px]' : 'scale-y-[0]'} px-[40px] bottom-0 border-[0.6px]  border-solid rounded-[0px_0px_10px_10px] border-[#D5D5D5]  translate-y-[100%] overflow-auto  w-full left-0 max-h-[300px] bg-[#F9F9FB]`}>
                        <p className='text_anim1 text-[14px] py-2 font-[600]'>
                            02.09.2024
                            <div className="w-full bg-[#0047E1] h-[2px] rounded-[10px]"></div>
                        </p>

                    </div>
                </div>
                <Link to='/quotes/add' className="svg_3 w-[50px] h-[50px] flex justify-center items-center rounded-[50%] bg-[#0047E1]">
                    <svg className='' xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18 0C18.9956 0 19.8027 0.807101 19.8027 1.80271V16.1973H34.1973C35.1929 16.1973 36 17.0044 36 18C36 18.9956 35.1929 19.8027 34.1973 19.8027H19.8027V34.1973C19.8027 35.1929 18.9956 36 18 36C17.0044 36 16.1973 35.1929 16.1973 34.1973V19.8027H1.80271C0.807101 19.8027 0 18.9956 0 18C0 17.0044 0.807101 16.1973 1.80271 16.1973H16.1973V1.80271C16.1973 0.807101 17.0044 0 18 0Z" fill="white" />
                    </svg>
                </Link >
                <div onClick={name_list_click} className="border-[0.6px] cursor-pointer relative min-w-[100px] py-2 h-fit border-solid rounded-[20px] bg-[#F9F9FB] border-[#D5D5D5] ">
                    <p className='flex items-center text-[14px] pl-[15px] justify-between pr-5'> Alan  <img className='' src="/Path1.svg" alt="" /></p>
                    <div className={`absolute ${name_list_oupen ? 'scale-y-[1]  border-[0.6px]' : 'scale-y-[0]'} px-[15px] bottom-0 border-[0.6px]  border-solid rounded-[0px_0px_10px_10px] border-[#D5D5D5]  translate-y-[100%] overflow-auto  w-full left-0 max-h-[300px] bg-[#F9F9FB]`}>
                        <p className='text_anim1 text-[14px] py-2 font-[600]'>
                            02.09.2024
                            <div className="w-full bg-[#0047E1] h-[2px] rounded-[10px]"></div>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};



export default OrderFilter;