import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import toast from 'react-hot-toast';

const SocialLogin = () => {
    const [signInWithGoogle, userByGoogle, loadingByGoogle, errorByGoogle] = useSignInWithGoogle(auth);
    const [signInWithFacebook, userByFb, loadingByFb, errorByFb] = useSignInWithFacebook(auth);
    const navigate = useNavigate();

    if (userByGoogle || userByFb) {
        navigate('/');
        toast.success('Successfully Login',{id: 'socialLogin'});
    }

    if (loadingByGoogle || loadingByFb) {
        return <Loading />
    }

    if(errorByGoogle || errorByFb){
        if(errorByFb?.message.includes('auth/popup-closed-by-user') || errorByGoogle?.message.includes('auth/popup-closed-by-user')){
            toast.error('You closed the Popup', {id: 'popup'});
        }
    }

    return (
        <div className='mt-5 space-y-4'>
            <div className="flex items-center justify-around">
                <div className='h-[1px] bg-[#81818156] w-32'></div>
                <span className='text-[#818181d0]'>or</span>
                <div className='h-[1px] bg-[#81818156] w-32'></div>
            </div>
            <div className="space-y-3">
                <button onClick={() => signInWithGoogle()} className='hover:bg-gray-100 duration-200 shadow space-x-2 rounded-md flex items-center p-2 w-full justify-center'>
                    <FcGoogle className='text-3xl' />
                    <span>Continue with Google</span>
                </button>
                <button onClick={() => signInWithFacebook()} className='hover:bg-gray-100 duration-200 shadow space-x-2 rounded-md flex items-center p-2 w-full justify-center'>
                    <FaFacebook className='text-3xl text-[#4267B2]' />
                    <span>Continue with Facebook</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;