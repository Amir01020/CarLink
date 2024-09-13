import React from 'react';


const TextCont = ({title,name,color,op}) => {
    return (
        <div className={`mb-2 ${op?'opacity-0':''}`}>
            <p className='text-[8px] text-[#585757] font-[600]'>{title}</p>
            <h4 className={`text-[10px] text-[${color}] font-[600]`}>{name}</h4>
        </div>
    );
};



export default TextCont;