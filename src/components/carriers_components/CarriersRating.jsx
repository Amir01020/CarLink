import { Rating } from '@mui/material';
import React, { useState } from 'react';


const CarriersRating = () => {
    const [rating, setRating] = useState(4.5);
    const [quantity, setQuantity] = useState('2,256');
    const [count,setCount] = useState(40);
    return (
        <div className="flex mt-5 items-center">
            <div className="flex flex-col items-center">
                <span className='text-[40px] font-bold'>{rating}</span>

                <Rating name="half-rating-read" className='scale-[.7]' defaultValue={2.5} precision={0.5} readOnly size="small" />

                <span className='text-[12px] text-[#333333]'>{quantity}</span>
            </div>
            <div className="w-full text-[12px]">
                <div className="flex gap-1 items-center">
                    <p>5</p>
                    <div className="w-full bg-[#D9D9D9] rounded-full overflow-hidden h-2">
                        <div className={`h-full w-[${count}%] rounded-full bg-[#4880FF]`}></div>
                    </div>
                </div>
                <div className="flex gap-1 items-center">
                    <p>4</p>
                    <div className="w-full bg-[#D9D9D9] rounded-full overflow-hidden h-2">
                        <div className={`h-full w-[${count}%] rounded-full bg-[#4880FF]`}></div>
                    </div>
                </div>
                <div className="flex gap-1 items-center">
                    <p>3</p>
                    <div className="w-full bg-[#D9D9D9] rounded-full overflow-hidden h-2">
                        <div className={`h-full w-[${count}%] rounded-full bg-[#4880FF]`}></div>
                    </div>
                </div>
                <div className="flex gap-1 items-center">
                    <p>2</p>
                    <div className="w-full bg-[#D9D9D9] rounded-full overflow-hidden h-2">
                        <div className={`h-full w-[${count}%] rounded-full bg-[#4880FF]`}></div>
                    </div>
                </div>
                <div className="flex gap-1 items-center">
                    <p>1</p>
                    <div className="w-full bg-[#D9D9D9] rounded-full overflow-hidden h-2">
                        <div className={`h-full w-[${count}%] rounded-full bg-[#4880FF]`}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default CarriersRating;