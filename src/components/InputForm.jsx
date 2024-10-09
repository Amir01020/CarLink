
import React from 'react';


const InputForm = ({text,label}) => {
    return (
        <div className="w-[100%]">
            <p className='mb-1 text-[8px]'>{text}</p>
            <input type="text" placeholder={label} className='text-[8px] placeholder-[#718EBF] w-full h-6 px-1 outline-none border-[1px] border-[#9298A4] rounded-[4px]'  name="" id="" />
        </div>
    );
};



export default InputForm;