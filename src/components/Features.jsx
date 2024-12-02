import React from 'react';
import pic1 from '../assets/images/icons/1.png';
import pic2 from '../assets/images/icons/2.png';
import pic3 from '../assets/images/icons/3.png';
import pic4 from '../assets/images/icons/4.png';

const Features = () => {
    return (
        <div className='max-w-screen-2xl bg-[#ECEAE3] px-2 md:px-0'>
            <div className='grid max-w-screen-xl mx-auto md:grid-cols-4 grid-cols-1 gap-8 py-10 '>
                <div className='h-48 pt-4 flex flex-col md:items-start items-center'>
                    <img src={pic1} alt="coffee cup" />
                    <h4 className='text-4xl mt-4 text-[#331A15]'>Awesome Aroma</h4>
                    <p className='font-raleway text-[#1B1A1A]'>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className='h-48 pt-4 flex flex-col md:items-start items-center'>
                    <img src={pic2} alt="coffee cup" />
                    <h4 className='text-4xl mt-4 text-[#331A15]'>High Quality</h4>
                    <p className='font-raleway text-[#1B1A1A]'>We served the coffee to you maintaining the best quality</p>
                </div>
                <div className='h-48 pt-4 flex flex-col md:items-start items-center'>
                    <img src={pic3} alt="coffee cup" />
                    <h4 className='text-4xl mt-4 text-[#331A15]'>Pure Grades</h4>
                    <p className='font-raleway text-[#1B1A1A]'>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div className='h-48 pt-4 flex flex-col md:items-start items-center'>
                    <img src={pic4} alt="coffee cup" />
                    <h4 className='text-4xl mt-4 text-[#331A15]'>Proper Roasting</h4>
                    <p className='font-raleway text-[#1B1A1A]'>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </div>
    );
};

export default Features;