import React from 'react';
import found from '../../../image/not.jpg'

const NotFound = () => {
    return (
        <div>
            <h2 className='text-center fs-1 text-bolder'>404</h2>
            <img className='w-100' src={found} alt="" />
        </div>
    );
};

export default NotFound;