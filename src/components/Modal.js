import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoutSvg from '../asset/svg/LogoutSvg'
import ProfileSvg from '../asset/svg/ProfileSvg'
import SettingSvg from '../asset/svg/SettingSvg'

const Modal = () => {
  return (
    <div className=' text-white absolute h-10 w-48  bottom-48 z-50 left-5'>
       
<div className="w-full text-gray-900 bg-white rounded-lg border border-gray-200">

        <NavLink  to="/profile"
            className="inline-flex relative items-center py-2 px-4 w-full text-sm font-medium rounded-t-lg border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2"
            >
            <div className='flex'>

            <ProfileSvg/>
            <span className=' ml-2'>Profile</span>
            </div>
         </NavLink> 

         <NavLink
            to="/settings"
            className="inline-flex relative items-center py-2 px-4 w-full text-sm font-medium rounded-t-lg border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2"
          >
            <div className='flex'>
              <SettingSvg/>
            <span className=' ml-2'>Settings</span>
            </div>
         </NavLink>
    <button type="button" className="inline-flex relative items-center py-2 px-4 w-full text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700">
      <LogoutSvg/>
    <span className=' ml-2'>Logout</span>
    </button>
   
 
</div>

    </div>
  )
}

export default Modal