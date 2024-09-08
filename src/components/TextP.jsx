import React from 'react';


const TextP = ({text,color,font}) => {
    return (
        <p className={`text-[8px] text-[${color}] font-[${font}]`}>
            {text}
        </p>
    );
};



export default TextP;