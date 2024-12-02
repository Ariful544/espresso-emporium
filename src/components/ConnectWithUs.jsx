import React from 'react';
import logo from '../assets/images/more/logo1.png'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { Button,Textarea , Label, TextInput } from "flowbite-react";
import { Link } from 'react-router-dom';


const ConnectWithUs = () => {
    return (
        <div className='max-w-screen-xl mt-44 min-h-screen mx-auto grid md:grid-cols-2 grid-cols-1 gap-16'>
            <div className='flex justify-center px-2 md:px-2 flex-col md:items-start items-center text-center'>
                <img className='w-20 h-24' src={logo} alt="" />
                <h2 className='text-[45px] text-[#331A15]'>Espresso Emporium</h2>
                <p className='text-xl font-raleway text-[#1B1A1A]'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                <div className='flex gap-4 mt-8'>
                    <button> <FaFacebook className='text-4xl text-[#331A15]' /></button>
                    <button>  <FaXTwitter className='text-4xl text-[#331A15]' /></button>
                    <button><FaInstagram className='text-4xl text-[#331A15]' /></button>
                    <button><FaLinkedin className='text-4xl text-[#331A15]' /></button>
                </div>
                <p className='text-[#331A15] mt-4 text-[45px] font-semibold'>Get in Touch</p>
                <div className='flex gap-4 items-center mt-6'>
                    <p className='text-[#331A15] text-xl'><IoCall /></p>
                    <p className='text-xl'>+88 01533 333 333</p>
                </div>
                <div className='flex gap-4 items-center mt-4'>
                    <p className='text-[#331A15] text-xl'><MdEmail /></p>
                    <p className='text-xl'>info@gmail.com</p>
                </div>
                <div className='flex gap-4 items-center mt-4'>
                    <p className='text-[#331A15] text-xl'><IoLocation /></p>
                    <p className='text-xl'>72, Wall street, King Road, Dhaka</p>
                </div>
            </div>
            <div className='pl-6 md:pl-0 md:mt-24 mt-12 '>
                <h4 className='text-[45px] md:mt-20 mt-0 text-[#331A15]'>Connect with Us</h4>
                <form className="flex max-w-md flex-col  gap-4">
                    <div>
                        <TextInput className='font-raleway' id="name" type="text" placeholder="name" required shadow />
                    </div>
                    <div>
                        <TextInput className='font-raleway' id="email" type="email" placeholder='email' required shadow />
                    </div>
                    <div className="max-w-md">
                        <Textarea className='font-raleway' id="comment" placeholder="Message" required rows={4} />
                    </div>
                    <button className='btn bg-transparent border-2 border-[#331A15] rounded-3xl text-[#331A15] text-2xl hover:bg-[#331A15] hover:border-2 hover:border-[#331A15] hover:text-white'>Send message</button>
                </form>
            </div>
        </div>
    );
};

export default ConnectWithUs;