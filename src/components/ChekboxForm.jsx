import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function ChekboxForm({ arr , text}) {
    return (
        <FormControl>
            <FormLabel className='text-[18px] mt-5 mb-5' id="demo-radio-buttons-group-label">{text}</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >
                <div className="flex gap-3">
                    {
                        arr.map((item, idx) => (
                            <FormControlLabel  key={idx} value={item.name} control={<Radio />} label={item.name} />
                        ))
                    }
                </div>
            </RadioGroup>
        </FormControl>
    );
}
