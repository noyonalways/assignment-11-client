import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../Assets/images/arredo-logo-black.png';
import {HiOutlineX, HiMenu, HiUserCircle, HiOutlineLogout} from 'react-icons/hi';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { signOut } from 'firebase/auth';
import Loading from '../../Components/Loading/Loading';

const Header = () => {  
    const [open, setOpen] = useState(false);
    const [user, loading] = useAuthState(auth);


    if(loading){
        return <Loading/>
    }

    return (
        <header className='bg-white  py-3 shadow-sm sticky top-0 z-[9999]'>
            <div className="container mx-auto md:px-16 px-3 ">
                <nav className='flex items-center justify-between relative'>
                    <Link className='w-28 inline-block' to='/'> 
                        <img src={logo} alt="" className="w-full" />
                    </Link>
                    
                    <ul className={`lg:flex h-screen lg:h-auto items-center lg:space-x-5 w-4/6 lg:w-auto -top-3 bg-gray-50 lg:bg-transparent absolute lg:static duration-200 z-10  ${open ? ' md:-left-48 sm:-left-24 -left-16 shadow lg:shadow-none text-right'  : "-left-[100%]" }`}>
                        <li className=''>
                            <NavLink className={({isActive}) => (isActive ? "bg-black text-white lg:text-black  lg:bg-opacity-0 block px-3 py-2 lg:p-0 " : "block px-3 py-2 lg:p-0 lg:text-opacity-50 text-black hover:text-black" )} to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => (isActive ? "bg-black text-white lg:text-black lg:bg-opacity-0 block px-3 py-2 lg:p-0 " : "block px-3 py-2 lg:p-0 lg:text-opacity-50 text-black hover:text-black" )} to='/manage-inventory'>Manage Inventory</NavLink>
                        </li>
                        {
                            user && <li>
                            <NavLink className={({isActive}) => (isActive ? "bg-black text-white lg:text-black lg:bg-opacity-0 block px-3 py-2 lg:p-0 " : "block px-3 py-2 lg:p-0 lg:text-opacity-50 text-black hover:text-black" )} to='/my-items'>My items</NavLink>
                        </li>
                        }
                        <li>
                            <NavLink className={({isActive}) => (isActive ? "bg-black text-white lg:text-black lg:bg-opacity-0  block px-3 py-2 lg:p-0 " : "block px-3 py-2 lg:p-0 lg:text-opacity-50 text-black hover:text-black" )} to='/blogs'>Blogs</NavLink>
                        </li>
                        
                    </ul>
                    <ul className='flex'>
                        {
                            user ? <li>
                                <button onClick={() => signOut(auth)} className='bg-gray-200 py-2 px-3 rounded hover:bg-gray-300 flex items-center space-x-2'><HiOutlineLogout/><span>Logout</span></button>
                            </li> : <li>
                            <NavLink to='/login'><HiUserCircle className='text-3xl'/></NavLink>
                        </li>
                        }
                    </ul>
                    <button onClick={() => setOpen(!open)} className="lg:hidden text-3xl ">
						{open ? <HiOutlineX /> : <HiMenu />}
					</button>
                </nav>
            </div>
        </header>
    );
};

export default Header;  