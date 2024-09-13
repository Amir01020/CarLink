import { Link } from 'react-router-dom'
import Button_foot from '../components/Button_foot'
import Filter_comp from '../components/Filter_comp'
import { useState } from 'react'
import { IoIosMore } from 'react-icons/io'
import { useData } from '../context/DataContext';


const filter_arr = [
    'Follow-up Today',
    'Quotes',
    'Hold',
    'Archived',
]
const About = () => {
    const arr = useData();

    const [btn_item, setBtnitem] = useState(true)

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
            <Filter_comp arr={filter_arr} />
            <div className="cont px-[5px] pt-[20px]">

                <table className='w-full'>
                    <thead>
                        <tr className='bg-[#FCFCFC] h-[60px]'>
                            <th className='px-[5px] py-[10px] text-start pr-[10px] flex items-center gap-5 text-[8px] font-[600] text-[#585757]'>
                                <input
                                    type="checkbox"
                                    onChange={handleSelectAll}
                                    className='w-[15px] border-[2px] h-[32px] rounded-xl' />
                                ID
                            </th>
                            <th className='px-[5px] text-start py-[10px] text-[8px] font-[600] text-[#585757]'>Quoted</th>
                            <th className='px-[5px] text-start pl-9 py-[10px] text-[8px] font-[600] text-[#585757]'>Notes</th>
                            <th className='px-[5px] text-start py-[10px] text-[8px] font-[600] text-[#585757]'>Assigned to</th>
                            <th className='px-[5px] text-start py-[10px] text-[8px] font-[600] text-[#585757]'>Shipper</th>
                            <th className='px-[5px] text-start py-[10px] text-[8px] font-[600] text-[#585757]'>Vehicles</th>
                            <th className='px-[5px] text-start py-[10px] text-[8px] font-[600] text-[#585757]'>Orig/Dest</th>
                            <th className='px-[5px] text-start py-[10px] text-[8px] font-[600] text-[#585757]'>Quote</th>
                            <th className='px-[5px] text-start py-[10px] text-[8px] font-[600] text-[#585757]'>Est. Ship</th>
                            <th className='px-[5px] text-start py-[10px] text-[8px] font-[600] text-[#585757]'>Status</th>
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
                                <td className='text-[8px] px-[5px] font-[600]'>
                                    <div
                                        className={`${i.Status === "quote" ? 'bg-[#F0FFF2] text-[#56CA00]' : i.Status === 'hold' ? 'text-[#4880FF] bg-[#ECF1FF]' : 'text-[#FF4F00] bg-[#FFE6DB]'} min-w-[80px] rounded-full px-5 flex items-center justify-center py-2`}>
                                        {i.Status}
                                    </div>
                                </td>
                            </tr>

                        ))}

                    </tbody>
                </table>
                <div className="flex justify-between items-center mt-5 mb-[30px]">
                    <p className='text-[10px]'>Showing 1-09 of 78</p>
                    <div className="border-[0.6px] overflow-hidden border-[#D5D5D5] rounded-xl flex items-center justify-center">
                        <div className="hover:bg-[#e4e2e2] overflow-hidden cursor-pointer border-r-[1px] border-r-[#979797]">
                            <img src="/arrow.svg" className='mx-[20px] w-[14px] my-[5px] rotate-[180deg]' alt="" />
                        </div>
                        <div className="hover:bg-[#e4e2e2] overflow-hidden cursor-pointer">
                            <img src="/arrow.svg" className='mx-[20px] w-[14px] my-[5px]' alt="" />
                        </div>
                    </div>
                </div>

            </div>
            <footer className='cont px-[10px]' >
                <div className="flex items-center gap-[34px] border-t-[1px] border-[#979797] py-8">
                    <div className="hover:bg-[#4880FF] hover:text-[#fff] flex items-center justify-center cursor-pointer w-[40px] h-[40px]  rounded-full">
                        <IoIosMore className=' text-[30px] transition-none ' />

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



export default About;