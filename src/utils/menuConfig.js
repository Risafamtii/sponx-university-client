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
             
} from 'react-icons/fa';

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
    ]
};

export default menuConfig;
