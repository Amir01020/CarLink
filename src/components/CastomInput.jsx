import React from 'react';
const CastomInput = ({text,dolar,wi}) => {
    return (
        <div>
            <p className='mb-2'>{text} <span className='text-[#56CA00]'>{dolar}</span></p>
            <input type="text" className={`border-[2px] ${wi} border-gray-300 rounded-lg p-2 outline-[#9BBAFF]`} name="" id="" />
        </div>
    );
};



export default CastomInput;