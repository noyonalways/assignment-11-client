import React, { useEffect, useState } from 'react';
import PageTitle from '../../Components/PageTitle/PageTitle';
import { useParams } from 'react-router-dom'
import axios from 'axios';

const UpdateProduct = () => {
    const { productId } = useParams();

    const [product, setProdouct] = useState({});
    useEffect(() => {
        const fetchProduct = async () => {
            const res = await axios.get(`http://localhost:5000/product/${productId}`);
            setProdouct(res.data)
        }
        fetchProduct();
    },[productId]);

    const {name, img, price, description, quantity, supplier } = product;

    return (
        <div className='pt-5 pb-16'>
            <PageTitle title={'Update Product'} />
            <div className="container mx-auto lg:px-16 px-4">
                <h2 className="text-3xl text-center mb-10">Products Info</h2>
                <div className='grid lg:grid-cols-2 gap-5 overflow-hidden bg-white rounded-lg shadow-lg w-full py-5 px-3'>
                    <div className="max-w-sm mx-auto">
                        <img className="object-cover object-center w-full h-56 rounded-md" src={img} alt="avatar" />

                        <div className=" py-4">
                            <h1 className="text-2xl font-semibold text-gray-800">{name}</h1>
                            <p className="py-2 text-gray-700 ">{description}</p>
                            <div className="flex items-center mt-2 text-gray-700">

                                <h1 className=" text-xl">Price: ${price}</h1>
                            </div>

                            <div className="flex items-center mt-2 text-gray-700 ">

                                <h1 className="text-base">Quantity: {quantity}</h1>
                            </div>

                            <div className="flex items-center mt-2 text-gray-700 justify-between">
                                <h1 className="text-sm">Supply by {supplier}</h1>
                                <button className='ring-2 ring-red-400 hover:bg-transparent hover:text-red-400 bg-red-400 px-5 py-2 rounded text-white'>Delevired</button>
                            </div>
                        </div>
                    </div>
                    <div className='lg:px-20 px-6 md:px-10'>
                        <h2 className="text-2xl text-center py-3">Product update quantity</h2>
                        <div>
                            <input className='w-full bg-gray-50 py-2 px-3 mb-3' placeholder='Input Quantity' type="number" name="" id="" />
                            <button className='hover:bg-transparent hover:text-green-400 ring-2 ring-green-400 bg-green-400 text-white rounded px-5 py-2 mb-5'>Update Quantity</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;