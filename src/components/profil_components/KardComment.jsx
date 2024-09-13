import React from 'react';


const KardComment = () => {
    return (
        <div className="mt-1">
            <p className='text-[8px] font-[600] '>
                Alan | <span className='text-[6px] font-[600] text-[#979797]'>Feb 23, 2024</span>
            </p>
            <div className="w-full p-2  mt-3 text-[6px] bg-[#ECF4FF] rounded-md relative">
                <div className="w-5 h-5 absolute bg-[#ECF4FF] top-0 left-1/5 -translate-y-1/3 rotate-45"></div>
                <p className='relative z-20'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.

                </p>
            </div>

        </div>
    );
};


export default KardComment;