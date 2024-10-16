import Button_foot from '../components/Button_foot'
import Filter_comp from '../components/Filter_comp'
import { useState } from 'react'
import { IoIosMore } from 'react-icons/io'
import OrderFilter from '../components/OrderFilter'

const arr = [
    {
        "ID": '300442995-RY',
        "Quoted": "02.09.2024   04:36 PM",
        "Notes": false,
        "provider": "LP:1k",

        "Assignet": {
            name: 'Lana Del Rey',
            img: '/img.png'
        },
        "Shipper": {
            userName: 'John Doe',
            userTel: '+11(916) 620-2734',
            userEmail: 'aerycfong@gmail.com',
            userUrls: 'quick view'
        },
        "Vehicles": {
            img_auto: '/auto.png',
            name_auto: 'Audi TT 2001 GT'
        },
        "path": {
            "Orig": "San Diego CA 92101",
            "Dest": "Clarksville TN 37040"
        },
        "Quote": {
            "Tariff": 1200,
            "Deposit": 0
        },
        "Est": "02.09.2024",
        "Status": "quote",
        "checkbox": false
    }, {
        "ID": '300442995-RY',
        "Quoted": "02.09.2024   04:36 PM",
        "Notes": false,
        "provider": "",

        "Assignet": {
            name: 'Lana Del Rey',
            img: '/img.png'
        },
        "Shipper": {
            userName: 'John Doe',
            userTel: '+11(916) 620-2734',
            userEmail: 'aerycfong@gmail.com',
            userUrls: 'quick view'
        },
        "Vehicles": {
            img_auto: '/auto.png',
            name_auto: 'Audi TT 2001 GT'
        },
        "path": {
            "Orig": "San Diego CA 92101",
            "Dest": "Clarksville TN 37040"
        },
        "Quote": {
            "Tariff": 1200,
            "Deposit": 0
        },
        "Est": "02.09.2024",
        "Status": "quote",
        "checkbox": false
    },
]

const filter_arr = [
    'Orders',
    'Posted',
    'Not signed',
    'Dispatched',
    'Issues',
    'Picked-Up',
    'Hold',
    'Archived',
]
const Tickets = () => {
    const [DataArr, setDataArr] = useState([...arr]);

    function handleSelectAll(event) {
        let copy = [...DataArr]
        const isChecked = event.target.checked;
        for (let i of copy) {
            i.checkbox = isChecked

        }
        setDataArr([...copy])
    }

    function handleCheckboxChange(item) {
        let copy = JSON.parse(JSON.stringify(DataArr))


        for (let i of copy) {
            if (i.ID === item.ID) {
                i.checkbox = !item.checkbox
            }

        }
        setDataArr([...copy])
        // console.log(DataArr);


    }
    const isCheckboxChecked = DataArr.some(item => item.checkbox === true);




    return (
        <div className="">
            <OrderFilter arr={filter_arr} />
            <div className="cont px-[10px] pt-[50px]">

                <table className='w-full'>
                    <thead className='text-center'>
                        <tr className='bg-[#FCFCFC] h-[30px]'>
                            <th className='py-[10px] ml-[10px] text-center flex items-center gap-5 text-[8px] font-[600] text-[#585757]'>
                                <input
                                    type="checkbox"
                                    // checked={checkedItems}
                                    onChange={handleSelectAll}
                                    className='w-[10px] border-[1px] h-[20px] rounded-xl' />
                                ID
                            </th>
                            <th className='text-center py-[10px] text-[8px] font-[600] text-[#585757]'>Subject</th>
                            <th className='text-center text-[8px] font-[600] text-[#585757]'>Created By</th>
                            <th className='text-center py-[10px] text-[8px] font-[600] text-[#585757]'>Assigned to</th>
                            <th className='text-center py-[10px] text-[8px] font-[600] text-[#585757]'>Order #</th>
                            <th className='text-center py-[10px] text-[8px] font-[600] text-[#585757]'>Follow Up</th>
                            <th className='text-center py-[10px] text-[8px] font-[600] text-[#585757]'>Created</th>
                            <th className='text-center py-[10px] text-[8px] font-[600] text-[#585757]'>Status</th>
                        </tr>
                    </thead>

                    <tbody className='text-center'>
                        {DataArr.map((i, index) => (
                            <tr
                                key={i.ID}
                                className={`py-[10px] px-[10px] ${index % 2 != 0 ? 'bg-[#fff]' : 'bg-[#F7F6FE]'} border-b-[1px] border-b-[#BEBEBE]   `}>
                                <td className='py-5 text-[8px] px-[10px]  font-[600] '>
                                    <div className="flex items-center gap-2">
                                        <input
                                            onChange={() => {
                                                handleCheckboxChange(i)
                                            }}
                                            checked={i.checkbox}
                                            type="checkbox"
                                            className='w-[10px] border-[2px] h-[32px] rounded-xl'
                                            name=""
                                            id="" />

                                        <div className="">
                                            <p className='text-[#4880FF]'>{i.ID}</p>

                                        </div>
                                    </div>
                                </td>
                                <td className='py-5 text-[8px] text-[#4880FF] px-[10px]  font-[600] '>
                                    {i.Quoted}
                                </td>
                                <td className='py-5 text-[8px]   font-[600] '>
                                    <p>
                                        Manager
                                    </p>
                                </td>
                                <td className='py-5 text-[8px] px-[10px]  font-[600] '>
                                    <div className="flex gap-2 justify-center items-center">
                                        <div className="w-[25px] h-[25px] rounded-full overflow-hidden">
                                            <img className='w-full' src={i.Assignet.img} alt="" /></div>
                                        {i.Assignet.name}
                                    </div>
                                </td>
                                <td className='py-5 text-[8px] text-[#4880FF] px-[10px]  font-[600] '>
                                    <p>300442995-RY</p>
                                </td>
                                <td className='py-5 text-[8px] px-[10px]  font-[600] '>
                                    <p>#4880FF</p>
                                </td>
                                <td className='py-5 text-[8px] px-[10px]  font-[600] '>
                                    <p>02.09.2024   04:36 PM</p>
                                </td>

                                <td className='py-5 text-[8px] px-[10px]  font-[600] '>
                                    <div
                                        className={`${i.Status == "quote" ? 'bg-[#F0FFF2] text-[#56CA00]' : i.Status == 'hold' ? 'text-[#4880FF] bg-[#ECF1FF]' : 'text-[#FF4F00] bg-[#FFE6DB]'} min-w-[80px] rounded-full px-5 flex items-center justify-center py-2 bg-[#ECF1FF] text-[#4880FF]`}>{i.Status}</div>
                                </td>

                            </tr>
                        ))}

                    </tbody>
                </table>


            </div>
            <div className="cont">
                <div className="flex justify-between items-center px-[10px] mt-5 mb-[10px]">
                    <p className='text-[10px]'>Showing 1-09 of 78</p>
                    <div className="border-[0.6px] overflow-hidden border-[#D5D5D5] rounded-md flex items-center justify-center">
                        <div className="hover:bg-[#e4e2e2] overflow-hidden cursor-pointer border-r-[1px] border-r-[#979797]">
                            <img src="/arrow.svg" className='mx-[20px] w-[8px] my-[5px] rotate-[180deg]' alt="" />
                        </div>
                        <div className="hover:bg-[#e4e2e2] overflow-hidden cursor-pointer">
                            <img src="/arrow.svg" className='mx-[20px] w-[8px] my-[5px]' alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <footer className='cont px-[10px]' >
                <div className="flex items-center gap-[34px] border-t-[1px] border-[#979797] py-4">
                    <div
                        className="hover:bg-[#4880FF] hover:text-[#fff] flex items-center justify-center cursor-pointer w-[30px] h-[30px]  rounded-full">
                        <IoIosMore className=' text-[20px] transition-none ' />

                    </div>
                    <div className={`${true ? 'flex  ' : 'hidden'} gap-2`}>
                        <Button_foot text='REASSIGN' />
                        <Button_foot text='SMS' />
                        <Button_foot text='EMAIL' />
                    </div>
                </div>
            </footer>
        </div>
    );
};



export default Tickets;