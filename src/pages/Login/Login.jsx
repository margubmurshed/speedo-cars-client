import React from 'react';
import photo from '../../assets/login/image1.jpg';

const Login = () => {
    return (
        <div className='grid md:grid-cols-2'>
            <img src={photo} alt="login_reg_photo" />
        </div>
    );
};

export default Login;