import React from 'react';
import phone from '../../../image/Wavy_Tech-19_Single-07.jpg'
import './Phone.css'

const Phone = () => {
    return (
        <div >
            <h1 className='text-center text-bolder fs-1 text-primary mt-5'>Phone Repair</h1>
            <div className='mt-5 container d-flex'>
                <img src={phone} alt="..."></img>
                <div className='mx-5 text-center fs-2 fw-bolder mt-5'>
                    <h1 className='text-center fw-bold'>Phone Repair</h1>
                    <p>The repair kits will come with iFixit's iOpener, an opening tool designed to apply heat directly and evenly to case components sealed with adhesive, along with replacement pre-cut adhesive for securing and re-waterproofing the Pixel device.</p>
                </div>
            </div>

        </div>
    );
};

export default Phone;