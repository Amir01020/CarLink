import { TextField } from '@mui/material';
import React from 'react';


const InputForm = ({text,label}) => {
    return (
        <div className="w-[100%]">
            <p className='mb-3 text-[14px]'>{text}</p>
            <TextField className='w-full text-[14px] ' sx={{borderRadius:'15px', fontSize:'14px'}} id="outlined-basic" label={label} variant="outlined" />
        </div>
    );
};



export default InputForm;