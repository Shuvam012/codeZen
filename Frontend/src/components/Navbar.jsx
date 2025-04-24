import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/codezen.png';
import { Button } from '@mui/material';
import {useAuth} from '../context/UserContext'

const Navbar = () => {

    // const [isLoggedIn,setIsLoggedIn] =useState(false);

    // function handleClick (){
    //     setIsLoggedIn(true);
    // }

    const {isLoggedIn,role ,logout} = useAuth()

    return (
        <nav className="bg-slate-800 text-white px-6 py-4 shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300">
                    {/* CodeZen */}
                    <img src={logo} alt="CodeZen Logo" className=" h-8 mr-2" />
                </Link>

                {/* Menu */}
                <div className=" flex gap-6 items-center">
                    <Link to="/" className="hover:text-blue-300">Home</Link>
                    { isLoggedIn &&
                        <>
                        <Link to="/topics" className="hover:text-blue-300">Topics</Link>
                        <Link to="/leaderboard" className="hover:text-blue-300">Leaderboard</Link>
                        <Link to="/dashboard" className="hover:text-blue-300">Dashboard</Link>
                        {role === 'admin' && <Link to= '/admin-dashboard' className='hover:text-blue-300'>Admin Dashboard</Link>}
                        </>
                    }
                    
                </div>

                {/* Auth Buttons */}

                <div className="flex gap-4">
                    {!isLoggedIn ? (
                        <>
                            <Link to="/login">
                            <Button variant="contained" size="small">
                                Login
                            </Button>
                        </Link>
                        {/* <Link to="/signup">
                            <Button variant="outlined" size="small">
                                SignUp
                            </Button>
                        </Link> */}
                    </>
                        ):(<Link to='/'>
                            <Button onClick={logout} variant="contained" size="small">
                            Logout
                        </Button>
                        </Link>
                        )
                    }

                   
                </div>

                {/* Mobile Menu Icon (optional for later) */}
                {/* <div className="md:hidden"> */}
                    {/* Add hamburger menu later if needed */}
                {/* </div> */}
            </div>
        </nav>
    )
}

export default Navbar
