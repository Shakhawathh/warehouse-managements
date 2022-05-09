import React from 'react';
import phone from '../../../image/8.jpg'

const Mobile = () => {
    return (

        <div >

            <h1 className='text-center text-bolder fs-1 text-primary mt-5'>Phone Future</h1>
            <div className='container d-flex'>
                <div className='row  mt-5 gx-5 mt-5 col-sm-12 col-md-6 col-lg-6'>
                    <img src={phone} className="card-img-top" alt="..." />
                </div>
                <div className='text-center mx-5 text-center fs-2 fw-bold mt-5'>
                    <p>We're already cyborgs. Your phone and your computer are extensions of you, but the interface is through finger movements or speech, which are very slow.</p>
                </div>
            </div>


        </div>
    );
};

export default Mobile;