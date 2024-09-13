import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { BsPaperclip } from 'react-icons/bs';

const Form = () => {
    const { register, watch, handleSubmit } = useForm();
    const textValue = watch("note", "");  // 'note' is the name of the textarea

    const onSubmit = (data) => {
        console.log(data);
    };


    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

    

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <p className='text-[6px] text-[#979797] font-[600] flex justify-end mb-1 mt-2'>
                {textValue.length} of 200
            </p>
            
            <textarea
                maxLength={200}
                className='max-h-14 min-h-14 text-[8px] p-1 outline-none border-[0.5px] border-[#B2B2B2] w-full rounded-md'
                {...register("note")}
            />
            <div className="flex gap-2">
                <Button sx={{ fontSize: '6px', background: '#0047E1', color: '#fff' }} type="submit">Add Note</Button>
                <button className='relative cursor-pointer' type="button">
                    <BsPaperclip className='text-[#979797]' />
                    <input className='absolute w-full top-0 left-0 cursor-pointer h-full opacity-0' type="file" />
                </button>
            </div>
        </form>
    );
};

export default Form;
