import React, { useState } from 'react';
import { FaCartArrowDown, FaUserFriends } from 'react-icons/fa';
import { GoTag } from 'react-icons/go';
import { IoMdMore, IoMdRefresh } from 'react-icons/io';
import { MdCropSquare, MdInbox, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import Messages from './Messages';

const mailType = [
  {
    icon: <MdInbox size={"20px"} />,
    text: "Primary",
  },
  {
    icon: <GoTag size={"20px"} />,
    text: "Promotion",
  },
  {
    icon: <FaUserFriends size={"20px"} />,
    text: "Social",
  },
];

const Inbox = () => {
  const [mailTypeSelected, setMailTypeSelected] = useState(0);

  return (
    <div className='flex-1 bg-white rounded-xl mx-3'>
      <div className='flex items-center justify-between px-4 py-4'>
        <div className='flex items-center gap-3 text-gray-700'>
          <div className='flex items-center gap-2'>
            <MdCropSquare size={'20px'} />
            <FaCartArrowDown />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            <IoMdRefresh size={"20px"} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
            <IoMdMore size={"20px"} />
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <p className='text-sm text-gray-500'> 1-50 of 1000 </p>
         
          <button  className='hover:bg-gray-100'> <MdKeyboardArrowLeft size="24px" /> </button>
         
          <button className='hover:bg-gray-100'> <MdKeyboardArrowRight size="24px" />   </button>


        </div>
      </div>

      <div className='h-[90vh] overflow-y-auto'>
        <div className='flex items-center gap-1'>
          {mailType.map((item, index) => (
            <button
              key={index}
              className={`flex items-center gap-5 p-4 ${mailTypeSelected === index ? 'border-b-4 border-blue-600 text-blue-600' : 'border-b-4 border-transparent'} w-52 hover:bg-gray-100`}
              onClick={() => setMailTypeSelected(index)}
            >
              {item.icon}
              <span>{item.text}</span>
            </button>
          ))}
        </div>
        <div className="flex flex-col items-start justify-start mt-4 px-4">
          <Messages />
        </div>
      </div>

    </div>
  );
};

export default Inbox;
