import React from 'react';
import { Link } from 'react-router-dom';


const CardList = ({text}) => {
    return (
        <Link to={''} className='hover:scale-110 h-14 cursor-pointer hover:shadow-lg px-3 py-2 rounded-md w-[22%] bg-[#D4E1FF] flex items-center gap-2 '>
            <div className="bg-[#80A7FF] w-6 flex justify-center items-center h-6 rounded-full">
                <svg className='w-3' xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <path d="M6.66662 53.3333H56.6663C58.5072 53.3333 59.9996 54.8257 59.9996 56.6667C59.9996 58.5076 58.5072 60 56.6663 60H3.33331C1.49237 60 0 58.5076 0 56.6667V3.33333C0 1.49238 1.49237 0 3.33331 0C5.17425 0 6.66662 1.49238 6.66662 3.33333V53.3333Z" fill="white" />
                    <path d="M19.0991 38.946C17.84 40.289 15.7305 40.357 14.3875 39.0979C13.0445 37.8388 12.9764 35.7294 14.2355 34.3863L26.7354 21.053C27.9531 19.7541 29.9766 19.6415 31.3309 20.7972L41.1967 29.216L54.0508 12.934C55.1915 11.4891 57.2876 11.2425 58.7325 12.3832C60.1774 13.5239 60.424 15.62 59.2833 17.065L44.2834 36.065C43.1118 37.549 40.9417 37.7625 39.5034 36.5351L29.4233 27.9334L19.0991 38.946Z" fill="white" />
                </svg>
            </div>
            <p className='text-[10px] text-[#585757]'>
                {text}
            </p>
        </Link>
    );
};



export default CardList;