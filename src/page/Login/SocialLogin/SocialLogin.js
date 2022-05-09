import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;

    if (error) {

        errorElement = <div>
            <p className='text-danger'>Error:{error.massage}</p>
        </div>

    }
    if (user) {
        navigate('/Home');
    }


    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-dark w-50 d-block mx-auto my-2'>
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;