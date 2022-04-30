import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/images/arredo-logo-black.png';
import logo2 from '../../Assets/images/arredo-logo.png';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
import './Login.css'


const Login = () => {
    return (
        <div class="bg-white">
            <div class="flex justify-center h-screen">
                <div class="hidden bg-cover lg:block lg:w-2/3"s>
                    <div  class="flex items-center h-full px-24 login-form">
                        <div>
                        <div class="w-28 ">
                                <img className='w-full' src={logo2} alt="" />
                            </div> 
                            <p class="max-w-xl mt-3 text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus molestiae</p>
                        </div>
                    </div>
                </div>

                <div class="flex mt-8 w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div class="flex-1">
                        <div class="text-center">
                            <div class="w-28 mx-auto">
                                <img className='w-full' src={logo} alt="" />
                            </div>  

                            <p class="mt-3 text-gray-500">Sign in to access your account</p>
                        </div>

                        <div class="mt-8 ">
                            <form>
                                <div>
                                    <label for="email" class="block mb-2 text-sm text-gray-600">Email Address</label>
                                    <input type="email" name="email" id="email" placeholder="example@example.com" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:text-gray-300  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div class="mt-6">
                                    <div class="flex justify-between mb-2">
                                        <label for="password" class="text-sm text-gray-600">Password</label>
                                        <a href="!#" class="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
                                    </div>

                                    <input type="password" name="password" id="password" placeholder="Your Password" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div class="mt-6">
                                    <button
                                        class="w-full px-4 py-2 text-white transition-colors duration-200  bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50 -z-10">
                                        Sign in
                                    </button>
                                </div>

                            </form>
                            <p class="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet? <Link to='/register' class="text-blue-500 focus:outline-none focus:underline hover:underline">Register</Link>.</p>
                            <SocialLogin/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;