import React, {useState} from 'react'
import SidebarMenu from '../../components/SidebarMenu'
import AddButton from '../../components/AddButton'
import Search from '../../components/Search'
import { Outlet } from 'react-router-dom'
import Modal from '../../components/Modal'

const Home = () => {

   const [show, setShow] = useState(false)

   const handleModal = () => {
     setShow(!show)
   }


  return (
    <div className=" relative  w-full h-screen ">

<div className=" absolute bottom-0 right-40 bg-gradient-to-r from-blue-600 to-violet-800 w-52 h-96 blur-3xl rounded-xl opacity-20 filter rotate-90 "></div>
<div className="absolute  top-10 left-15 h-[200px] w-[400px] rotate-12 rounded-3xl bg-gradient-to-l  from-blue-600 to-sky-400 opacity-20 blur-3xl filter dark:block dark:opacity-30 -z-50"></div>



<div className=' flex'>
{show && <Modal/>}

<aside className=" w-20 h-screen">
   <div className="overflow-y-auto py-4 px-3 bg-transparent rounded border-2 border-[#1f2a43] p-9 shadow-lg h-full backdrop-blur-sm  z-20 text-white ">
      <a href="https://flowbite.com/" className="flex items-center pl-2.5 mb-5">
         <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Bite</span>
      </a>
      <SidebarMenu props={handleModal}/>
   </div>
</aside>
<div className=' text-white pt-3 w-80 bg-[#192135]/50 backdrop-blur-lg h-screen border-r-[2px] border-[#1f2a43]'>
   <div className=' flex justify-between mt-2 px-5'>
      <h1 className=' font-medium text-2xl'>Chats</h1>
      <AddButton/>
   </div>
   <div className='px-5'>
      <Search/>                
   </div>
   <div className='overflow-auto'>
      <Outlet/>
   </div>
</div>


<div className=' text-white w-[965px] ml-2 '>
   



</div>
</div>
        
    </div>
  )
}

export default Home


 






