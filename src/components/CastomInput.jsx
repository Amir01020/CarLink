import React from 'react';
const CastomInput = ({text,dolar,wi}) => {
    return (
        <div>
            <p className='mb-1 text-[8px]'>{text} <span className='text-[#56CA00]'>{dolar}</span></p>
            <input type="text" className={`border-[2px] text-[8px] ${wi} border-gray-300 rounded-[5px] p-1 outline-[#9BBAFF]`} name="" id="" />
        </div>
    );
};



export default CastomInput;