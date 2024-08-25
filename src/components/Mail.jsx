import React from 'react'
import { BiArchive } from 'react-icons/bi'
import { IoMdArrowBack, IoMdMore } from 'react-icons/io'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineAddTask, MdOutlineDriveFileMove, MdOutlineMarkEmailRead, MdOutlineReport, MdDeleteOutline, MdOutlineWatchLater } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const Mail = () => {
  const navigate= useNavigate() 
  return (
    <div className='flex-1 bg-white rounded-xl mx-5'>
      <div className='flex items-center justify-between px-4'>
        <div className='flex items-center gap-2 text-gray-700 p-2'>
          <div onClick={()=>navigate("/") } className='p-2 rounded-full hover:bg-gray-100'>
            <IoMdArrowBack size={"20px"} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100'>
            <BiArchive size={"20px"} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100'>
            <MdOutlineReport size={"20px"} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100'>
            <MdDeleteOutline size={"20px"} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100'>
            <MdOutlineMarkEmailRead size={"20px"} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100'>
            <MdOutlineWatchLater size={"20px"} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100'>
            <MdOutlineAddTask size={"20px"} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100'>
            <MdOutlineDriveFileMove size={"20px"} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100'>
            <IoMdMore size={"20px"} />
          </div>
        </div>
        <div className='flex'>
          <button className='hover:bg-gray-100'>
            <MdKeyboardArrowLeft size="24px" />
          </button>
          <button className='hover:bg-gray-100'>
            <MdKeyboardArrowRight size="24px" />
          </button>
        </div>
      </div>
      <div className='h-[90vh] overflow-y-auto p-4'>
        <div className='flex items-start justify-between gap-1'>
          <div className='flex items-center gap-2'>
            <h1 className='text-xl font-medium'>Subject</h1>
            <span className='text-sm bg-gray-200 rounded-md px-2'>Inbox</span>
          </div>
          <div className='text-gray-400 text-sm'>
            <p>12-08-2024</p>
          </div>
        </div>
        <div className='text-gray-500 text-sm mt-2'>
          <h1 className='text-left'>shreya@gmail.com</h1>
          <span className='block text-left'>to me</span>
        </div>
        <div className='my-10'>
          <p className='text-left'>message</p>
        </div>
      </div>
    </div>
  )
}

export default Mail
