
import React, { useState } from 'react';
import InputForm from '../components/InputForm';
import { BsGeoAlt } from "react-icons/bs";
import { FaRegFlag } from "react-icons/fa6";
import ChekboxForm from '../components/ChekboxForm';
import CardGogle from '../components/CardGogle';
import { Button, TextField } from '@mui/material';
import { IoIosArrowDown, IoIosMore } from 'react-icons/io';
import CastomInput from '../components/CastomInput';
import Footer from '../components/Footer';


const checkArr =
{
    arr_1: [

        {
            name: 'Open'
        }, {
            name: 'Enclosed'
        }, {
            name: 'Driveaway'
        },

    ],
    arr_2: [
        {
            name: 'Yes'
        }, {
            name: 'No'
        },
    ]
}


const Quotes = () => {


    const [count, setCount] = useState(false);

    return (
        <div className=' px-5 pt-14 bg-[#F6F6F8]'>
            <div className="cont">
                <div className="flex justify-end items-center gap-5 mb-5">
                    <Button sx={{background:'#4880FF' , color:"white"}}>Save and send quote</Button>
                    <Button sx={{background:'#4880FF' , color:"white"}}>Save and convert to oreder</Button>
                    <Button sx={{background:'#56CA00' , color:"white"}}>EDIT</Button>
                </div>
                <div className=" bg-white px-10 py-5 rounded-xl mb-[50px]">
                    <h2 className='text-[#0047E1] text-[24px]'>Shipper information</h2>
                    <div className="w-full h-[1px] bg-[#BEBEBE] mb-5 mt-2"></div>

                    <div className="grid grid-cols-3 grid-rows-3 gap-x-[150px] gap-y-5 justify-between">
                        <InputForm text="First Name" label="Charlene Reed" />
                        <InputForm text="Email" label="charlenereed@gmail.com " />
                        <InputForm text="City" label="San Jose" />
                        <InputForm text="Last Name" label="Charlene Reed " />
                        <InputForm text="Phone" label="Enter your phone number" />
                        <InputForm text="Phone other" label="Enter your phone number" />
                        <InputForm text="Company Name" label="First LLC" />
                        <InputForm text="Billing Address" label="San Jose, California, USA" />
                    </div>

                </div>
                <div className="grid grid-cols-2 gap-10">
                    <div className="px-10 py-5 bg-white rounded-xl">
                        <h2 className='text-[#0047E1] flex items-center gap-5 text-[24px]'><BsGeoAlt /> Origin</h2>
                        <div className="w-full h-[1px] bg-[#BEBEBE] mb-5 mt-2"></div>
                        <div className="mt-3"><InputForm text='City' label='Boston' /></div>
                        <div className="mt-3"><InputForm text='State' label='Boston' /></div>
                        <div className="grid grid-cols-2 gap-10 mt-3">
                            <InputForm text='Zip' label='1002456' />
                            <InputForm text='Country' label='USA' />
                        </div>
                        <h2 className='text-[#0047E1] mt-16 mb-4 flex items-center gap-5 text-[24px]'><BsGeoAlt /> Overseas</h2>
                        <div className="w-1/2 pr-5">
                            <InputForm text='Country' label='USA' />
                        </div>
                    </div>
                    <div className="">
                        <div className="px-10 py-5 bg-white rounded-xl">
                            <h2 className='text-[#0047E1] flex items-center gap-5 text-[24px]'><FaRegFlag /> Destination</h2>
                            <div className="w-full h-[1px] bg-[#BEBEBE] mb-5 mt-2"></div>
                            <div className="mt-3"><InputForm text='City' label='Boston' /></div>
                            <div className="mt-3"><InputForm text='State' label='Boston' /></div>
                            <div className="grid grid-cols-2 gap-10 mt-3">
                                <InputForm text='Zip' label='1002456' />
                                <InputForm text='Country' label='USA' />
                            </div>
                        </div>
                        <div className="px-10 py-5 bg-white rounded-xl mt-6">
                            <h2 className='text-[#0047E1] flex items-center gap-5 text-[24px]'>Destination</h2>
                            <div className="w-full h-[1px] bg-[#BEBEBE] mb-5 mt-2"></div>
                            <div className="grid grid-cols-2 gap-10 mt-3">
                                <div className="">
                                    <InputForm text='Zip' label='' />
                                    <ChekboxForm arr={checkArr.arr_1} text='Ship via' />
                                </div>
                                <div className="">
                                    <InputForm text='Country' label='' />
                                    <ChekboxForm arr={checkArr.arr_2} text='Vehicle(s) Run' />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="bg-white px-10 py-5 rounded-xl mt-[50px]">
                    <h2 className='text-[#0047E1] flex items-center gap-5 text-[24px]'>Vehicle Information</h2>
                    <div className="w-full h-[1px] bg-[#BEBEBE] mb-5 mt-2"></div>
                    <div className="flex justify-between items-center ">
                        <TextField className='w-1/3' id="outlined-basic" label='Put VIN numbers here separated by comma' variant="outlined" />
                        <Button className='h-[54px] w-[180px]' sx={{ background: '#0047E1', borderRadius: '10px' }} variant="contained">ADD VEHICLE</Button>
                    </div>
                    <div className="px-5 py-7 flex gap-[50px] items-center border-[#9BBAFF] border-[2px] rounded-xl mt-5">
                        <div className="w-1/5">
                            <h4 className='font-[500] text-[#0047E1] mb-3'>Vehicle #1</h4>
                            <div className="flex justify-end"> <img src="/car_img.png" className='w-[200px]' alt="" /></div>
                            <div className="flex justify-between items-center mt-3">
                                <p className='text-[#FF4F00] cursor-pointer'>remove vehicle</p>
                                <span
                                    onClick={() => setCount(!count)}
                                    className='flex items-center gap-1 cursor-pointer'>more<IoIosArrowDown className={`text-[25px] ${count ? 'rotate-[0deg]' : 'rotate-[180deg]'}`} /></span>
                            </div>
                        </div>
                        <div className="w-4/5">
                            <div className="w-full flex gap-5 ">
                                <CastomInput text='Year' wi='w-[140px]' />
                                <CastomInput text='Make' wi='w-[140px]' />
                                <div className="flex items-end gap-4">
                                    <CastomInput text='Model' wi='w-[180px]' />
                                    <img src="/google_icon.svg" className='h-[30px] mb-3' alt="" />
                                </div>
                                <CastomInput wi='w-[200px]' text='Type' />
                                <CastomInput wi='w-[100px]' text='Tariff' dolar='$' />
                                <CastomInput wi='w-[100px]' text='Deposit' dolar='$' />
                            </div>
                            <div className={`w-full ${count ? 'flex' : 'hidden'}  grid-cols-6 gap-5 mt-5`}>
                                <CastomInput text='Plate' wi='w-[140px]' />
                                <CastomInput text='State' wi='w-[140px]' />
                                <div className="flex items-end gap-4">
                                    <CastomInput text='VIN' wi='w-[180px]' />
                                    <img src="/google_icon.svg" className='h-[30px] opacity-0 mb-3' alt="" />
                                </div>
                                <CastomInput wi='w-[200px]' text='LOT #' />
                                <CastomInput wi='w-[100px]' text='Color' />


                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white px-10 py-5 rounded-xl mt-[50px]">
                    <h2 className='text-[#0047E1] flex items-center gap-5 text-[24px]'>Picing Information</h2>
                    <div className="w-full h-[1px] bg-[#BEBEBE] mb-5 mt-2"></div>
                    <div className="flex gap-16 w-full">
                        <div className="w-1/4">
                            <p className='mb-2'>Total Tariff <span className='text-[#56CA00]'>$</span></p>
                            <TextField className='w-full text-[14px] ' id="outlined-basic" label='' variant="outlined" />
                        </div>
                        <div className="w-1/4">
                            <p className='mb-2'>Deposit <span className='text-[#56CA00]'>$</span></p>
                            <TextField className='w-full text-[14px] ' id="outlined-basic" label='' variant="outlined" />
                        </div>
                    </div>
                </div>

                <div className="mt-16 mb-16">
                    <CardGogle />
                </div>
            </div>
            <Footer/>
        </div>

    );
};



export default Quotes;