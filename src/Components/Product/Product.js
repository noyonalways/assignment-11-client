import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <div className='cursor-pointer space-y-3 p-3 shadow-md rounded hover:shadow-lg duration-200 '>
            <div className=''>
                <img className='w-full rounded' src="https://gostro.familab.net/wp-content/uploads/2021/12/pdp_jasper-package-1a_main_front_20161123_19-1.jpg" alt="" />
            </div>
            <div className=''>
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Chair</h3>
                    <p>Price: <span  className='font-medium'>$55</span></p>
                </div>
                <p className='mb-1'>Quantity: <strong>5</strong></p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est expedita quam nostrum aliquid perspiciatis iusto?</p>
                <small className='block mb-3'>Supply by <strong>Regel</strong></small>
                <Link to='/:productId' className="bg-blue-400 px-5 py-2 rounded-sm text-white ring-2 ring-blue-400 duration-300 hover:bg-transparent hover:text-blue-400 inline-block">Update</Link>
            </div>
        </div>
    );
};

export default Product;