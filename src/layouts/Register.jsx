import { Checkbox } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Register = () => {
    return (
        <div className='register_img absolute flex items-center justify-center w-full h-full bg-[#4880FF]'>

            <form action="" className='bg-white w-[35%] px-10 py-14 rounded-3xl'>
                <h2 className='text-center text-[28px] font-[700]'>Login to Account</h2>
                <p className='text-center text-[#202224] font-[500] mb-5'>Please enter your email and password to continue</p>
                <div className="">
                    <p className='text-[#202224] mb-4'>Email address:</p>
                    <input placeholder='esteban_schiller@gmail.com' className='w-full placeholder-[#A6A6A6] bg-[#F1F4F9] border border-[#D8D8D8] h-[40px] px-3 rounded-md outline-[#4880FF]' type="text" name="" id="" />
                </div>

                <div className="">

                    <div className="flex justify-between">
                        <p className='text-[#202224] mb-4 mt-10'>Password</p>
                        <p className='text-[#202224] opacity-60 cursor-pointer mb-4 mt-10'>Forget Password?</p>
                    </div>


                    <input placeholder='Password' className='w-full placeholder-[#A6A6A6] bg-[#F1F4F9] border border-[#D8D8D8] h-[40px] px-3 rounded-md outline-[#4880FF]' type="number" name="" id="" />
                </div>
                <div className="flex items-center gap-0">
                    <Checkbox {...label} defaultChecked />
                    <p>I accept terms and conditions</p>
                </div>

                <Link to='/home' className='w-full flex justify-center mt-10'><button className='w-4/5  bg-[#4880FF] h-[40px] text-white font-[700] rounded-md'>Sign Up</button></Link>


            </form>
        </div>
    );
};



export default Register;