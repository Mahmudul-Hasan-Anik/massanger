import React, { useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import BirthSvg from '../../asset/svg/BirthSvg';
import HomeSvg from '../../asset/svg/HomeSvg';
import GroupSvg from '../../asset/svg/GroupSvg'
import CameraSvg from '../../asset/svg/CameraSvg';
import ProfileModal from '../../components/ProfileModal';

const Profile = () => {
  const [cover, setCover] = useState(`url("/asset/image/cover.jpeg")`)
  const [show, setShow] = useState(false)

  const handleProfileImage = () => {
    console.log('click')
  }

  return (
    <>
    <div >
      <div style={{ 
      backgroundImage: cover,
      height:'150px'
      }}
      >
        <div className=' flex justify-between px-4 py-2'> 
          <h1 className=' font-semibold text-xl'>My Profile</h1>
          <button>
            <BsThreeDotsVertical/>
          </button>
        </div>
      </div>

      <div className='relative'>
        <img className=" -mt-12 ml-[36%] cursor-pointer w-24 h-24 rounded-full ring-4 ring-[#15233E] " src="/asset/image/Anik.jpg"/>

        <button className=' absolute right-28 bottom-1 bg-black rounded-lg' onClick={handleProfileImage}>
          <CameraSvg/>
        </button>
      </div>

      <div className=' mt-4 text-[#989da7]'>
        <h1 className=' text-center text-lg'>Mahmudul Hasan</h1>
        
        <div className=' flex px-4 pt-4'>
          <HomeSvg/>
          <p className=' ml-2'>Dhaka, Bangladesh</p>
        </div>

        <div className=' flex px-4 py-2'>
          <GroupSvg/>
          <p className=' ml-2'>Single</p>
        </div>

        <div className=' flex px-4 '>
          <BirthSvg/>
          <p className=' ml-2'>2 March 1997</p>
        </div>
        <hr className=' m-4 opacity-20'/>
        <div>
          <div className='flex justify-between mx-4'>
            <h1 className='text-sm'>MEDIA</h1>
            <a href="#" className=' text-sm text-lime-600'>Show all</a>
          </div>
        </div>
      </div>
    </div>

      
   </>
  )
}

export default Profile