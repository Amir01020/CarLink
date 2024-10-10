import React from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link
import { IoChatbubbleOutline } from 'react-icons/io5';
import { CiDark } from 'react-icons/ci';
import { MdOutlineLightMode } from 'react-icons/md';

const Modal = ({oupen}) => {
    const [topic, setTopic] = React.useState(false); // Состояние для переключения темы

    const post = () => {
        // Логика для функции post
    };

    return (
        <div className={`h-full top-0 pt-16 ${oupen?'-translate-x-0':'-translate-x-full'} absolute bg-white flex flex-col justify-between items-center w-[150px] p-3`}>
            <div className="w-full">
                <Link to='/quotes/add' className='link_color text-[8px] text-[#9298A4] flex items-center gap-2 mb-2'>
                    <img className='w-[14px]' src="/createQuote.svg" alt="Create quote" />Create quote
                </Link>
                <Link to="/newLeads" className='link_color text-[8px] text-[#9298A4] flex items-center gap-2 mb-2'>
                    <img className='w-[14px]' src="/newLeads.svg" alt="New leads" />New leads
                </Link>
                <Link to="/tickets" className='link_color text-[8px] text-[#9298A4] flex items-center gap-2 mb-2'>
                    <img className='w-[14px]' src="/tickets.svg" alt="Tickets" />Tickets
                </Link>
                <Link to="/reports" className='link_color text-[8px] text-[#9298A4] flex items-center gap-2 mb-2'>
                    <img className='w-[14px]' src="/reports.svg" alt="Reports" />Reports
                </Link>
                <Link to="/templates" className='link_color text-[8px] text-[#9298A4] flex items-center gap-2 mb-2'>
                    <img className='w-[14px]' src="/templates.svg" alt="Templates" />Templates
                </Link>
                <Link to="/carriers" className='link_color text-[8px] text-[#9298A4] flex items-center gap-2 mb-2'>
                    <img className='w-[14px]' src="/carriers.svg" alt="Carriers" />Carriers
                </Link>
                <Link to="/payments" className='link_color text-[8px] text-[#9298A4] flex items-center gap-2 mb-2'>
                    <img className='w-[14px]' src="/payment.svg" alt="Payments" />Payments
                </Link>
            </div>

            <div className="w-full flex flex-col items-center gap-5">
                <div className="w-[80px] h-[80px] flex items-end justify-center py-2 relative rounded-xl bg-[#3f8cff35]">
                    <img src="/home_img.svg" className='absolute w-4/5 -top-1/4' alt="Home" />
                    <button onClick={post} className='flex items-center gap-2 text-white text-[8px] justify-center rounded-md w-4/5 py-1 bg-[#3F8CFF]'>
                        <IoChatbubbleOutline className='text-[10px]' />
                        Support
                    </button>
                </div>
                <div onClick={() => setTopic(!topic)} className="flex w-full relative justify-between py-2 cursor-pointer px-2 rounded-xl bg-[#EDF1F7]">
                    <p className='flex items-center text-[#979797] gap-2 text-[8px]'>
                        <CiDark className='text-[10px]' />
                        Dark
                    </p>
                    <p className='flex text-[#979797] items-center gap-2 text-[8px]'>
                        <MdOutlineLightMode className='text-[10px]' />
                        Light
                    </p>
                    <div className={`absolute w-1/2 h-full ${topic ? 'translate-x-full' : 'translate-x-0'} left-0 flex items-center pl-2 shadow-lg bg-[#3F8CFF] top-0 rounded-[12px]`}>
                        <p className={`${!topic ? 'flex' : 'hidden'} items-center text-[#fff] gap-1 text-[8px]`}>
                            <CiDark className='text-[10px]' />
                            Dark
                        </p>
                        <p className={`${!topic ? 'hidden' : 'flex'} items-center text-[#fff] gap-1 text-[8px]`}>
                            <MdOutlineLightMode className='text-[10px]' />
                            Light
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
