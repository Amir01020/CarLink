import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Ttext = ({ title, comment, status,id,control, setControl ,linkUrl}) => {
   

    const updateItem = (id) => {
        // Сначала сбрасываем все activity в false, затем обновляем конкретный элемент
        const updatedItems = control.map(item =>
            item.id === id
                ? { ...item, activity: true } // Обновляем только нужный элемент
                : { ...item, activity: false } // Все остальные элементы сбрасываются в false
        );

        setControl(updatedItems); 
        
    };

    return (
        <div
            onClick={() => updateItem(id)} // Используем числовое значение id
            className={`cursor-pointer transition-[0.3s] mb-2 hover:text-[#0047E1] ${status ? 'text-[#0047E1]' : ''}`}>
            <h4 className='text-[12px] font-[600]'><Link to={linkUrl}>{title}</Link></h4>
            <p className='text-[6px] mt-0 opacity-60 font-[600]'>{comment}</p>
            <div className="h-[0.5px] mt-2 bg-[#9298A4]" />
        </div>
    );
};

export default Ttext;
