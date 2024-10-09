import React from 'react';


const ChekboxForm = ({ arr, text }) => {
    return (
        <div>
            <p className='mb-2 text-[8px] mt-2'>{text}</p>
            <div className="flex gap-2">
                {
                    arr.map((i,idx) => (
                        <div key={idx} className="text-[8px] flex items-center gap-1">
                            <input type="radio" name='chek' />{i.name}
                        </div>
                    ))
                }

            </div>

        </div>
    );
};

ChekboxForm.propTypes = {}

export default ChekboxForm;