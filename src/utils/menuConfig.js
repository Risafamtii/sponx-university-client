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
                { name: 'Clubs', basePath: '/admin/users/clubs', icon: FaRegFutbol },
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

    club: [
        { name: 'Overview', basePath: '/club/overview', icon: FaBorderAll },
        { name: 'Advertise', basePath: '/club/advertise', icon: FaAd },
        { name: 'Bank', basePath: '/club/bankdetails', icon: FaMoneyCheckAlt  },
        { name: 'Club', basePath: '/club/clubdetails', icon: FaRegFutbol },
        { name: 'Events', basePath: '/club/myevents', icon: MdEvent },
        { name: 'Profile', basePath: '/club/profile', icon: CgProfile },
        { name: 'Ad', basePath: '/club/selectad', icon: BiSolidSelectMultiple },


    ]
};

export default menuConfig;
