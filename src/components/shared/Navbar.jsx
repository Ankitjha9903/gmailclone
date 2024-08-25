import React from 'react';
import { IoIosSearch } from 'react-icons/io'
import { GiHamburgerMenu } from "react-icons/gi";
import { CiCircleQuestion } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { PiDotsNineBold } from "react-icons/pi";
import Avatar from 'react-avatar';




// import{ }
function Navbar() {
    return (
        <div className="flex items-center mx-2 justify-between   h-16 ">
            <div className='flex items-center gap-10'>
                <div className='flex items-center gap-2'>
                    <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <GiHamburgerMenu size={"20px"} />
                    </div>
                    <img className='w-8' src="https://w7.pngwing.com/pngs/758/665/png-transparent-new-logo-gmail-google-new-logos-icon-thumbnail.png" alt=" mail logo" srcset="" />
                    <h1 className='text-2xl text-gray-500 font-medium'> Gmail</h1>
                </div>
            </div>
            <div className='md:block hidden w-[50%] mr-60 '>
                <div className='flex items-center bg-[#EAF1FB] px-2 py-2 rounded-full'>
                    <IoIosSearch size={"24px"} className='text-gray-700' />
                    <input type="text" placeholder='Search Mail' className='rounded-full w-full bg-transparent outline-none px-1' />
                </div>

            </div>
            <div className='md:block hidden'>
                <div className=' flex items-center gap-2'>
                    <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer '>
                        <CiCircleQuestion  size={"20px"}/>
                    </div>
                    <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer '>
                        <CiSettings  size={"20px"}/>
                    </div>
                    <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer '>
                        <PiDotsNineBold  size={"20px"}/>
                    </div>
                    <div className='cursor-pointer '>
                    <Avatar name="Ankit Kumar Jha" size="40" round={true} />

                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Navbar;
