import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import CallListSvg from '../asset/svg/CallListSvg';
import FriendListSvg from '../asset/svg/FriendListSvg';
import GroupSvg from '../asset/svg/GroupSvg';
import MassageListSvg from '../asset/svg/MassageListSvg';
import NotificationSvg from '../asset/svg/NotificationSvg';



const SidebarMenu = ({props}) => {
  
  // Decide what show in ui
    let activeStyle = "flex items-center py-2 px-3 text-base font-normal text-white rounded-lg hover:bg-gray-100 hover:text-black";
  
    let activeclassName = "flex items-center py-2 px-3 text-base font-normal text-white rounded-lg bg-gray-100 hover:text-black";
    
  return (
   <div className=' flex flex-col relative'>
   <div className=" mb-64">
      <ul className="space-y-2">
         <NavLink
            to="/conversation"
            className={({ isActive }) =>
              isActive ? activeclassName : activeStyle
            }
          >
            <MassageListSvg/>
         </NavLink>
         <NavLink
            to="/list"
            className={({ isActive }) =>
              isActive ? activeclassName : activeStyle
            }
          >
            <FriendListSvg/>
         </NavLink>
         <NavLink
            to="/call"
            className={({ isActive }) =>
              isActive ? activeclassName : activeStyle
            }
          >
            <CallListSvg/> 
         </NavLink>
         <NavLink
            to="/group"
            className={({ isActive }) =>
              isActive ? activeclassName : activeStyle
            }
          >
            <GroupSvg/> 
         </NavLink>
         <NavLink
            to="/notification"
            className={({ isActive }) =>
              isActive ? activeclassName : activeStyle
            }
          >
            <NotificationSvg/>
         </NavLink>
      </ul>
   </div>
   <div>
      <img className=" cursor-pointer p-1 ml-2 w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="/asset/image/Anik.jpg" onClick={props}/>
   </div>
   </div>

   
  )
}

export default SidebarMenu







