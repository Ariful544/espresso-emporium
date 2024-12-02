import React from 'react';
import ErrorPage from '../pages/ErrorPage';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import ConnectWithUs from '../components/ConnectWithUs';
import Footer from '../components/Footer';

const ErrorLayout = () => {
    return (
        <div className='max-w-screen-2xl min-h-screen'>
            <header>
                <nav>
                    <Navbar />
                </nav>
                <main>
                    <section>
                        <ErrorPage/>
                    </section>
                    <section>
                        <ConnectWithUs/>
                    </section>
                </main>
                <footer>
                    <Footer/>
                </footer>
            </header>
        </div>
    );
};

export default ErrorLayout;