import React, { useState, useEffect } from 'react';
import Text from '../components/admin_components/Ttext';

const Admin = () => {
    const [control, setControl] = useState([
        { title: 'Users Management', comment: 'Manage Users, Access Roles', activity: true, id: '1' },
        { title: 'Lead Management', comment: 'Configure Lead Distribution, Email Parser etc', activity: false, id: '2' },
        { title: 'System Settings', comment: 'Merchants, Templates, Offices etc.', activity: false, id: '3' },
        { title: 'Message Queue', comment: 'Email and SMS messages in the queue', activity: false, id: '4' },
        { title: 'Contracts', comment: 'Contract Templates', activity: false, id: '5' }
    ]);

    const updateActivityById = (id) => {
        const updatedItems = control.map(item => ({
            ...item,
            activity: item.id === id
        }));
        setControl(updatedItems);
        console.log(control);
    };

    

    return (
        <div className='flex'>
            <div className="w-[30%] p-5">
                {control.map((i) => (
                    <Text
                      
                        title={i.title}
                        comment={i.comment}
                        status={i.activity}
                    />
                ))}
            </div>
            <div className="w-[70%] p-5 bg-[#FAFAFA]">
                <Text title={'Users'} comment={'Create or update users'} />
            </div>
        </div>
    );
};

export default Admin;