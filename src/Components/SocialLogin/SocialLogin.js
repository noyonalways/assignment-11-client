import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import toast from 'react-hot-toast';
import axios from 'axios';

const SocialLogin = () => {
    const [signInWithGoogle, userByGoogle, loadingByGoogle, errorByGoogle] = useSignInWithGoogle(auth);
    const [signInWithFacebook, userByFb, loadingByFb, errorByFb] = useSignInWithFacebook(auth);
    
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (userByGoogle || userByFb) {
        (async () => {
            const { data } = await axios.post('http://localhost:5000/login', { email: userByGoogle?.user.email || userByFb?.user.email });

            localStorage.setItem('accessToken', data.accessToken);
            navigate(from, { replace: true });
            toast.success('Successfully login', { id: 'socialLogin' });
        })()
    }

    if (loadingByGoogle || loadingByFb) {
        return <Loading />
    }

    if(errorByGoogle || errorByFb){
        if(errorByFb?.message.includes('auth/popup-closed-by-user') || errorByGoogle?.message.includes('auth/popup-closed-by-user')){
            toast.error('You closed the Popup', {id: 'popup'});
        }
        else if(errorByFb?.message.includes('auth/account-exists-with-different-credential') || errorByGoogle?.message.includes('auth/account-exists-with-different-credential')){
            toast.error('User exist with the same email', {id: 'popup2'});
        }
        else{
            toast.error(errorByFb?.message || errorByGoogle?.message, {id: 'popup3'});
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