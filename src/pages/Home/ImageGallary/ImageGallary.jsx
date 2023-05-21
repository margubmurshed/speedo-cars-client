import React from 'react';
import image1 from '../../../assets/home/grid-1.jpg'
import image2 from '../../../assets/home/grid-2.jpg'
import image3 from '../../../assets/home/grid-3.jpg'
import image4 from '../../../assets/home/grid-4.jpg'
import image5 from '../../../assets/home/grid-5.jpg'
import image6 from '../../../assets/home/grid-6.webp'

const ImageGallary = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
            <img src={image1} alt="image1" className='w-full h-52 object-cover rounded-md'/>
            <img src={image2} alt="image2" className='w-full h-52 object-cover rounded-md'/>
            <img src={image3} alt="image3" className='w-full h-52 object-cover rounded-md'/>
            <img src={image4} alt="image4" className='w-full h-52 object-cover rounded-md'/>
            <img src={image5} alt="image5" className='w-full h-52 object-cover rounded-md'/>
            <img src={image6} alt="image6" className='w-full h-52 object-cover rounded-md'/>
        </div>
    );
};

export default ImageGallary;