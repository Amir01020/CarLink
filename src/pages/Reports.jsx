import React from 'react';
import CardList from '../components/reports_components/CardList';


const arr = [
    { name: 'Lead Source Report', id: '0', urls: '' },
    { name: 'Booked Orders', id: '1', urls: '' },
    { name: 'Users Gross', id: '2', urls: '' },
    { name: 'Users Ratio', id: '3', urls: '' },
    { name: 'User Login Report', id: '4', urls: '' },
    { name: 'CRM Usage', id: '', urls: '5' },
    { name: 'Leads, Quotes and Orders', id: '6', urls: '' },
    { name: 'Customers', id: '7', urls: '' },
]


const Reports = () => {
    return (
        <div className='cont gap-5 justify-between flex-wrap px-5 flex pt-5'>
            {
                arr.map(i => (
                    <CardList text={i.name}/>

                ))
            }
        </div>
    );
};


export default Reports;