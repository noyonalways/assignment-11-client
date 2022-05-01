import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Assets/images/arredo-logo-black.png';
import logo2 from '../../Assets/images/arredo-logo.png';
import PageTitle from '../../Components/PageTitle/PageTitle';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
import './Login.css';
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import toast from 'react-hot-toast';
import auth from '../../Firebase/firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { AiOutlineExclamationCircle } from "react-icons/ai";
import Loading from '../../Components/Loading/Loading';

const Login = () => {
    const [showPasseword, setShowPassword] = useState(false);
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const handleEmail = inputEmail => {
        if (/\S+@\S+\.\S+/.test(inputEmail)) {
            setEmail({ value: inputEmail, error: '' })
        } else {
            setEmail({ value: '', error: 'Input a valid email' })

        }
    };

    const handlePassword = inputPassword => {
        if (inputPassword) {
            setPassword({ value: inputPassword, error: '' })
        } else {
            setPassword({ value: '', error: 'Enter Password' })
        }
    };

    let showErrorMessage
    if (error) {
        if (error.message.includes('auth/user-not-found')) {
            showErrorMessage = 'User not found';
        }
        else if (error.message.includes('auth/wrong-password')) {
            showErrorMessage = 'Wrong password'
        }
        else {
            showErrorMessage = error.message;
        }
    }

    if (user) {
        navigate('/');
        toast.success('Successfully Login', { id: 'login' });
    }

    if (loading) {
        return <Loading />
    }


    const handleLoginUser = async (event) => {
        event.preventDefault();

        if (email.value === '') {
            setEmail({ value: '', error: 'Email is required' })
        }
        if (password.value === '') {
            setPassword({ value: '', error: 'Password is required' })
        }

        if (email.value && password.value) {
            await signInWithEmailAndPassword(email.value, password.value);
            event.target.reset();
        }
    }

    return (
        <div className="bg-white">
            <PageTitle title={'Login'} />
            <div className="flex justify-center h-screen">
                <div className="hidden bg-cover lg:block lg:w-2/3">
                    <div className="flex items-center h-full px-24 login-form">
                        <div>
                            <div className="w-28 ">
                                <img className='w-full' src={logo2} alt="" />
                            </div>
                            <p className="max-w-xl mt-3 text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus molestiae</p>
                        </div>
                    </div>
                </div>

                <div className="flex mt-8 w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div className="flex-1">
                        <div className="text-center">
                            <div className="w-28 mx-auto">
                                <img className='w-full' src={logo} alt="" />
                            </div>

                            <p className="mt-3 text-gray-500">Sign in to access your account</p>
                        </div>

                        <div className="mt-8 ">
                            <form onSubmit={handleLoginUser}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm text-gray-600">Email Address</label>
                                    <input onBlur={(e) => handleEmail(e.target.value)} type="email" name="email" id="email" placeholder="example@example.com" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    {
                                        email?.error && (<small className='text-red-400'>{email.error}</small>)
                                    }
                                </div>

                                <div className="mt-6 relative">
                                    <div className="flex justify-between mb-2">
                                        <label htmlFor="password" className="text-sm text-gray-600">Password</label>
                                        <a href="!#" className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
                                    </div>

                                    <input onBlur={(e) => handlePassword(e.target.value)} type={showPasseword ? 'text' : 'password'} name="password" id="password" placeholder="Your Password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    <button onClick={() => setShowPassword(!showPasseword)} type='button' className='absolute top-10 right-3 text-lg'>
                                        {showPasseword ? <MdVisibility /> : <MdVisibilityOff />}
                                    </button>
                                    {
                                        password?.error && (<small className='text-red-400'>{password.error}</small>)
                                    }
                                </div>

                                <div className="mt-6">
                                    <button
                                        className="w-full px-4 py-2 text-white transition-colors duration-200  bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50 -z-10">
                                        Sign in
                                    </button>
                                </div>
                                {
                                    showErrorMessage && <small className='mt-3 flex items-center justify-center space-x-2  rounded-sm  text-red-400 bg-red-100 p-2 text-center'><AiOutlineExclamationCircle className='text-base' /><span>{showErrorMessage}</span></small>
                                }

                            </form>
                            <p className="mt-4 text-sm text-center text-gray-400">Don&#x27;t have an account yet? <Link to='/register' className="text-blue-500 focus:outline-none focus:underline hover:underline">Register</Link></p>
                            <SocialLogin />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;