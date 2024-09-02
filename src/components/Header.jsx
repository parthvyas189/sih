import React from "react";
import {Link, NavLink} from 'react-router-dom';

function Header(){
    return(
    <>
    <nav className="w-full px-6 py-5 flex justify-between items-center bg-customBlue text-white">
        
            <div className="mr-6 flex items-center text-lg">
                <img src="src/Assets/Logo.png" alt="Logo" />    
                OIL SPILL
            </div>

            <div className="flex space-x-4">
                <NavLink
                to='/'
                className={({isActive})=>
                `flex items-center ${isActive ? 'underline' :''}`}
                >
                    <img src="src/Assets/Icon.png" alt="icon" className="w-4 h-4 mr-2" />
                    Dashboard
                </NavLink>

                <NavLink
                to='/Analytics'
                className={({isActive})=>
                `flex items-center ${isActive ? 'underline' :''}`}
                >
                    <img src="src/Assets/Icon.png" alt="icon" className="w-4 h-4 mr-2" />
                    Analytics
                </NavLink>

                <NavLink
                to='/GetMobileAlerts'
                className={({isActive})=>
                `flex items-center ${isActive ? 'underline' :''}`}
                >
                    <img src="src/Assets/Icon.png" alt="icon" className="w-4 h-4 mr-2" />
                    Get Mobile Alerts
                </NavLink>

                <NavLink
                to='/Reports'
                className={({isActive})=>
               `flex items-center ${isActive ? 'underline' :''}`}
                >
                    <img src="src/Assets/Icon.png" alt="icon" className="w-4 h-4 mr-2" />
                    Reports
                </NavLink>
            </div>
            
            <div className="ml-6 flex items-center">
                <img src="src/Assets/Icon1.png" alt="Icon" className="w-6 h-6 mr-2"/>
                <img src="src/Assets/Icon2.png" alt="Icon" className="w-6 h-6 mr-2" />
                <img src="src/Assets/Icon3.png" alt="Icon" className="w-6 h-6 mr-2" />
                <img src="src/Assets/Icon4.png" alt="Icon" className="w-15 h-10 mr-2" />
            </div>
    
    </nav>
    </>
    
)
}

export default Header