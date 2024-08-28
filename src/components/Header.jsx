import React from "react";
import {Link, NavLink} from 'react-router-dom';

function Header(){
    return(
    <>
    <nav className="w-full flex justify-between items-center">
        
            <div>Logo</div>

            <div>
                <NavLink
                to='/'
                className={({isActive})=>
                isActive?'text-blue-500':''}
                >
                    Dashboard
                </NavLink>

                <NavLink
                to='/Analytics'
                className={({isActive})=>
                isActive?'text-blue-500':''}
                >
                    Analytics
                </NavLink>

                <NavLink
                to='/GetMobileAlerts'
                className={({isActive})=>
                isActive?'text-blue-500':''}
                >
                    Get Mobile Alerts
                </NavLink>

                <NavLink
                to='/Reports'
                className={({isActive})=>
                isActive?'text-blue-500':''}
                >
                    Reports
                </NavLink>
            </div>
            
            <div></div>
    
    </nav>
    </>
    
)
}

export default Header