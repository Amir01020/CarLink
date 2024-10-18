import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';
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
        <div className="cont px-[10px] pt-[25px] flex justify-between items-center">
            <div className="flex max-w-[400px] gap-5 items-center">
                {
                    arr.map((i, idx) => (
                        <p key={idx} className='whitespace-nowrap text_anim text-[6px] leptop:text-[10px] text-[#585757]'>
                            {i}
                            <div className="w-full bg-[#56CA00] h-[1px] rounded-[5px]"></div>
                        </p>
                    ))
                }
            </div>
            <div className="flex items-center gap-2">
                <div className={`h-[20px] ${name_list_oupen ? 'rounded-[5px_5px_0px_0px] border-b-0' : 'rounded-[5px] border-[0.6px]'} relative w-[150px] border-solid bg-[#F9F9FB] border-[#D5D5D5] gap-1 flex items-center px-[8px]`}>
                    <img className='w-[8px]' src="/search.svg" alt="" />
                    <input type="text" placeholder='Search for something'
                        className='w-full outline-none placeholder-[#8BA3CB] text-[8px] leptop:text-[10px] bg-transparent' name="" id="" />
                    <img src="/Path1.svg" className='cursor-pointer w-[8px]' onClick={all_list_click} alt="" />
                    <div className={`absolute ${all_list_oupen ? 'scale-y-[1] border-[0.6px]' : 'scale-y-[0]'} px-[10px] bottom-0 border-[0.6px] border-solid rounded-[0px_0px_5px_5px] border-[#D5D5D5] translate-y-[100%] overflow-auto w-full left-0 max-h-[200px] bg-[#F9F9FB]`}>
                        <p className='text_anim1 text-[6px] leptop:text-[10px] py-1 font-[600]'>
                            02.09.2024
                            <div className="w-full bg-[#0047E1] h-[1px] rounded-[5px]"></div>
                        </p>
                    </div>
                </div>
                <input type="text"
                    className={`h-5 text-[8px] leptop:text-[10px] w-[120px] rounded-[5px] border-[0.6px] border-[#D5D5D5] px-1 outline-none`}
                    name="" id="" />
                <button className='h-5 w-5 bg-[#0047E1] text-white rounded-md flex justify-center items-center'>
                    <IoSearch className='text-[12px]' />
                </button>
                <Link to='/quotes/add' className="svg_3 w-[20px] h-[20px] flex justify-center items-center rounded-[50%] bg-[#0047E1]">
                    <svg className='' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 36 36" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M18 0C18.9956 0 19.8027 0.807101 19.8027 1.80271V16.1973H34.1973C35.1929 16.1973 36 17.0044 36 18C36 18.9956 35.1929 19.8027 34.1973 19.8027H19.8027V34.1973C19.8027 35.1929 18.9956 36 18 36C17.0044 36 16.1973 35.1929 16.1973 34.1973V19.8027H1.80271C0.807101 19.8027 0 18.9956 0 18C0 17.0044 0.807101 16.1973 1.80271 16.1973H16.1973V1.80271C16.1973 0.807101 17.0044 0 18 0Z" fill="white" />
                    </svg>
                </Link>
                <div onClick={name_list_click}
                    className={`border-[0.6px] ${name_list_oupen ? 'rounded-[5px_5px_0px_0px] border-b-0' : 'rounded-[5px]'} cursor-pointer relative min-w-[80px] py-1 h-fit border-solid bg-[#F9F9FB] border-[#D5D5D5]`}>
                    <p className='flex items-center text-[6px] leptop:text-[10px] pl-[10px] justify-between pr-2'>
                        Alan <img src="/Path1.svg" className='w-3' alt="" />
                    </p>
                    <div className={`absolute ${name_list_oupen ? 'text-center scale-y-[1] border-[0.6px]' : 'scale-y-[0]'} px-[10px] bottom-0 border-[0.6px] border-solid rounded-[0px_0px_5px_5px] border-[#D5D5D5] translate-y-[100%] overflow-auto w-full left-0 max-h-[200px] bg-[#F9F9FB]`}>
                        <p className='text_anim1 text-[6px] leptop:text-[10px] py-1 font-[600]'>
                            02.09.2024
                            <div className="w-full bg-[#0047E1] h-[1px] rounded-[5px]"></div>
                        </p>
                    </div>
                </div>
            </div>
        </div>



    );
};



export default OrderFilter;