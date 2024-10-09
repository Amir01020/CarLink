import React, { useState } from 'react';
import { IoIosSearch, IoIosArrowDown } from 'react-icons/io'; // Импорт иконок

const Search_elem = () => {
    const [open, setOpen] = useState(false);

    return (
        <div
            className={`flex relative  ${!open ? 'rounded-[3px]' : 'rounded-[3px_3px_0px_0px] border-b-0'}  border-[0.5px] border-[#D5D5D5] gap-4  h-[25px] items-center px-2`}>
            <div className="flex items-center gap-2">
                <IoIosSearch className={`text-[#718EBF]`} />
                <input
                    className='text-[8px] outline-none text-[#8BA3CB]'
                    type="text"
                    placeholder='Search for something' />
            </div>
            <IoIosArrowDown
                onClick={() => setOpen(!open)}
                className={` text-[#4F575E] cursor-pointer ${open ? 'rotate-180' : ''}`} />
            <div className={`absolute ${open ? 'h-[100px]' : 'h-0 opacity-0'} transition-all duration-300 p-2 overflow-hidden bottom-0 left-0 border-[0.5px] rounded-[0px_0px_3px_3px] bg-[#fff] border-[#D5D5D5] w-full translate-y-full`}>
                <p className='cursor-pointer hover:border-b-[0.5px] w-full border-[#4880FF] text-[8px] text-[#8BA3CB]'>
                    text
                </p>
            </div>
        </div>
    );
};

export default Search_elem;
