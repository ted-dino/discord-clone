import React from 'react'
import '../styles/SideBar.css';
import LogOut from './LogOut';

function SideBar() {
    return (
        <div className ='SideBar'>
            <img className='SideBar__ProPic' src='../images/testimage.png' alt='computer cartoon guy'  />
            <LogOut />
        </div>
    )
}

export default SideBar
