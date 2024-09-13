import React, { useState } from 'react';


const Ttext = ({ title, comment, status}) => {


    
    return (
        <div
            
            className={`cursor-pointer mb-2 hover:text-[#0047E1] ${status ? 'text-[#0047E1]' : ''}`}>
            <h4 className='text-[12px] text-[] font-[600]'>{title}</h4>
            <p className='text-[6px] mt-0 opacity-60 font-[600]'>{comment}</p>
            <div className="h-[0.5px] mt-2 bg-[#9298A4] ">

            </div>
        </div>
    );
};


export default Ttext;