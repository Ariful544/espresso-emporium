import React, { useState } from 'react';
import { RiCupLine } from "react-icons/ri";
import ProductCard from './ProductCard';
import { Link, useLoaderData } from 'react-router-dom';
const PopularProducts = () => {
    const coffeeLoader = useLoaderData();
    const [coffees, setCoffees] = useState(coffeeLoader);
    return (
        <div className='max-w-screen-xl mx-auto min-h-screen'>
            <div className='text-center mt-40'>
                <p className='text-xl font-raleway text-[#1B1A1A]'>-- Sip & Savor --</p>
                <h4 className='text-[55px] text-[#331A15] font-semibold'>Our Popular Products</h4>
                <Link to="/coffees/add-coffee" className='btn bg-[#E3B577] border-2 hover:border-[#331A15] hover:bg-[#F5F4F1] hover:text-shadow-xl border-[#331A15] text-2xl text-white'> Add Coffee <RiCupLine className='text-[#331A15]' /></Link>
            </div>
            <div className='mt-12 grid md:grid-cols-2 grid-cols-1 gap-6'>
               {
                coffees.map(coffee => <ProductCard key={coffee._id} coffees={coffees} coffee={coffee} setCoffees={setCoffees} />)
               }
            </div>
        </div>
    );
};

export default PopularProducts;