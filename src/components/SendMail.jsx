import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { RxCross2 } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import { db } from '../firebase';
// import { db } from "./path/to/your/firebaseConfig"; // Adjust the path as necessary


const SendMail = () => {
    const [formData, setFormData] = useState({
        to: "",
        subject: "",
        message: ""
    });

    const open = useSelector((state) => state.appSlice.open);

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            await addDoc(collection(db, "emails"), {
                to: formData.to,
                subject: formData.subject,
                message: formData.message,
                createdAt: serverTimestamp(),
            });

            setFormData({
                to: "",
                subject: "",
                message: ""
            });
        } catch (error) {
            console.error("Error sending email: ", error);
        }
    };

    return (
        <div className={`${open ? 'block' : 'hidden'} bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}>
            <div className='flex px-3 py-2 bg-[#f2f6fc] justify-between rounded-t-md'>
                <h1>New Message</h1>
                <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
                    <RxCross2 size={"10px"} />
                </div>
            </div>
            <form onSubmit={submitHandler} className='flex flex-col p-3 gap-2'>
                <input onChange={changeHandler} value={formData.to} name="to" type="text" placeholder='To' className='outline-none py-1' />
                <input onChange={changeHandler} value={formData.subject} name="subject" type="text" placeholder='Subject' className='outline-none py-1' />
                <textarea onChange={changeHandler} value={formData.message} name="message" cols={'30'} rows={'10'} className='outline-none py-1'></textarea>
                <button type='submit' className='rounded-full w-fit px-4 text-white font-medium bg-[#0857D0]'>Send</button>
            </form>
        </div>
    );
};

export default SendMail;
