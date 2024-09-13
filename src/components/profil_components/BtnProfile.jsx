import React, { useState } from 'react';


const BtnProfile = () => {
    const [count, setCount] = useState(false);
    return (
        <div onClick={()=>setCount(!count)} className={`w-8 ${count?'bg-[#585757] justify-end':'bg-[#4880FF] justify-start'} h-3 rounded-full flex  items-center px-[2px] cursor-pointer`}>
            <div className="w-2 h-2 rounded-full bg-white">
                
            </div>
        </div>
    );
};



export default BtnProfile;