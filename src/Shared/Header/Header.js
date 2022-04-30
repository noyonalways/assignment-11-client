import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../Assets/images/arredo-logo-black.png';
import {HiOutlineX, HiMenu, HiUserCircle} from 'react-icons/hi';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <header className='bg-white  py-3 shadow-sm sticky top-0'>
            <div className="container mx-auto md:px-16 px-3">
                <nav className='flex items-center justify-between'>
                    <Link className='w-28 inline-block' to='/'>
                        <img src={logo} alt="" className="w-full" />
                    </Link>
                    
                    <ul className={`lg:flex h-screen lg:h-auto items-center lg:space-x-5 w-3/6 lg:w-auto top-0 bg-white lg:bg-transparent absolute lg:static duration-200 z-10 ${open ? 'left-0 shadow lg:shadow-none'  : "-left-[50%]" }`}>
                        <li className=''>
                            <NavLink className={({isActive}) => (isActive ? "bg-black text-white lg:text-black  lg:bg-opacity-0 block px-3 py-2 lg:p-0 " : "block px-3 py-2 lg:p-0 lg:text-opacity-50 text-black" )} to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => (isActive ? "bg-black text-white lg:text-black lg:bg-opacity-0 block px-3 py-2 lg:p-0 " : "block px-3 py-2 lg:p-0 lg:text-opacity-50 text-black" )} to='/manage-inventory'>Manage Inventory</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => (isActive ? "bg-black text-white lg:text-black lg:bg-opacity-0  block px-3 py-2 lg:p-0 " : "block px-3 py-2 lg:p-0 lg:text-opacity-50 text-black" )} to='/blogs'>Blogs</NavLink>
                        </li>
                        
                    </ul>
                    <ul>
                        <li>
                            <NavLink to='/login'><HiUserCircle className='text-3xl'/></NavLink>
                        </li>
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