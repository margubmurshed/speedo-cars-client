import React from 'react';
import image from '../../assets/NotFound/undraw_Page_not_found_re_e9o6.png'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='h-screen flex flex-col gap-3 justify-center items-center'>
            <img src={image} alt="not_found_image" className=' w-1/2' />
            <Link to="/" className='btn bg-speedo-primary border-speedo-primary text-white'>Return to home</Link>
        </div>
    );
};

export default NotFound;