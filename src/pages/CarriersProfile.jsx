import { Button } from '@mui/material';
import React from 'react';
import { AiOutlineCheckCircle, AiOutlineClockCircle } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { IoPencilSharp } from 'react-icons/io5';
import { useParams } from 'react-router-dom';
import CarriersRating from '../components/carriers_components/CarriersRating';
import RatingCard from '../components/carriers_components/RatingCard';
import axios from 'axios';
import KardComment from '../components/profil_components/KardComment';
import Form_cont from '../components/profil_components/Form';


const arr = [
    {
        id: '0',
        type: '',
        name: 'Nino Auto Towing LLC',
        contact: {
            name: 'Lana Del Rey',
            img: '/carriersImg.png'
        },
        address: '1202b N Maxwell St Apt 301',
        city: 'Allentown',
        state: 'PA',
        phone: '6514169538'
    }, {
        id: '1',
        type: '',
        name: 'Nino Auto Towing LLC',
        contact: {
            name: 'Lana Del Rey',
            img: '/img.png'
        },
        address: '1202b N Maxwell St Apt 301',
        city: 'Allentown',
        state: 'PA',
        phone: '6514169538'
    }, {
        id: '2',
        type: '',
        name: 'Nino Auto Towing LLC',
        contact: {
            name: 'Lana Del Rey',
            img: '/img.png'
        },
        address: '1202b N Maxwell St Apt 301',
        city: 'Allentown',
        state: 'PA',
        phone: '6514169538'
    },
]
const CarriersProfile = () => {
    const { id } = useParams()
    function findItemById(array, id) {
        return array.find(item => item.id === id);
    }
    const obj = findItemById(arr, id)
  
    return (

        <div className='cont pt-5 flex'>
            <div className="w-1/2 px-5">
                <div className="w-full flex bg-[#EBF3FF] rounded-[65px_10px_10px_65px] ">
                    <div className="w-[25%]">
                        <img src={obj.contact.img} className='w-full' alt="" />
                    </div>
                    <div className="w-[75%] py-2 px-4 flex justify-between">
                        <div className="flex flex-col justify-center">
                            <h2 className='font-[600]'>Tesla Transport LLC</h2>
                            <p className='text-[8px] text-[#9298A4] flex items-center gap-1 mt-2'><AiOutlineCheckCircle />Verified</p>
                            <p className='text-[8px] text-[#9298A4] flex items-center gap-1 mt-1'><AiOutlineClockCircle /> Joined Super in 2023-In business since 2023</p>
                        </div>
                        <div className="flex flex-col justify-between items-end">
                            <button className='w-5 h-5 bg-white text-[#0047E1] hover:bg-[#0047E1] hover:text-[#fff] rounded-full text-[12px] flex items-center justify-center '>
                                <IoPencilSharp />
                            </button>
                            <Button sx={{ fontSize: '8px', color: '#fff', background: '#0047E1' }}>Rate Carrier</Button>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4  mt-5">
                    <div className="w-[60%] h-full ">
                        <div className="p-4 h-1/2 bg-[#EBF3FF] relative rounded-md">
                            <button className='w-5 h-5 absolute top-2 right-2 bg-white text-[#0047E1] hover:bg-[#0047E1] hover:text-[#fff] rounded-full text-[12px] flex items-center justify-center '>
                                <IoPencilSharp />
                            </button>
                            <h2 className='text-[10px] font-[600] mb-5'>Company Info</h2>
                            <p className='text-[8px] mb-1 font-[600] text-[#979797]'>
                                #   USDOT 3925069
                            </p>
                            <p className='text-[8px] mb-1 font-[600] text-[#979797]'>
                                #   MC <span className='text-[#585757]'>1473555</span>
                            </p>
                            <p className='text-[8px] mb-1 font-[600] flex items-center gap-1 text-[#979797]'>
                                <HiOutlineLocationMarker />
                                <span className='text-[#585757]'>1511 S MAIN ST SANTA ANA, California 92707-1</span>
                            </p>
                            <h2 className='text-[10px] flex mt-5 gap-5 items-center font-[600] mb-2'>
                                Equipment
                                <p className='px-1 rounded-sm text-[#0047E1]  py-[2px] bg-[#C1D4FF] text-[6px]'>
                                    New
                                </p>
                            </h2>
                            <p className='text-[8px] flex items-center gap-1 text-[#979797]'>
                                <img src="/carLogo.svg" className='w-3' alt="" />
                                Largest trailer capacity 2 sedans
                            </p>
                        </div>
                        <div className="p-5 flex h-1/2 flex-col justify-center gap-2 bg-[#EBF3FF] mt-5 relative rounded-md">
                            <button className='w-5 h-5 absolute top-2 right-2 bg-white text-[#0047E1] hover:bg-[#0047E1] hover:text-[#fff] rounded-full text-[12px] flex items-center justify-center '>
                                <IoPencilSharp />
                            </button>


                            <p className='text-[8px] text-[#979797]'>Driver’s First Name</p>
                            <span className='text-[8px] font-[600] ml-2'>First Name</span>
                            <p className='text-[8px] text-[#979797]'>Driver’s Last Name</p>
                            <span className='text-[8px] font-[600] ml-2'>Last Name</span>
                            <p className='text-[8px] text-[#979797]'>Driver’s Phone</p>
                            <span className='text-[8px] font-[600] ml-2'>Phone</span>
                        </div>
                    </div>
                    <div className="w-[40%] h-full p-2 relative  rounded-md bg-[#EBF3FF]">
                        <button className='w-5 h-5 absolute top-2 right-2 bg-white text-[#0047E1] hover:bg-[#0047E1] hover:text-[#fff] rounded-full text-[12px] flex items-center justify-center '>
                            <IoPencilSharp />
                        </button>
                        <h2 className='text-[10px] font-[600] mb-4'>Company Info</h2>
                        <p className='text-[8px] -mb-1 text-[#979797]'>Carrier Contact</p>
                        <span className='text-[8px] font-[400] ml-2'>Cersei Lannister</span>
                        <p className='text-[8px] -mb-1 text-[#979797]'>Mail</p>
                        <span className='text-[8px] font-[400] ml-2'>cerseilannister@gmail.com</span>
                        <p className='text-[8px] -mb-1 text-[#979797]'>Phone #1</p>
                        <span className='text-[8px] font-[400] ml-2'>+1 951-250-7665</span>
                        <p className='text-[8px] -mb-1 text-[#979797]'>Phone #2</p>
                        <span className='text-[8px] font-[400] ml-2'>+1 262-323-2266</span>
                        <p className='text-[8px] -mb-1 text-[#979797]'>Address</p>
                        <span className='text-[8px] font-[400] ml-2'>107 Silverlace terr</span>
                        <p className='text-[8px] -mb-1 text-[#979797]'>City</p>
                        <span className='text-[8px] font-[400] ml-2'>Syracuse</span>
                        <p className='text-[8px] -mb-1 text-[#979797]'>State</p>
                        <span className='text-[8px] font-[400] ml-2'>NY</span>
                        <p className='text-[8px] -mb-1 text-[#979797]'>Zip</p>
                        <span className='text-[8px] font-[400] ml-2'>13219</span>
                        <p className='text-[8px] -mb-1 text-[#979797]'>Fax</p>
                        <span className='text-[8px] font-[400] ml-2'>(888) 458-48-58</span>
                    </div>
                </div>
            </div>
            <div className="w-1/2 flex gap-2">
                <div className="w-3/5 border-[2px] border-[#D5D5D5] rounded-lg p-5">
                    <h2 className='text-[12px] font-[600]'>Rate Alem cinema</h2>
                    <p className='text-[6px] max-w-[50%]'>Rating and reviews are verified and are from people who use the service </p>
                    <CarriersRating />
                    <div className="w-full h-[1px] bg-[#979797] mt-5 mb-2"></div>
                    <RatingCard />
                    <RatingCard />
                </div>
                <div className="w-2/5">
                    <div className="flex justify-between border-[0.5px] border-[#D5D5D5] p-2 pb-6 rounded-lg mb-2">
                        <div className="">
                            <h5 className='text-[10px] font-[600] text-[#585757]'>Internal Records</h5>
                            <p className='text-[8px] text-[#979797] font-[600]'>No Information Provided</p>
                        </div>
                        <div className="w-4 h-4 rounded-full bg-[#4880FF] text-[#fff] flex justify-center items-center">
                            <IoPencilSharp className='text-[8px]' />
                        </div>
                    </div>
                    <div className="p-2 border-[0.5px] border-[#D5D5D5] rounded-lg">
                        <h5 className='text-[10px] font-[600] text-[#585757]'>Internal Notes</h5>
                        <Form_cont />
                        <div className="">
                            <KardComment />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default CarriersProfile;