import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = ({product}) => {
    const {_id, name, img, price, quantity, supplier } = product;
    return (
        <div className="flex bg-gray-50 items-center rounded py-3 md:py-0">
            <div className='w-20 md:w-32'>
                <img src={img} alt="" className="w-full rounded" />
            </div>
            <div className='pl-3 pr-2 md:pr-5 flex justify-between w-full md:items-center'>
                <div>
                    <p className="">{name}</p>
                    <small>By {supplier}</small>
                </div>
                <p className='text-left'>Price: ${price}</p>
                <p>Quantity: {quantity}</p>
                <div className=' flex flex-col md:flex-row'>
                    <Link to={`/product/${_id}`} className="hover:bg-transparent duration-200 hover:text-blue-400 bg-blue-400 px-2 md:px-4 py-1 ring-2 ring-blue-400 rounded text-white mb-2 md:mb-0 md:mr-2">
                        Edit
                    </Link>
                    <button className="hover:bg-transparent duration-200 hover:text-red-400 bg-red-400 px-2 md:px-4 py-1 ring-2 ring-red-400 rounded text-white">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;