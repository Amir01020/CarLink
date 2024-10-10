// Import necessary dependencies
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { DataProvider } from '../context/DataContext';
import Modal from '../components/Modal';

const arr = [
    {
        "ID": '300442995-RY',
        "Quoted": "02.09.2024   04:36 PM",
        "Notes": false,
        "provider": "LP:1k",
        "Assignet": {
            name: 'Lana Del Rey',
            img: '/img.png'
        },
        "Shipper": {
            userName: 'John Doe',
            userTel: '+11(916) 620-2734',
            userEmail: 'aerycfong@gmail.com',
            userUrls: 'quick view'
        },
        "Vehicles": {
            img_auto: '/auto.png',
            name_auto: 'Audi TT 2001 GT'
        },
        "path": {
            "Orig": "San Diego CA 92101",
            "Dest": "Clarksville TN 37040"
        },
        "Quote": {
            "Tariff": 1200,
            "Deposit": 0
        },
        "Est": "02.09.2024",
        "Status": "121212",
        "checkbox": false
    }, {
        "ID": '300442995-RY1',
        "Quoted": "02.09.2024   04:36 PM",
        "Notes": false,
        "provider": "LP:1k",
        "Assignet": {
            name: 'Lana Del Rey',
            img: '/img.png'
        },
        "Shipper": {
            userName: 'John Doe',
            userTel: '+11(916) 620-2734',
            userEmail: 'aerycfong@gmail.com',
            userUrls: 'quick view'
        },
        "Vehicles": {
            img_auto: '/auto.png',
            name_auto: 'Audi TT 2001 GT'
        },
        "path": {
            "Orig": "San Diego CA 92101",
            "Dest": "Clarksville TN 37040"
        },
        "Quote": {
            "Tariff": 1200,
            "Deposit": 0
        },
        "Est": "02.09.2024",
        "Status": "quote",
        "checkbox": false
    }, {
        "ID": '300442995-RY3',
        "Quoted": "02.09.2024   04:36 PM",
        "Notes": false,
        "provider": "LP:1k",
        "Assignet": {
            name: 'Lana Del Rey',
            img: '/img.png'
        },
        "Shipper": {
            userName: 'John Doe',
            userTel: '+11(916) 620-2734',
            userEmail: 'aerycfong@gmail.com',
            userUrls: 'quick view'
        },
        "Vehicles": {
            img_auto: '/auto.png',
            name_auto: 'Audi TT 2001 GT'
        },
        "path": {
            "Orig": "San Diego CA 92101",
            "Dest": "Clarksville TN 37040"
        },
        "Quote": {
            "Tariff": 1200,
            "Deposit": 0
        },
        "Est": "02.09.2024",
        "Status": "quote",
        "checkbox": false
    }, {
        "ID": '300442995-RY4',
        "Quoted": "02.09.2024   04:36 PM",
        "Notes": false,
        "provider": "LP:1k",
        "Assignet": {
            name: 'Lana Del Rey',
            img: '/img.png'
        },
        "Shipper": {
            userName: 'John Doe',
            userTel: '+11(916) 620-2734',
            userEmail: 'aerycfong@gmail.com',
            userUrls: 'quick view'
        },
        "Vehicles": {
            img_auto: '/auto.png',
            name_auto: 'Audi TT 2001 GT'
        },
        "path": {
            "Orig": "San Diego CA 92101",
            "Dest": "Clarksville TN 37040"
        },
        "Quote": {
            "Tariff": 1200,
            "Deposit": 0
        },
        "Est": "02.09.2024",
        "Status": "quote",
        "checkbox": false
    },
    // ... other objects
]

const Layout = () => {
    const [count, setCount] = useState(false);
    
    return (
     
            <DataProvider data={arr}> {/* Use DataProvider to provide context */}
                <Header oupen={count} setOupen={setCount} />

                <main>
                    <Outlet />
                    <Modal oupen={count} />
                </main>
            </DataProvider>
       

    );
};

export default Layout;
