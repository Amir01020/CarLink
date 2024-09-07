import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';


const Filter_comp = ({ arr }) => {

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
        <div className="cont px-[10px] pt-[25px] flex justify-between">
            <div className="flex gap-5">
                {
                    arr.map((i, idx) => (
                        <p key={idx} className='text_anim text-[10px] text-[#585757]'>
                            {i}
                            <div className="w-full bg-[#56CA00] h-[1px] rounded-[5px]"></div>
                        </p>
                    ))
                }
            </div>
            <div className="flex items-center gap-3">
                <div className="h-[25px] border-[0.6px] items-center border-solid bg-[#F9F9FB] border-[#D5D5D5] flex rounded-lg max-w-full">
                    <div className="h-full px-[10px] border-r-[1px] border-r-[#9797976b] flex items-center">
                        <img className='w-[15px]' src="/filter.svg" alt="" />
                    </div>
                    <div className="h-full flex items-center border-r-[1px] border-r-[#9797976b] text-[10px] text-[#7A7A7A] font-[700] px-[10px]">Filter By</div>
                    <div className="cursor-pointer h-full border-r-[1px] flex items-center gap-5 px-[10px] relative border-r-[#9797976b]">
                        <p
                            onClick={list_click}
                            className='text-[10px] text-[#7A7A7A] font-[700] bg-transparent'>
                            Date
                        </p>
                        <IoIosArrowDown onClick={list_click} className='text-[15px]' />
                        <div
                            className={`absolute ${list_oupen ? 'scale-y-[1]  border-[0.6px]' : 'scale-y-[0]'} transition-[0.5s] bottom-0 border-solid rounded-[0px_0px_5px_5px] border-[#D5D5D5] translate-y-[100%] overflow-auto text-center w-full left-0 max-h-[200px] bg-[#F9F9FB]`}>
                            <p className='text_anim1 text-[10px] py-1 font-[600]'>
                                02.09.2024
                                <div className="w-full bg-[#0047E1] h-[1px] rounded-[5px]"></div>
                            </p>
                        </div>
                    </div>
                    <button className="h-full px-[10px] text-[10px] text-[#FF4F00] flex gap-1 items-center">
                        <img className='w-[15px]' src="/Path.svg" alt="" />
                        Reset Filter
                    </button>
                </div>
                <div className={`h-[25px] ${!all_list_oupen?'rounded-lg':'rounded-[7px_7px_0px_0px] border-b-0'} relative w-[200px] border-[0.6px] border-solid  bg-[#F9F9FB] border-[#D5D5D5] gap-2 flex items-center px-[8px]`}>
                    <img className='w-[10px]' src="/search.svg" alt="" />
                    <input type="text" placeholder='Search for something' className='w-full outline-none placeholder-[#8BA3CB] text-[10px] bg-transparent' name="" id="" />
                    <img src="/Path1.svg" className='cursor-pointer w-[15px]' onClick={all_list_click} alt="" />
                    <div className={`absolute ${all_list_oupen ? 'scale-y-[1]   border-[0.6px]' : 'scale-y-[0]'} px-[10px] bottom-0 border-[0.6px] border-solid rounded-[0px_0px_5px_5px] border-[#D5D5D5] translate-y-[100%] overflow-auto w-full left-0 max-h-[200px] bg-[#F9F9FB]`}>
                        <p className='text_anim1 text-[10px] py-1 font-[600]'>
                            02.09.2024
                            <div className="w-full bg-[#0047E1] h-[1px] rounded-[5px]"></div>
                        </p>
                    </div>
                </div>
                <Link to='/quotes/add' className="svg_3 w-[25px] h-[25px] flex justify-center items-center rounded-[50%] bg-[#0047E1]">
                    <svg className='' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 36 36" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M18 0C18.9956 0 19.8027 0.807101 19.8027 1.80271V16.1973H34.1973C35.1929 16.1973 36 17.0044 36 18C36 18.9956 35.1929 19.8027 34.1973 19.8027H19.8027V34.1973C19.8027 35.1929 18.9956 36 18 36C17.0044 36 16.1973 35.1929 16.1973 34.1973V19.8027H1.80271C0.807101 19.8027 0 18.9956 0 18C0 17.0044 0.807101 16.1973 1.80271 16.1973H16.1973V1.80271C16.1973 0.807101 17.0044 0 18 0Z" fill="white" />
                    </svg>
                </Link>
                <div onClick={name_list_click} className="border-[0.6px] cursor-pointer relative min-w-[80px] py-1 h-fit border-solid rounded-[20px] bg-[#F9F9FB] border-[#D5D5D5]">
                    <p className='flex items-center text-[10px] pl-[10px] justify-between pr-4'> Alan  <img src="/Path1.svg" alt="" /></p>
                    <div className={`absolute ${name_list_oupen ? 'scale-y-[1]  border-[0.6px]' : 'scale-y-[0]'} px-[10px] bottom-0 border-[0.6px] border-solid rounded-[0px_0px_5px_5px] border-[#D5D5D5] translate-y-[100%] overflow-auto w-full left-0 max-h-[200px] bg-[#F9F9FB]`}>
                        <p className='text_anim1 text-[10px] py-1 font-[600]'>
                            02.09.2024
                            <div className="w-full bg-[#0047E1] h-[1px] rounded-[5px]"></div>
                        </p>
                    </div>
                </div>
            </div>
        </div>


    );
};



export default Filter_comp;