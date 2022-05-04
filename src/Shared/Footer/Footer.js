import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import logo from '../../Assets/images/arredo-logo-black.png';


const Footer = () => {
    return (
        <footer className="bg-white pt-10 shadow">
            <div className="container lg:px-16 px-4 mx-auto pb-6">
                <div className="lg:flex">
                    <div className="w-full -mx-6 lg:w-2/5">
                        <div className="px-6">

                            <Link className='inline-block w-20' to='/'><img className='w-full' src={logo} alt="" /></Link>

                            <p className="max-w-md mt-2 text-gray-500 ">Join 31,000+ other and never miss out on new tips, tutorials, and more.</p>
                            <div className="flex mt-4 space-x-3">
                                <Link to='/'><FaLinkedin /></Link>
                                <Link to='/'><FaFacebook /></Link>
                                <Link to='/'><FaTwitter /></Link>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 lg:mt-0 lg:flex-1">
                        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                            <div>
                                <h3 className="text-gray-700 uppercase">About</h3>
                                <a href="/" className="inline-block mt-2 text-sm text-gray-600 hover:underline">Company</a>
                                <a href="/" className="inline-block mt-2 text-sm text-gray-600 hover:underline">community</a>
                                <a href="/" className="inline-block mt-2 text-sm text-gray-600 hover:underline">Careers</a>
                            </div>

                            <div>
                                <h3 className="text-gray-700 uppercase">Blog</h3>
                                <a href="/" className="inline-block mt-2 text-sm text-gray-600 hover:underline">Tec</a>
                                <a href="/" className="inline-block mt-2 text-sm text-gray-600 hover:underline">Music</a>
                                <a href="/" className="inline-block mt-2 text-sm text-gray-600 hover:underline">Videos</a>
                            </div>

                            <div>
                                <h3 className="text-gray-700 uppercase">Products</h3>
                                <a href="/" className="inline-block mt-2 text-sm text-gray-600 hover:underline">Mega cloud</a>
                                <a href="/" className="inline-block mt-2 text-sm text-gray-600 hover:underline">Aperion UI</a>
                                <a href="/" className="inline-block mt-2 text-sm text-gray-600 hover:underline">Meraki UI</a>
                            </div>

                            <div>
                                <h3 className="text-gray-700 uppercase ">Contact</h3>
                                <span className="inline-block mt-2 text-sm text-gray-600 hover:underline">+1 526 654 8965</span>
                                <span className="inline-block mt-2 text-sm text-gray-600 hover:underline">example@email.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100">
                <div className="container lg:px-16 px-3 mx-auto py-4 flex flex-wrap flex-col sm:flex-row">
                <p className="text-gray-500 text-sm text-center sm:text-left">&copy; {new Date().getFullYear()} Arredo —
                    <a href="https://coder-noyon.blogspot.com" className="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">@codernoyon</a>
                </p>
                <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">Programming Hero Learner</span>
                </div>
            </div>

        </footer>
    );
};

export default Footer;