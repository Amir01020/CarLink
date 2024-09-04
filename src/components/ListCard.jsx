import React from 'react';


const ListCard = (props) => {
    return (
        <div className='bg-white w-[15%] h-[190px] p-4 rounded-xl'>
            <div className="flex justify-between">
                <h4 className='text-[36px] text-[#16B1FF] font-[600]'>{props.text1}</h4>
                <img className='w-10' src={props.img} alt="" />
            </div>
            <p className='text-[20px] text-[#9298A4] mt-8'>{props.text2}</p>
        </div>
    );
};



export default ListCard;