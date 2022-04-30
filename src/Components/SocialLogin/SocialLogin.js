import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div className='mt-5 space-y-4'>
            <div className="flex items-center justify-around">
                <div className='h-[1px] bg-[#81818156] w-32'></div>
                <span>or</span>
                <div className='h-[1px] bg-[#81818156] w-32'></div>
            </div>
            <div className="space-y-3">
                <button className='hover:bg-gray-100 duration-200 shadow space-x-2 rounded-md flex items-center p-2 w-full justify-center'>
                    <FcGoogle className='text-3xl' />
                    <span>Continue with Google</span>
                </button>
                <button className='hover:bg-gray-100 duration-200 shadow space-x-2 rounded-md flex items-center p-2 w-full justify-center'>
                    <FaFacebook className='text-3xl text-[#4267B2]' />
                    <span>Continue with Facebook</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;