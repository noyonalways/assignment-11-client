import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='bg-gradient-to-r from-indigo-600 to-blue-400 flex items-center justify-center h-screen'>
            <div className='text-center bg-white py-6 px-6 md:w-[42%] lg:w-[32%] lg:py-10 lg:px-6 rounded-lg'>
                <h1 className="font-bold text-blue-600 text-9xl">404</h1>
                <h6 className="mb-2 text-xl font-bold text-center text-gray-800 md:text-2xl">
                    <span className="text-red-500">Oops!</span> Page not found
                </h6>
                <p className="mb-8 text-center text-gray-500 text-base md:text-lg">
                    The page you’re looking for doesn’t exist.
                </p>
                <Link to='/' className="rounded-sm px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100"
                >Go home
                </Link>
            </div>
        </div>  
    );
};

export default NotFound;