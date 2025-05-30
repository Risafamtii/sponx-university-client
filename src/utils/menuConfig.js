import { Children } from 'react';
import {  
    FaBorderAll,  
    FaGavel,       
    FaUsers,         
    FaBuilding,       
    FaRegFutbol,      
    FaCalendarAlt,     
    FaDollarSign,    
    FaBell,            
    FaCog,
    FaEnvelope,
    FaMobileAlt,
    FaAd,
    FaMoneyCheckAlt 
             
} from 'react-icons/fa';
import { BiSolidSelectMultiple } from "react-icons/bi";
import { MdEvent } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

//const userType = [admin,club,company]

const menuConfig = {
    admin: [
        { name: 'Overview', basePath: '/admin/overview', icon: FaBorderAll },

        { name: 'Bids', basePath: '/admin/bids', icon: FaGavel },

        { name: 'Users', basePath: '/admin/users', icon: FaUsers ,
            Children: [
                { name: 'Companies', basePath: '/admin/users/companies', icon: FaBuilding },
                { name: 'Organizations', basePath: '/admin/users/orgs', icon: FaRegFutbol },
            ]
        },

        { name: 'Events', basePath: '/admin/events', icon: FaCalendarAlt },

        { name: 'Payments', basePath: '/admin/payments', icon: FaDollarSign },

        { name: 'Notifications', basePath: '/admin/notifications', icon: FaBell ,
            Children: [
                { name: 'Compose', basePath: '/admin/notifications/compose', icon: FaEnvelope },
                { name: 'Sent', basePath: '/admin/notifications/sent', icon: FaMobileAlt },
            ]
        },

        { name: 'Settings', basePath: '/admin/settings', icon: FaCog },
    ],

    org: [
        { name: 'Overview', basePath: '/org/overview', icon: FaBorderAll },
        { name: 'Advertise', basePath: '/org/advertise', icon: FaAd },
        { name: 'Transaction', basePath: '/org/bankdetails', icon: FaMoneyCheckAlt  },
        { name: 'Events', basePath: '/org/myevents', icon: MdEvent },
        { name: 'Profile', basePath: '/org/profile', icon: CgProfile },
        { name: 'Ad', basePath: '/org/selectad', icon: BiSolidSelectMultiple },


    ],

    company: [
        { name: 'Overview', basePath: '/company/overview', icon: FaBorderAll },
        { name: 'Sponsorship', basePath: '/company/sponsorship', icon: FaAd },
        { name: 'Payment', basePath: '/company/payment', icon: FaMoneyCheckAlt  },
        { name: 'Events', basePath: '/company/events', icon: MdEvent },
        { name: 'Profile', basePath: '/company/profile', icon: CgProfile },
    ]
};

export default menuConfig;
