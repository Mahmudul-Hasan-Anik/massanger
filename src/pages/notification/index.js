import React from 'react'

const notification = [
  {
      id: 1,
      name: 'Redux Learn',
      img: './asset/image/Anik.jpg',
      text: 'Good Morning',
      time: '08:50',
      msg: 2
  },
  {
      id: 2,
      name: 'Hasan',
      img: './asset/image/Anik.jpg',
      text: 'How are you?',
      time: '08:00',
      msg: 2
  },
  {
      id: 3,
      name: 'Anik',
      img: './asset/image/Anik.jpg',
      text: 'Good night',
      time: '12:00',
      msg: 2
  }
 
]

const Notification = () => {
  const handleClick = () => {
    console.log('')
  }

  return (
    <>
     <div className=' mt-5 '>
    <p className=' text-xs px-5 mb-2'>Recent</p>
    { notification.map((item)=>(
        <div key={item.id} className='flex justify-between gap-3 hover:bg-[#16274f] focus:bg-[#16274f] px-3 py-2 w-full' onClick={(e)=>handleClick(item.id)}>
            <div className=' flex gap-3 overflow-auto'>
            <img className="p-1 ml-2 mt-1 w-10 h-10 rounded-full" src={item.img} />
            <div>
                <h1 className='text-white  font-bold'>{item.name}</h1>
                <p className='text-base'>{item.text} <span className=' ml-2 text-xs'>{item.time}</span></p>
                <p className='text-sm'></p>
            </div>
            </div>
            <div className=' justify-end'>
                
                <p className='text-sm  w-3 h-3 rounded-md mt-4 bg-blue-700'></p>
            </div>
        </div>
    ))}
   </div>
    </>
  )
}

export default Notification