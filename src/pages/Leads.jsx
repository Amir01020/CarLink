import Button_foot from '../components/Button_foot'
import Filter_comp from '../components/Filter_comp'
import { useState } from 'react'
import { IoIosMore } from 'react-icons/io'
import OrderFilter from '../components/OrderFilter'
import { useData } from '../context/DataContext';
import { Link } from 'react-router-dom'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'



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
    const arr = useData();
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
                    <thead>
                        <tr className='bg-[#FCFCFC] h-[60px]'>
                            <th className="px-1 py-3 text-left text-[8px] font-medium text-gray-500 tracking-wider">
                                <div className="flex items-center gap-1">
                                    <input
                                        type="checkbox"
                                        onChange={handleSelectAll}
                                        className='w-[15px] border-[2px] h-[32px] rounded-xl' />
                                    ID
                                    <div className="flex flex-col gap-0 cursor-pointer">
                                        <AiFillCaretUp className='text-[8px]' />
                                        <AiFillCaretDown className='text-[8px]' />
                                    </div>
                                </div>
                            </th>
                            <th className="px-1 py-3 text-left text-[8px] font-medium text-gray-500 tracking-wider">
                                <div className="flex items-center gap-1">
                                    Quoted
                                    <div className="flex flex-col gap-0 cursor-pointer">
                                        <AiFillCaretUp className='text-[8px]' />
                                        <AiFillCaretDown className='text-[8px]' />
                                    </div>
                                </div>
                            </th>
                            <th className="px-1 py-3 text-left text-[8px] font-medium text-gray-500 tracking-wider">
                                <div className="flex items-center gap-1">
                                    Notes

                                </div>
                            </th>
                            <th className="px-1 py-3 text-left text-[8px] font-medium text-gray-500 tracking-wider">
                                <div className="flex items-center gap-1">
                                    Assigned to
                                    <div className="flex flex-col gap-0 cursor-pointer">
                                        <AiFillCaretUp className='text-[8px]' />
                                        <AiFillCaretDown className='text-[8px]' />
                                    </div>
                                </div>
                            </th>
                            <th className="px-1 py-3 text-left text-[8px] font-medium text-gray-500 tracking-wider">
                                <div className="flex items-center gap-1">
                                    Shipper
                                    <div className="flex flex-col gap-0 cursor-pointer">
                                        <AiFillCaretUp className='text-[8px]' />
                                        <AiFillCaretDown className='text-[8px]' />
                                    </div>
                                </div>
                            </th>
                            <th className="px-1 py-3 text-left text-[8px] font-medium text-gray-500 tracking-wider">
                                <div className="flex items-center gap-1">
                                    Vehicles
                                    <div className="flex flex-col gap-0 cursor-pointer">
                                        <AiFillCaretUp className='text-[8px]' />
                                        <AiFillCaretDown className='text-[8px]' />
                                    </div>
                                </div>
                            </th>
                            <th className="px-1 py-3 text-left text-[8px] font-medium text-gray-500 tracking-wider">
                                <div className="flex items-center gap-1">
                                    Orig/Dest
                                    <div className="flex flex-col gap-0 cursor-pointer">
                                        <AiFillCaretUp className='text-[8px]' />
                                        <AiFillCaretDown className='text-[8px]' />
                                    </div>
                                </div>
                            </th>
                            <th className="px-1 py-3 text-left text-[8px] font-medium text-gray-500 tracking-wider">
                                <div className="flex items-center gap-1">
                                    Quote
                                    <div className="flex flex-col gap-0 cursor-pointer">
                                        <AiFillCaretUp className='text-[8px]' />
                                        <AiFillCaretDown className='text-[8px]' />
                                    </div>
                                </div>
                            </th>
                            <th className="px-1 py-3 text-left text-[8px] font-medium text-gray-500 tracking-wider">
                                <div className="flex items-center gap-1">
                                    Est. Ship
                                    <div className="flex flex-col gap-0 cursor-pointer">
                                        <AiFillCaretUp className='text-[8px]' />
                                        <AiFillCaretDown className='text-[8px]' />
                                    </div>
                                </div>
                            </th>
                        </tr>

                    </thead>
                    <tbody >
                        {DataArr.map((i, index) => (
                            <tr
                                key={i.id}
                                className={`py-[10px] px-[5px] ${index % 2 != 0 ? 'bg-[#fff]' : 'bg-[#F7F6FE]'} border-b-[1px] border-b-[#BEBEBE]`}>
                                {/* ID and Provider */}
                                <td className='text-[8px]  px-[5px] font-[600]'>
                                    <div className="flex items-center gap-1">
                                        <input
                                            onChange={() => handleCheckboxChange(i)}
                                            checked={i.checkbox}
                                            type="checkbox"
                                            className='w-[15px] border-[2px] h-[32px] rounded-xl' />
                                        <div className="text-start">
                                            <Link to={`/edit/${i.ID}`} className="flex items-center gap-5">

                                                <p className='text-[#4880FF]'>{i.ID}</p>
                                            </Link>
                                            <p className='text-[#56CA00]'>{i.provider}</p>
                                        </div>
                                    </div>
                                </td>

                                {/* Quoted */}
                                <td className='text-[8px] px-[5px] font-[600]'>{i.Quoted}</td>

                                {/* Notes */}
                                <td className='text-[8px] px-[5px] font-[600]'>
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-[15px] h-[15px] border-[#979797] border-[1px] rounded-[3px]"></div>
                                        <div className="w-[15px] h-[15px] border-[#979797] border-[1px] rounded-[3px]"></div>
                                    </div>
                                </td>

                                {/* Assignee */}
                                <td className='text-[8px] px-[5px] font-[600]'>
                                    <div className="flex flex-wrap gap-2 justify-center items-center">
                                        <div className="w-[25px] h-[25px] rounded-full overflow-hidden">
                                            <img className='w-full' src={i.Assignet.img} alt="" />
                                        </div>
                                        {i.Assignet.name}
                                    </div>
                                </td>

                                {/* Shipper Details */}
                                <td className='text-[8px] px-[5px] py-2 font-[600]'>
                                    <div className="flex mb-[10px] items-center gap-3">
                                        <img className='w-3' src="/person.svg" alt="" />
                                        <p>{i.Shipper.userName}</p>
                                    </div>
                                    <div className="flex mb-[10px] items-center gap-3">
                                        <img className='w-3' src="/Vector.svg" alt="" />
                                        <p>{i.Shipper.userTel}</p>
                                    </div>
                                    <div className="flex mb-[10px] items-center gap-3">
                                        <img className='w-3' src="/Vector-1.svg" alt="" />
                                        <p>{i.Shipper.userEmail}</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <img className='w-3' src="/Vector-2.svg" alt="" />
                                        <p>{i.Shipper.userUrls}</p>
                                    </div>
                                </td>

                                {/* Vehicle */}
                                <td className='text-[8px] px-[5px] font-[600]'>
                                    <div className="flex gap-3 justify-center flex-wrap items-center">
                                        <img className='w-10' src={i.Vehicles.img_auto} alt="" />
                                        <p>{i.Vehicles.name_auto}</p>
                                    </div>
                                </td>

                                {/* Route */}
                                <td className='text-[8px] px-[5px] font-[600]'>
                                    <div className="flex items-center gap-5">
                                        <img src="/dot.svg" className='w-2' alt="" />
                                        <p>{i.path.Orig}</p>
                                    </div>
                                    <img src="/line.svg" className='w-3' alt="" />
                                    <div className="flex items-center gap-5">
                                        <img src="/flag.svg" className='w-2' alt="" />
                                        <p>{i.path.Dest}</p>
                                    </div>
                                </td>

                                {/* Tariff and Deposit */}
                                <td className='text-[8px] px-[5px] font-[600]'>
                                    <p>Tariff: <span className='text-[#FF4F00] font-[700]'>${i.Quote.Tariff}</span></p>
                                    <p>Deposit: <span className='text-[#4880FF] font-[700]'>${i.Quote.Deposit}</span></p>
                                </td>

                                {/* Estimate */}
                                <td className='text-[8px] px-[5px] font-[600]'>{i.Est}</td>

                                {/* Status */}

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



export default Leads;