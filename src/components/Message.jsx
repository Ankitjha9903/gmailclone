import React from 'react';
import { MdCropSquare } from 'react-icons/md';
import { RiStarLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const Message = () => {
    const navigate = useNavigate();
    const OpenMail =()=> {
navigate ("/mail/1234id");
    }
    return (
        <div onClick={OpenMail} className='flex items-start justify-between border-b border-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md'>
            <div className='flex items-center gap-3'>
                <div className=' flex-none text-gray-300'>
                    <MdCropSquare className='w-5 h-5' />
                </div>
                <div className= ' flex-none text-gray-300'>
                    <RiStarLine className='w-5 h-5' />
                </div>
            </div>

            <div className='flex-1 ml-4'>
                <p className='text-gray-600 truncate'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, vitae non quam culpa natus vero.
                </p>
            </div>

            <div className='flex-none text-gray-500 text-sm ml-[80px]'>
                time aega aega
            </div>
        </div>
    );
}

export default Message;
