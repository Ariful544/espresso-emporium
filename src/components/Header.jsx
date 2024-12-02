import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';

const Header = () => {
    return (
        <div className="max-w-screen-2xl min-h-screen relative bg-black">
            <Navbar />
            <Banner/>
            <div className='absolute top-48 right-16 md:text-left text-center px-4 md:px-0 '>
                <div className='max-w-screen-md flex pl-6 md:pl:0 justify-center md:items-start items-center flex-col md:flex-none mt-16'>
                    <h3 className='md:text-[55px] text-4xl text-white'>Would you like a Cup of Delicious Coffee?</h3>
                    <p className='font-raleway my-6 text-base text-white'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className='bg-orange-300 text-2xl border-2 border-orange-300 rounded-none text-black px-4 py-2 hover:bg-transparent hover:border-2 hover:text-white hover:border-white'>Learn more</button>
                </div>
            </div>
        </div>
    );
};

export default Header;