import React from 'react';


const ListCard = (props) => {
    return (
        <div className="bg-white w-[15%] h-[100px] leptop:h-[120px] p-4 rounded-xl">
            <div className="flex justify-between items-center">
                <h4 className="text-[14px] leptop:text-[18px] text-[#16B1FF] font-[600]">
                    {props.text1}
                </h4>
                <img className="h-5 leptop:h-8" src={props.img} alt="" />
            </div>
            <p className="text-[8px] leptop:text-[12px] text-[#9298A4] mt-8">
                {props.text2}
            </p>
        </div>
    );
};



export default ListCard;