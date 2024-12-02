import React, { useState } from 'react';
import Header from '../components/Header';
import Features from '../components/Features';
import PopularProducts from '../components/PopularProducts';
import FollowInstagram from '../components/FollowInstagram';
import ConnectWithUs from '../components/ConnectWithUs';
import Footer from '../components/Footer';
import { useLoaderData } from 'react-router-dom';


const HomeLayout = () => {

    return (
        <div className='max-w-screen-2xl min-h-screen'>
            <header>
                <Header />
            </header>
            <main>
                <section>
                    <Features />
                </section>
                <section>
                    <PopularProducts/>
                </section>
                <section>
                    <FollowInstagram/>
                </section>
                <section>
                    <ConnectWithUs/>
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default HomeLayout;