import { Rating } from '@mui/material';
import React from 'react';


const RatingCard = () => {
    return (
        <div className='flex relative flex-col bg-[#ECF4FF] mt-5 p-2 rounded-md'>
            <div className="absolute w-4 h-4 rotate-45 -top-2 left-4 bg-[#ECF4FF]"></div>
            <p className='text-[10px] relative z-20 mb-2'>Bill Gates</p>
            <div style={{ transform: 'scale(0.5)', transformOrigin: 'top left' }}>
                <Rating name="half-rating-read" defaultValue={5} precision={5} readOnly size="small" />
                </div>
            <span className='text-[8px] -mt-2'>Fast delivery</span>
        </div>
    );
};


export default RatingCard;