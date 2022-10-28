import React from 'react'

const addButton = () => {
  return (
    <button type="button" className="text-white bg-transparent border-2 border-[#1f2a43] focus:outline-none hover:bg-[#16274f] focus:ring-2 focus:ring-[#0e2d75] font-medium rounded-sm text-sm px-2 py-1.5 mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 text-white">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    </button>
  )
}

export default addButton