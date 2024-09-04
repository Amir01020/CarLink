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
    'Posted CD',
    'Not signed',
    'Dispatched',
    'Issues',
    'Picked-Up',
    'Hold',
    'Archived',
]
const Leads = () => {
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
                        <tr className='bg-[#FCFCFC] h-[100px]'>
                            <th className='py-[20px]   flex items-center gap-9 text-[16px] font-[600] text-[#585757]'>
                                <input
                                    type="checkbox"
                                    // checked={checkedItems}
                                    onChange={handleSelectAll}
                                    className='w-[15px] border-[2px] h-[32px] rounded-xl' />
                                ID
                            </th>
                            <th className=' py-[20px] text-[16px] font-[600] text-[#585757]'>Quoted</th>
                            <th className='text-start text-[16px] font-[600] text-[#585757]'>Notes</th>
                            <th className='text-start py-[20px] text-[16px] font-[600] text-[#585757]'>Assigned to</th>
                            <th className='text-start py-[20px] text-[16px] font-[600] text-[#585757]'>Shipper</th>
                            <th className='text-start py-[20px] text-[16px] font-[600] text-[#585757]'>Vehicles</th>
                            <th className='text-start py-[20px] text-[16px] font-[600] text-[#585757]'>Orig/Dest</th>
                            <th className=' py-[20px] text-[16px] font-[600] text-[#585757]'>Quote</th>
                            <th className=' py-[20px] text-[16px] font-[600] text-[#585757]'>Est. Ship</th>

                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {DataArr.map((i, index) => (
                            <tr
                                key={i.id}
                                className={`py-[10px] px-[10px] ${index % 2 != 0 ? 'bg-[#fff]' : 'bg-[#F7F6FE]'} border-b-[1px] border-b-[#BEBEBE]   `}>
                                <td className='text-[12px] px-[10px]  font-[600] '>
                                    <div className="flex items-center gap-5">
                                        <input
                                            onChange={() => {
                                                handleCheckboxChange(i)
                                            }}
                                            checked={i.checkbox}
                                            type="checkbox"
                                            className='w-[15px] border-[2px] h-[32px] rounded-xl'
                                            name=""
                                            id="" />

                                        <div className="text-start">
                                            <p className='text-[#4880FF]'>{i.ID}</p>
                                            <p className='text-[#56CA00]'>{i.provider}</p>
                                            <p className='text-[#979797]'>{i.Status}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className='text-[12px] px-[10px]  font-[600] '>
                                    {i.Quoted}
                                </td>
                                <td className='text-[12px] px-[10px]  font-[600] '>
                                    <div className="flex gap-5" key={i.Notes}>
                                        <div className="w-[20px] h-[20px] border-[#979797] border-[2px] rounded-[5px] border-solid"></div>
                                        <div className="w-[20px] h-[20px] border-[#979797] border-[2px] rounded-[5px] border-solid"></div>
                                    </div>
                                </td>
                                <td className='text-[12px] px-[10px]  font-[600] '>
                                    <div className="flex gap-5 items-center">
                                        <div className="w-[36px] h-[36px] rounded-full overflow-hidden">
                                            <img className='w-full' src={i.Assignet.img} alt="" /></div>
                                        {i.Assignet.name}
                                    </div>
                                </td>
                                <td className='text-[12px] px-[10px] py-2 font-[600] '>
                                    <div className="flex mb-[10px] items-center gap-3">
                                        <img className='w-5' src="/person.svg" alt="" /><p>{i.Shipper.userName}</p>
                                    </div>
                                    <div className="flex mb-[10px] items-center gap-3">
                                        <img className='w-5' src="/Vector.svg" alt="" /><p>{i.Shipper.userTel}</p>
                                    </div>
                                    <div className="flex mb-[10px] items-center gap-3">
                                        <img className='w-5' src="/Vector-1.svg" alt="" /><p>{i.Shipper.userEmail}</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <img className='w-5' src="/Vector-2.svg" alt="" /><p>{i.Shipper.userUrls}</p>
                                    </div>
                                </td>
                                <td className='text-[12px] px-[10px]  font-[600] '>
                                    <div className="flex gap-3 items-center">
                                        <img className='w-16' src={i.Vehicles.img_auto} alt="" />
                                        <p>{i.Vehicles.name_auto}</p>
                                    </div>
                                </td>
                                <td className='text-[12px] px-[10px]  font-[600] '>
                                    <div className="flex items-center gap-5">
                                        <img src="/dot.svg" className='w-3' alt="" /><p>{i.path.Orig}</p>
                                    </div>
                                    <img src="/line.svg" className='w-3' alt="" />
                                    <div className="flex items-center gap-5">
                                        <img src="/flag.svg" className='w-3' alt="" /><p>{i.path.Dest}</p>
                                    </div>
                                </td>
                                <td className='text-[12px] px-[10px]  font-[600] '>
                                    <p>Tariff: <span className='text-[#FF4F00] font-[700]'>${i.Quote.Tariff}</span></p>
                                    <p>Deposit: <span className='text-[#4880FF] mt-[15px] font-[700]'>${i.Quote.Deposit}</span></p>
                                </td>
                                <td className='text-[12px] px-[10px] text-center  font-[600] '>{i.Est}</td>

                            </tr>
                        ))}

                    </tbody>
                </table>
                <div className="flex justify-between items-center mt-16 mb-[30px]">
                    <p>Showing 1-09 of 78</p>
                    <div className="border-[0.6px] border-[#D5D5D5] rounded-xl flex items-center justify-center">
                        <div className="hover:bg-[#e4e2e2] overflow-hidden cursor-pointer border-r-[1px] border-r-[#979797]"><img src="/arrow.svg" className='mx-[25px] my-[10px] rotate-[180deg]' alt="" /></div>
                        <div className="hover:bg-[#e4e2e2] overflow-hidden cursor-pointer"><img src="/arrow.svg" className='mx-[25px] my-[10px]' alt="" /></div>
                    </div>
                </div>

            </div>
            <footer className='cont px-[20px]' >
                <div className="flex items-center gap-[34px] border-t-[1px] border-[#979797] py-8">
                    <div className="hover:bg-slate-300 flex items-center justify-center cursor-pointer w-[60px] h-[60px]  rounded-full">
                        <IoIosMore className=' text-[40px] ' />

                    </div>
                    <div className={`${isCheckboxChecked ? 'flex  ' : 'hidden'} gap-2`}>
                        <Button_foot text='REASSIGN' />
                        <Button_foot text='SMS' />
                        <Button_foot text='EMAIL' />
                    </div>
                </div>
            </footer>
        </div>
    );
};



export default Leads;