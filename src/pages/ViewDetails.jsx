import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Card } from "flowbite-react";


const ViewDetails = () => {
    const DetailsLoader = useLoaderData();
    return (
        <div className='max-w-screen-xl px-4 md:px-0 min-h-screen mx-auto'>
            <button className='py-10 text-3xl text-shadow-lg text-[#374151]'><Link to="/">&#8592; Back to home</Link></button>
            <div className="flex md:flex-row flex-col gap-36 max-w-screen-lg mx-auto mt-10 border rounded-lg border-[#331A15]">
                <figure>
                    <img className='w-full bg-stone-200 min-h-[550px]'
                        src={DetailsLoader.photo}
                        alt="" />
                </figure>
                <div className=" space-y-2 md:mt-24 -mt-10 md:text-left text-center mb-4">
                    <h4 className='text-4xl text-[#331A15] text-shadow-lg'>Niceties</h4>
                    <p className="text-neutral-600 text-xl font-raleway"><span className="text-[#3C393B] font-semibold">Name: </span>{DetailsLoader.name}</p>
                    <p className="text-neutral-600 text-xl font-raleway"><span className="text-[#3C393B] font-semibold">Chef: </span>{DetailsLoader.chef}</p>
                    <p className="text-neutral-600 text-xl font-raleway"><span className="text-[#3C393B] font-semibold">Supplier: </span>{DetailsLoader.supplier}</p>
                    <p className="text-neutral-600 text-xl font-raleway"><span className="text-[#3C393B] font-semibold">Taste: </span>{DetailsLoader.taste}</p>
                    <p className="text-neutral-600 text-xl font-raleway"><span className="text-[#3C393B] font-semibold">Category: </span>{DetailsLoader.category}</p>
                    <p className="text-neutral-600 text-xl font-raleway"><span className="text-[#3C393B] font-semibold">Details: </span>{DetailsLoader.details}</p>
                    <p className="text-neutral-600 text-xl font-raleway"><span className="text-[#3C393B] font-semibold">price: </span>{DetailsLoader.price}</p>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;