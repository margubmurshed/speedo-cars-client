import React from 'react';
import customer from '../../../assets/home/grid-6.webp';

const Satisfaction = () => {
    return (
        <div className='grid md:grid-cols-2 border border-speedo-primary rounded-md'>
            <img src={customer} alt="customer_baby" className='rounded-md h-full object-cover' />
            <div className='p-10 space-y-5'>
                <h2 className=' font-francoisOne text-3xl'>We ensure <span className='text-speedo-primary'>Customer Satisfaction</span></h2>
                <p className=' font-thin text-lg'>At our toy store, customer satisfaction is our top priority. We strive to create an enchanting and joyful experience for every visitor, ensuring they find the perfect toys that ignite imagination and bring smiles to children's faces. Our knowledgeable and friendly staff are always ready to assist, providing expert guidance and personalized recommendations. From a wide selection of high-quality toys to a welcoming and vibrant atmosphere, we go above and beyond to exceed customer expectations and leave them delighted with their shopping experience.</p>
                <button className='btn btn-error'>View Reviews</button>
            </div>
        </div>
    );
};

export default Satisfaction;