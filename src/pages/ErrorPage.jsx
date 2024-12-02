import React from 'react';
import { Link } from 'react-router-dom';
import error from '../assets/images/404/404.gif'

const ErrorPage = () => {
    return (
        <div className='max-w-screen-xl px-4 md:px-0 mt-20  mx-auto text-center'>
             <button className='py-10 text-3xl text-shadow-lg text-[#374151]'><Link to="/">&#8592; Back to home</Link></button>
             <div className=''>
                <img className='w-full' src={error} alt="" />
             </div>
        </div>
    );
};

export default ErrorPage;