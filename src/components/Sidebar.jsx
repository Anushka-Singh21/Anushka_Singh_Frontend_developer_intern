import React from 'react'
import {BiHome , BiHomeAlt,BiMessage,BiSolidReport, BiStats,BiTask,BiBookAlt,BiHelpCircle}from 'react-icons/bi';

import "../styles/sidebar.css";
const Sidebar = () => {
  return <div className='menu'>
    <div className='logo'>
        <BiHomeAlt className='logo-icon' size={30} color='white' />
        
    <h2>KODERS</h2>
    </div>

    <div className='menu--list'>
        <a href="#" className="item">
            <BiHome className='icon' />
            Employee Activity Dashboard
        </a>
        <a href="#" className="item">
            <BiTask className='icon'/>
           Name
        </a>
        <a href="#" className="item">
            <BiSolidReport className='icon'/>
            Report
        </a>
        <a href="#" className="item">
            <BiStats className='icon'/>
            Stats
        </a>
        <a href="#" className="item">
            <BiMessage className='icon' />
            Message
        </a>
        <a href="#" className="item">
            <BiHelpCircle className='icon' />
            Help
        </a>
    </div>
  </div>
};

export default Sidebar;