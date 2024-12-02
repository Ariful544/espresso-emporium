import React from 'react';
import pic1 from '../assets/images/cups/1.png'
import pic2 from '../assets/images/cups/2.png'
import pic3 from '../assets/images/cups/3.png'
import pic4 from '../assets/images/cups/4.png'
import pic5 from '../assets/images/cups/5.png'
import pic6 from '../assets/images/cups/6.png'
import pic7 from '../assets/images/cups/7.png'
import pic8 from '../assets/images/cups/favcon.png'

const FollowInstagram = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='text-center mt-12'>
                <p className='font-raleway text-xl text-[#1B1A1A]'>Follow Us Now</p>
                <p className='text-[55px] text-[#331A15] font-semibold'>Follow on Instagram</p>
            </div>
            <div className='grid md:grid-cols-4 px-4 md:px-0 grid-cols-1 gap-6 mt-12'>
                <img className='w-full' src={pic1} alt="" />
                <img className='w-full' src={pic2} alt="" />
                <img className='w-full' src={pic3} alt="" />
                <img className='w-full' src={pic4} alt="" />
                <img className='w-full' src={pic5} alt="" />
                <img className='w-full' src={pic6} alt="" />
                <img className='w-full' src={pic7} alt="" />
                <img className='w-full' src={pic8} alt="" />
            </div>
        </div>
    );
};

export default FollowInstagram;