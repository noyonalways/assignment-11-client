import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const {_id, name, img, price, description, quantity, supplier } = product;
    return (
        <div className='cursor-pointer space-y-3 p-3 shadow-md rounded hover:shadow-lg duration-200 '>
            <div className=''>
                <img className='w-full rounded' src={img} alt="" />
            </div>
            <div className=''>
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{name}</h3>
                    <p>Price: <span className='font-medium'>${price}</span></p>
                </div>
                <p className='mb-1'>Quantity: <strong>{quantity}</strong></p>
                <p>{description.length > 80 ? description.slice(0, 80) + "..." : description}</p>
                <small className='block mb-3'>Supply by <strong>{supplier}</strong></small>
                <Link to={`/product/${_id}`} className="bg-blue-400 px-5 py-2 rounded-sm text-white ring-2 ring-blue-400 duration-300 hover:bg-transparent hover:text-blue-400 inline-block">Update</Link>
            </div>
        </div>
    );
};

export default Product;