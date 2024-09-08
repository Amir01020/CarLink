import React from 'react';


const TextH2 = ({ text }) => {
    return (
        <>
            <h2 className='text-[8px] text-[#0047E1]'>
                {text}
            </h2>
            <div className="h-[0.5px] mt-1 mb-2 opacity-60 bg-[#BEBEBE]"></div>
        </>
    );
};



export default TextH2;