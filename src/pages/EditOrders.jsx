import React from 'react';
import { useParams } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { Button } from '@mui/material';
import TextH2 from '../components/TextH2';
import TextP from '../components/TextP';
import { BsPaperclip } from 'react-icons/bs';
import Swiper_cont from '../components/Swiper_cont';
import CardGogle from '../components/CardGogle';
import { MdOutlineMail } from 'react-icons/md';
import { CiSquareMore } from 'react-icons/ci';
import Footer from '../components/Footer';
import { IoIosMore } from 'react-icons/io';

const EditOrders = () => {
    const { id } = useParams()
    const arr = useData();
    function findItemById(array, id) {
        return array.find(item => item.ID === id);
    }
    const obj = findItemById(arr, id)
    return (
        <div className='bg-[#F6F6F8] pt-5 px-[10px]'>
            <div className="flex justify-between">
                <div
                    className="flex text-[8px] gap-5 font-[500] "
                >
                    <div className="px-4  h-fit gap-5 rounded-md flex items-center bg-white py-2">
                        <p className='text-[#0047E1]'>ID</p>
                        <p className='text-[#4880FF]'>{obj.ID}</p>
                    </div>
                    <div className="px-4  h-fit gap-5 rounded-md flex items-center bg-white py-2">
                        <p className='text-[#0047E1]'>Status</p>
                        <p className='text-[#56CA00]'>{obj.Status}</p>
                    </div>
                </div>
                <div className="flex justify-end items-center gap-5  mb-5">
                    <Button sx={{ background: '#4880FF', color: "white", fontSize: '8px' }}>Save and send quote</Button>
                    <Button sx={{ background: '#4880FF', color: "white", fontSize: '8px' }}>Save and convert to oreder</Button>
                    <Button sx={{ background: '#56CA00', color: "white", fontSize: '8px' }}>EDIT</Button>
                </div>
            </div>
            <div className="px-5 py-2 rounded-xl bg-white">
                <TextH2 text='E-Sign' />
                <TextP text='Customer Contract' color='#585757' font='600' />
                <div className="font-[600] flex mt-4 gap-2">
                    <div className="px-2 rounded-2xl flex items-center justify-center py-1 border-[1px] border-[#979797]">
                        <TextP text='open' color={`#585757`} />
                    </div>
                    <div className="px-2 rounded-2xl flex items-center justify-center py-1 border-[1px] border-[#979797]">
                        <TextP text='resend' color={`#585757`} />
                    </div>
                    <div className="px-2 rounded-2xl flex items-center justify-center py-1 border-[1px] border-[#979797]">
                        <TextP text='sms' color={`#585757`} />
                    </div>
                    <div className="px-2 rounded-2xl flex items-center justify-center py-1 border-[1px] border-[#979797]">
                        <TextP text='view all' color={`#585757`} />
                    </div>
                    <div className="px-2 rounded-2xl flex items-center justify-center py-1 border-[1px] border-[#979797]">
                        <TextP text='change terms & send' color={`#FF4F00`} />
                    </div>
                </div>
            </div>
            <div className="px-5 py-2 rounded-xl mt-4 bg-white">
                <TextH2 text={'Order Information'} />
                <div className="pb-2 flex justify-between ">
                    <div className="flex flex-col gap-1 ">
                        <div className="flex gap-2">
                            <TextP text={'Assigned To:'} color={'#4880FF'} />
                            <TextP text={'Allan'} color={''} />
                        </div>
                        <div className="flex gap-2">
                            <TextP text={'Shipper:'} color={'#4880FF'} />
                            <TextP text={'Travis Lewin'} color={''} />
                        </div>
                        <div className="flex gap-2">
                            <TextP text={'(941) 321-8641'} color={''} />
                            <TextP text={'sms'} color={'#56CA00'} />
                        </div>
                        <TextP text={'travis357mag@yahoo.com'} color={'#4880FF'} />
                    </div>
                    <div className="flex flex-col gap-1 ">
                        <div className="flex gap-2">
                            <TextP text={'Origin:'} color={'#4880FF'} />
                            <TextP text={'Gilbert , AZ'} color={''} />
                        </div>
                        <TextP text={'Destination: North Port , FL '} color={''} />
                        <TextP text={'Enclosed'} color={'#FF4F00'} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <TextP text={'1956 Chevrolet Pickup (Pickup)   '} color={'#000'} />
                        <img src="/editimg.png" className='w-[80px]' alt="" />
                    </div>
                </div>
            </div>
            <div className="px-5 py-2 rounded-xl mt-4 bg-white">
                <TextH2 text={'Order Information'} />
                <div className="pb-2 flex justify-between ">
                    <div className="flex flex-col gap-1 ">
                        <div className="flex gap-2">
                            <TextP text={'Tariff:'} color={'#585757'} />
                            <TextP text={' $1450.00'} color={''} />
                        </div>
                        <div className="flex gap-2">
                            <TextP text={'Required Deposit:'} color={'#585757'} />
                            <TextP text={'$250.00'} color={''} />
                        </div>
                        <div className="flex gap-2">
                            <TextP text={'Received:'} color={'#585757'} />
                            <TextP text={' $0'} color={''} />
                        </div>
                        <div className="flex gap-2">
                            <TextP text={'Carrier Pay:'} color={'#585757'} />
                            <TextP text={'$1200.00'} color={''} />
                        </div>
                        <div className="flex gap-2">
                            <TextP text={'Carrier received:'} color={'#585757'} />
                            <TextP text={' $0'} color={''} />
                        </div>
                        <div className="flex gap-2">
                            <TextP text={'COD to Carrier:'} color={'#585757'} />
                            <TextP text={'$1200'} color={''} />
                        </div>

                    </div>
                    <div className="flex flex-col gap-1 ">
                        <div className="flex gap-2">
                            <TextP text={'1st Avail Pickup:'} color={'#585757'} />
                            <TextP text={'03/01/2024'} color={''} />
                        </div>
                        <div className="flex gap-2">
                            <TextP text={'Date Signed:'} color={'#585757'} />
                            <TextP text={''} color={''} />
                        </div>
                        <div className="flex gap-2">
                            <TextP text={'Dispatched:'} color={'#585757'} />
                            <TextP text={''} color={''} />
                        </div>
                        <div className="flex gap-2">
                            <TextP text={'Load:'} color={'#585757'} />
                            <TextP text={'03/01/2024 ()'} color={''} />
                        </div>
                        <div className="flex gap-2">
                            <TextP text={'Delivery:'} color={'#585757'} />
                            <TextP text={'03/01/2024 ()'} color={''} />
                        </div>
                        <div className="flex gap-2">
                            <TextP text={'Picked-up:'} color={'#585757'} />
                            <TextP text={''} color={''} />
                        </div>
                        <div className="flex gap-2">
                            <TextP text={'Delivered:'} color={'#585757'} />
                            <TextP text={''} color={''} />
                        </div>

                    </div>
                    <div className=""></div>
                </div>
            </div>
            <div className="px-5 py-2 rounded-xl mt-4 bg-white">
                <TextH2 text={'Shipping Information'} />
                <div className="pb-2 flex justify-between">
                    <TextP color={'#585757'} text={'Information for shipper'} />
                    <TextP color={'#585757'} text={'Notes from shipper'} />
                    <div className=""></div>
                </div>
            </div>
            <div className="flex justify-between mt-4 w-full ">
                <div className="px-5 py-2 rounded-xl  w-1/2 bg-white">
                    <TextH2 text={'Internal Notes'} />
                    <div className="flex justify-end gap-5 ">
                        <p className='text-[8px] font-[600] text-[#585757]'>Stop</p>
                        <p className='text-[8px] font-[600] text-[#FF4F00]'>No need</p>
                    </div>
                    <textarea
                        className='text-[8px] p-2 max-h-[100px] border-[1px] rounded-lg border-[#585757] min-h-[100px] mt-2 w-full '
                        name="" id=""></textarea>
                    <div className="flex gap-1 items-center">
                        <Button sx={{ fontSize: '8px', background: '#56CA00', color: '#fff' }}>Save</Button>
                        <BsPaperclip className='text-[#979797]  text-[20px]' />
                    </div>
                    <div className="">
                        <Swiper_cont />
                    </div>
                </div>
                <div className="w-1/2 px-5  ">
                    <CardGogle />
                </div>
            </div>
            <div className="px-5 py-2 rounded-xl mt-4 bg-white">
                <TextH2 text={'Shipping Information'} />
                <div className="pb-2 flex justify-between text-[#5A8CFF]">
                    <TextP color={''} text={'Carrier'} />
                    <TextP color={''} text={'Driver'} />
                    <div className=""></div>
                </div>
            </div>
            <div className="px-5 py-2 rounded-xl mt-4 bg-white">
                <TextH2 text={'Messages'} />
                <table className='w-full '>
                    <thead>
                        <tr className='bg-[#F6F6F8]'>
                            <th className='text-[] py-1 pr-5 text-[8px] text-start font-[600]' >Type</th>
                            <th className='text-[] py-1 pr-5 text-start text-[8px] font-[600]' >From</th>
                            <th className='text-[] py-1 pr-5 text-start text-[8px] font-[600]' >Subject</th>
                            <th className='text-[] py-1 pr-5 text-start text-[8px] font-[600] whitespace-nowrap' >Created By</th>
                            <th className='text-[] py-1 text-[8px]  text-start font-[600]' >Created</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr className=' bg-[#fff]'>
                            <th className='text-[] py-1 text-[8px] pl-1 text-center font-[600]' ><MdOutlineMail className='text-[12px] text-[#FF4F00]' /></th>
                            <th className='text-[#585757] py-1 text-start pr-5 text-[8px] font-[600]' >allan@royalautoship.com </th>
                            <th className='text-[#979797] py-1 text-start pr-5 text-[8px] font-[600]' >Car shipping quote </th>
                            <th className='text-[#0047E1] py-1 text-start pr-5 text-[8px] font-[600]' >Allan</th>
                            <th className='text-[#979797] py-1 text-start pr-5 text-[8px] font-[600]' >10.01.2024</th>
                        </tr>
                        <tr className=' bg-[#F6F6F8]'>
                            <th className='text-[] py-1  text-[8px] pl-1 font-[600]' ><CiSquareMore className='text-[12px] text-[#585757]' /></th>
                            <th className='text-[#585757] py-1  text-start pr-5 text-[8px] font-[600]' >8882371220 </th>
                            <th className='text-[#979797] py-1  text-start pr-5 text-[8px] font-[600]' >
                                Hi Tristyn Tuck, I am Allan with Royal Auto Ship and here is your quote info. - $700 total estimate - All inclusive package - 5-star
                                company - $0 payment until we book a spot Reply to my message "YES" if you are interested or give me a call at
                            </th>
                            <th className='text-[#0047E1] py-1 text-start pr-5 text-[8px] font-[600]' >Allan</th>
                            <th className='text-[#979797] py-1 text-start pr-5 text-[8px] font-[600]' >10.01.2024</th>
                        </tr>

                    </tbody>
                </table>
            </div>
            <div className="px-5 py-2 rounded-xl mt-4 bg-white">
                <TextH2 text={'Payments'} />
                <table className='w-full'>
                    <thead className='bg-[#F6F6F8]'>
                        <th className='text-start text-[8px] font-[600]'>Date</th>
                        <th className='text-[8px] font-[600]'>Amount</th>
                        <th className='text-[8px] font-[600]'>Amount Charged</th>
                        <th className='text-[8px] font-[600]'>Type</th>
                        <th className='text-[8px] font-[600]'>To</th>
                        <th className='text-[8px] font-[600]'>Direction</th>
                        <th className='text-[8px] font-[600]'>Status</th>
                    </thead>
                    <tbody>
                        <tr className=' bg-[#fff]'>
                            <th className='text-[] py-1    text-[8px]  font-[600]' >
                                <MdOutlineMail className='text-center text-[12px] text-[#FF4F00]' />
                            </th>
                            <th className='text-[#585757] py-1   text-[8px] font-[600]' >allan@royalautoship.com </th>
                            <th className='text-[#979797] py-1   text-[8px] font-[600]' >Car shipping quote </th>
                            <th className='text-[#0047E1] py-1   text-[8px] font-[600]' >Allan</th>
                            <th className='text-[#979797] py-1   text-[8px] font-[600]' >10.01.2024</th>
                            <th className='text-[#979797] py-1   text-[8px] font-[600]' >10.01.2024</th>
                            <th className='text-[#979797] py-1   text-[8px] font-[600]' >10.01.2024</th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="px-5 py-2 rounded-xl mt-4 bg-white">
                <TextH2 text={'Payment Logs'} />
                <table className='w-full'>
                    <thead className='bg-[#F6F6F8]'>
                        <th className='text-start text-[8px] font-[600]'>Date</th>
                        <th className='text-[8px] font-[600]'>Amount</th>
                        <th className='text-[8px] font-[600]'>Result</th>
                        <th className='text-[8px] font-[600]'>Description</th>
                        <th className='text-[8px] font-[600]'>Type</th>
                        <th className='text-[8px] font-[600]'>Log Type</th>
                    </thead>
                    <tbody>
                        <tr className=' bg-[#fff]'>
                            <th className='text-[] py-1    text-[8px]  font-[600]' >
                                <MdOutlineMail className='text-center text-[12px] text-[#FF4F00]' />
                            </th>
                            <th className='text-[#585757] py-1   text-[8px] font-[600]' >allan@royalautoship.com </th>
                            <th className='text-[#979797] py-1   text-[8px] font-[600]' >Car shipping quote </th>
                            <th className='text-[#0047E1] py-1   text-[8px] font-[600]' >Allan</th>
                            <th className='text-[#979797] py-1   text-[8px] font-[600]' >10.01.2024</th>
                            <th className='text-[#979797] py-1   text-[8px] font-[600]' >10.01.2024</th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="px-5 py-2 rounded-xl mt-4 bg-white">
                <TextH2 text={'Ticked ID'} />
                <table className='w-full'>
                    <thead className='bg-[#F6F6F8]'>
                        <th className='text-start text-[8px] font-[600]'>Ticked ID</th>
                        <th className='text-[8px] font-[600]'>Subject</th>
                        <th className='text-[8px] font-[600]'>Assigned to</th>
                        <th className='text-[8px] font-[600]'>Created By</th>
                        <th className='text-[8px] font-[600]'>Status</th>
                    </thead>
                    <tbody>
                        <tr className=' bg-[#fff]'>
                            <th className='text-[] py-1    text-[8px]  font-[600]' >
                                <MdOutlineMail className='text-center text-[12px] text-[#FF4F00]' />
                            </th>
                            <th className='text-[#585757] py-1   text-[8px] font-[600]' >allan@royalautoship.com </th>
                            <th className='text-[#979797] py-1   text-[8px] font-[600]' >Car shipping quote </th>
                            <th className='text-[#0047E1] py-1   text-[8px] font-[600]' >Allan</th>
                            <th className='text-[#979797] py-1   text-[8px] font-[600]' >10.01.2024</th>

                        </tr>
                    </tbody>
                </table>
            </div>
            <footer className='cont px-[10px] ' >
                <div className="flex items-center justify-between gap-[34px]  py-4">
                    <div className="hover:bg-[#4880FF] hover:text-[#fff] flex items-center justify-center cursor-pointer w-[25px] h-[25px]  rounded-full">
                        <IoIosMore className=' text-[14px] transition-none ' />

                    </div>
                    <div className="flex gap-5 items-center">
                        <Button sx={{ background: '#4880FF', fontSize:'8px' }} variant="contained">Save and send quote</Button>
                        <Button sx={{ background: '#4880FF', fontSize:'8px' }} variant="contained">Save and convert to oreder</Button>
                        <Button sx={{ background: '#56CA00', fontSize:'8px' }} variant='contained'>SAVE</Button>
                    </div>

                </div>
            </footer>
        </div>
    );
};



export default EditOrders;