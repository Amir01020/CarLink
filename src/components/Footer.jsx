import React from 'react';

import { Button } from '@mui/material';
import { IoIosMore } from 'react-icons/io';

const Footer = () => {
    return (
        <footer className='cont px-[10px] ' >
            <div className="flex items-center justify-between gap-[34px] border-t-[1px] border-[#979797] py-4">
                <div
                    className="hover:bg-[#4880FF] hover:text-[#fff] flex items-center justify-center cursor-pointer w-[30px] h-[30px]  rounded-full">
                    <IoIosMore className=' text-[20px] transition-none ' />

                </div>
                <div className="flex gap-5 items-center">
                    <Button sx={{ background: '#4880FF', fontSize: '8px' }} variant="contained">Save and send quote</Button>
                    <Button sx={{ background: '#4880FF', fontSize: '8px' }} variant="contained">Save and convert to oreder</Button>
                    <Button sx={{ background: '#56CA00', fontSize: '8px', width: '60px' }} variant='contained'>SAVE</Button>
                </div>

            </div>
        </footer>
    );
};



export default Footer;