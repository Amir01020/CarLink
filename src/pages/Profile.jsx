import React from 'react';
import TextCont from '../components/profil_components/TextCont';
import Form_cont from '../components/profil_components/Form';
import { Button } from '@mui/material';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { IoLockClosedOutline, IoPencilSharp } from 'react-icons/io5';
import BtnProfile from '../components/profil_components/BtnProfile';
import KardComment from '../components/profil_components/KardComment';


const Profile = () => {
    return (
        <div className="cont px-5">
            <h2 className='text-[14px] text-[#0047E1] mt-5 mb-2 font-[600]'>Personal Details</h2>
            <div className="flex justify-between gap-14">
                <div className="w-4/5">
                    <div className="flex items-end justify-between">
                        <div className="">
                            <div className="flex gap-4 items-end">
                                <div className="flex p-2 justify-center items-end w-[140px] relative h-[200px]">
                                    <img src="/profileImg.png" className='absolute top-0 left-0 h-full ' alt="" />
                                    <Button sx={{ fontSize: '8px', background: '#fff', width: '100%', borderRadius: '20px', fontWeight: '600', color: '#000' }}>Change Photo</Button>
                                </div>
                                <div className="">
                                    <TextCont title={'Name'} name={'Alan Berk'} />
                                    <TextCont title={'Gender'} name={'Male'} />
                                    <TextCont title={'Date of Birth'} name={'August 27th, 1990'} />
                                    <TextCont title={'Nationality'} name={'American'} />
                                </div>
                            </div>

                        </div>
                        <div className="">
                            <h4 className='text-[12px] font-[600]'>Address</h4>
                            <TextCont title={'Address Line'} name={'No 35 Jimmy Ebi Street'} />
                            <TextCont title={'City'} name={'Boston'} />
                            <TextCont title={'State'} name={'Boston'} />
                            <TextCont title={'Country'} name={'USA'} />
                        </div>
                        <div className="">
                            <h4 className='text-[12px] font-[600]'>Contact Details</h4>
                            <TextCont color={'#4880FF'} title={'Phone'} name={'+12152679296'} />
                            <TextCont color={'#4880FF'} title={'Email'} name={'alanberk90@gmail.com'} />
                            <TextCont color={'#56CA00'} title={'Position'} name={'Sales'} />
                            <TextCont op={true} title={'Position'} name={'Sales'} />

                        </div>
                    </div>
                    <div className="w-2/3 flex justify-between">
                        <div className="">
                            <h4 className='text-12px text-[#4880FF] font-[600] mb-5' >Message Plane App</h4>
                            <div className="flex items-center mb-3 gap-1">
                                <HiOutlineLocationMarker />
                                <div className="">
                                    <h4 className='text-[12px] font-[600]'>CRM SERVER URL</h4>
                                    <p className='text-[6px] text-[#979797] font-[600]'></p>
                                    <p className='text-[6px] text-[#4880FF] font-[600]'>carlink.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <IoLockClosedOutline />
                                <div className="">
                                    <h4 className='text-[12px] font-[600]'>CRM USER API KEY</h4>
                                    <p className='text-[6px] text-[#979797] font-[600]'>asdqwqwe231342deqewqw1312eeer3342frr</p>
                                    <p className='text-[6px] text-[#4880FF] font-[600]'>Generate a new key</p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="mb-2">
                                <h4 className='text-[12px] text-[#585757] font-[600]'>Leads</h4>
                                <div className="flex gap-1 items-center">
                                    <p className='text-[6px] text-[#4880FF] font-[600]'>New Leads are enabled</p>
                                    <BtnProfile />
                                </div>
                            </div>
                            <div className="mb-2">
                                <h4 className='text-[12px] text-[#585757] font-[600]'>Events</h4>
                                <p className='text-[6px] text-[#4880FF] font-[600]'>Manage Personal Events</p>
                            </div>
                            <div className="mb-2">
                                <h4 className='text-[12px] text-[#585757] font-[600]'>Follow Up</h4>
                                <p className='text-[6px] text-[#4880FF] font-[600]'>Manage Personal Events</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/5">
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
                            <KardComment/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Profile;