import React, { useState } from 'react';
import Text from '../components/admin_components/Ttext';

const Admin = () => {
    const [control, setControl] = useState([
        {
            componrnts: [
                {
                    title: 'Users',
                    link: 'users',
                    comment: 'Create or update users'
                },
                {
                    title: 'User List',
                    link: '',
                    comment: 'User list view'
                }, {
                    title: 'Group',
                    link: '',
                    comment: 'Create or update access roles'
                }
            ]
            , title: 'Users Management', link: '',
            comment: 'Manage Users, Access Roles', activity: true, id: '1'
        },
        {
            componrnts: [
                {
                    title: 'Leads distribution',
                    link: '',
                    comment: 'Numbers of leads assigned to a sales person'
                }, {
                    title: 'Email Parser Configuration',
                    link: '',
                    comment: 'Key value pairs'
                }, {
                    title: 'Lead Providers',
                    link: '',
                    comment: 'Email Lead Providers'
                },
            ]
            , title: 'Lead Management', link: '',
            comment: 'Configure Lead Distribution, Email Parser etc', activity: false, id: '2'
        },
        {
            componrnts: [
                {
                    title: 'Offices',
                    link: '',
                    comment: 'Create or update offices'
                }, {
                    title: 'Merchant Accounts',
                    link: '',
                    comment: 'Create or update merchant accounts'
                }, {
                    title: 'Templates',
                    link: '',
                    comment: 'Create or update templates'
                },
            ]
            , title: 'System Settings', link: '',
            comment: 'Merchants, Templates, Offices etc.', activity: false, id: '3'
        },
        {
            componrnts: [

            ]
            , title: 'Message Queue', link: '',
            comment: 'Email and SMS messages in the queue', activity: false, id: '4'
        },
        {
            componrnts: [
                {
                    title: 'Main Domestic Contract',
                    link: '',
                    comment: 'Terms And Conditions'
                }, {
                    title: 'Overseas Contract',
                    link: '',
                    comment: 'Terms And Conditions'
                }, {
                    title: 'Message Plane Board Contract',
                    link: '',
                    comment: 'Terms And Conditions'
                },
            ]
            , title: 'Contracts', link: '',
            comment: 'Contract Templates', activity: false, id: '5'
        }
    ]);








    return (
        <div className='cont flex'>
            <div className="w-[30%] p-5">
                {control.map((i) => (
                    <Text
                        title={i.title}
                        key={i.id}
                        id={i.id}
                        control={control}
                        setControl={setControl}
                        comment={i.comment}
                        status={i.activity}
                    />
                ))}
            </div>
            <div className="w-[70%] p-5 bg-[#FAFAFA]">
                {control.map(item => (
                    item.activity && (
                        item.componrnts.map(i => (
                            <Text
                                key={i.id}
                                title={i.title}
                                comment={i.comment}
                                linkUrl={i.link}
                            />
                        ))
                    )
                ))}
            </div>
        </div>
    );
};

export default Admin;