import React, { useContext } from 'react';
import logo from '../assets/images/more/logo1.png'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { user,signOutUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignOut = () => {
        signOutUser()
        .then(()=>{
            Swal.fire({
                title: "Success",
                text: "Successfully signed out",
                icon: "success",
            })
        })
        .then(()=>{
            navigate('/coffees/signin');
        })
        .catch(() => {
            Swal.fire({
                title: "Error",
                text: "Something went wrong",
                icon: "error",
            })
        })
        
    };

    return (
        <div className="min-h-[120px] max-w-screen-2xl bg-[url('./assets/images/more/15.jpg')] bg-cover bg-no-repeat ">
            <div className='flex justify-between max-w-screen-xl mx-auto   items-center py-4 gap-4'>
                <div className='flex items-center'>
                    <img className='w-20 h-24' src={logo} alt="" />
                    <h2 className='md:text-4xl text-4xl text-white'>Espresso Emporium</h2>
                </div>
                <div className='flex items-center gap-6'>
                    <Link to="/" className='text-white text-xl font-bold font-raleway'>Home</Link>
                    <Link to="/coffees/signup" className='text-white text-xl font-bold font-raleway'>SignUp</Link>
                    
                    {
                        user ? 
                        <>
                            <Link to="/coffees/users" className='text-white text-xl font-bold font-raleway'>Users</Link>
                            <button className="btn">{user?.email}</button>
                            <button onClick={handleSignOut} className="btn">SignOut</button>
                        </>
                        :
                        <>
                              <Link to="/coffees/signin" className='text-white text-xl font-bold font-raleway'>SignIn</Link>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;