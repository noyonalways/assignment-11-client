import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';

const Register = () => {
    return (
        <div>
            <div className="container px-5 md:px-0 mx-auto lg:px-16 flex items-center justify-center h-screen">
                <div class="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md border-t">
                    <div class="px-6 py-4">
                        <h2 class="text-3xl font-bold text-center text-gray-700 ">Register</h2>
                        <p class="mt-1 text-center text-gray-500 ">Create an account</p>
                        <form>
                            <div class="w-full mt-4">
                                <input class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Name" aria-label="Email Address" />
                            </div>

                            <div class="w-full mt-4">
                                <input class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Email Address" aria-label="Email Address" />
                            </div>

                            <div class="w-full mt-4">
                                <input class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" aria-label="Password" />
                            </div>

                            <div class="w-full mt-4">
                                <input class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Confirm password" aria-label="Password" />
                            </div>

                            <div class="flex items-center justify-between mt-4">
                                <label className='text-sm' htmlFor="terms"><input className='mr-2' type="checkbox" name="" id="terms" />Terms and condition</label>
                                <button class="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded hover:bg-blue-400 focus:outline-none" type="submit">Register</button>
                            </div>
                        </form>
                    </div>
                    <div class="flex items-center justify-center  text-center">
                        <span class="text-sm text-gray-600 ">Already have an account? </span>
                        <Link to='/login' class="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Login</Link>   
                    </div>
                    <div className="px-5 pb-4">
                    <SocialLogin/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;