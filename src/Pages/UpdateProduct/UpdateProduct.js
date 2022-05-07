import React, { useEffect, useState } from 'react';
import PageTitle from '../../Components/PageTitle/PageTitle';
import { useParams } from 'react-router-dom'
import axios from 'axios';

const UpdateProduct = () => {
    const [product, setProdouct] = useState({});
    const { name, img, price, description, quantity, supplier } = product;
    const { productId } = useParams();
    const [newQuantity, setNewQuantity] = useState({ value: '', error: '' })
    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`http://localhost:5000/product/${productId}`);
            setProdouct(data)
        })();
    }, [productId]);

    const handleQuantity = inputValue => {
        if (!inputValue) {
            setNewQuantity({ value: '', error: 'Please enter a quantity' })
        } else {
            setNewQuantity({ value: inputValue, error: '' })
        }
    }


    const handleUpdateQuantity = async e => {
        e.preventDefault();

        if(newQuantity.value === ''){
            setNewQuantity({ value: '', error: 'Quantity number is required' })
        }
    }




    return (
        <section className='py-10'>
            <PageTitle title={'Update product'} />
            <div className="container mx-auto lg:px-16 px-6">
                <div className="flex flex-col lg:flex-row lg:justify-between">
                    <div className='basis-full lg:basis-[70%] mb-5 lg:mb-0'>
                        <div className=' flex flex-col bg-white rounded-lg shadow-sm md:flex-row '>
                            <img class="object-cover w-full h-auto rounded-t-lg md:h-auto md:w-[18rem] md:rounded-none md:rounded-l-lg" src={img} alt="" />
                            <div className="p-4">
                                <div class="flex flex-col justify-between leading-normal">
                                    <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                                    <small>Supply by <strong>{supplier}</strong></small>
                                    <h4 className="text-xl mt-3">Price: <strong>{price}</strong></h4>
                                    <h4 className="text-xl mt-1">Quantity: <strong>{quantity}</strong></h4>
                                    <p class="mb-3 font-normal mt-3 text-gray-700 dark:text-gray-400">Product details <br /> {description}.</p>

                                </div>
                                <button className='bg-red-400 hover:bg-red-500 px-5 py-1 text-white rounded inline-block'>Delevired</button>
                            </div>
                        </div>
                    </div>
                    <div className="basis-full lg:basis-[28%]">
                        <div class="p-4 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 ">
                            <form onSubmit={handleUpdateQuantity} class="space-y-6" action="#">
                                <h5 class="text-xl font-medium text-gray-900">Product Stock update</h5>
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Product Quantity</label>
                                    <input onBlur={(e) => handleQuantity(e.target.value)} type="number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-white" placeholder="Quantity" />
                                    {
                                        newQuantity?.error && <small className="text-red-400">{newQuantity.error}</small>
                                    }
                                </div>
                                <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Update Stock</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpdateProduct;