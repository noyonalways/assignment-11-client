import React, { useEffect, useState } from 'react';
import PageTitle from '../../Components/PageTitle/PageTitle';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';
import Spinner from '../../Components/Spinner/Spinner';

const UpdateProduct = () => {
    const [product, setProdouct] = useState({});
    const { name, img, price, description, quantity, supplier } = product;
    const { productId } = useParams();
    const [newQuantity, setNewQuantity] = useState({ value: '', error: '' });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setLoading(true);
            const { data } = await axios.get(`https://salty-refuge-04381.herokuapp.com/product/${productId}`);
            setProdouct(data);
            setLoading(false);
        })();
    }, [productId]);

    if(loading){
        return <Spinner/>
    }

    const handleQuantity = inputValue => {
        if (!inputValue) {
            setNewQuantity({ value: '', error: 'Please enter a quantity' })
        }
        else {
            setNewQuantity({ value: inputValue, error: '' })
        }
    }


    const handleUpdateQuantity = async (event) => {
        event.preventDefault();

        if (newQuantity.value === '') {
            setNewQuantity({ value: '', error: 'Quantity number is required' })
        }
        else if (newQuantity.value < 1) {
            setNewQuantity({ value: '', error: 'Please enter a positive quantity' })
        }
        if (newQuantity.value <= parseInt(quantity)) {
            toast.error("Please add grater than current quantity", { id: 'grater' })
        }
        if (newQuantity.value > 0 && newQuantity.value > parseInt(quantity)) {
            const { data } = await axios.put(`https://salty-refuge-04381.herokuapp.com/product/${productId}`, { quantity: newQuantity.value });

            const { quantity, ...rest } = product;
            const currentQuantity = newQuantity.value;
            const newProduct = { quantity: currentQuantity, ...rest };
            setProdouct(newProduct);

            // console.log(data);
            if (data.success) {
                toast.success("Stock update Successfully", { id: 'updateQuantity' })
            }

        }
        event.target.reset();



    };

    const handleDelevired = async () => {
        if (parseInt(quantity) > 0) {
            const { data } = await axios.put(`https://salty-refuge-04381.herokuapp.com/product/${productId}`, { quantity: parseInt(quantity) - 1, });
            if (data.success) {
                const { quantity, ...rest } = product;
                const newQuantity = parseInt(quantity) - 1;
                const newProduct = { quantity: newQuantity, ...rest };
                setProdouct(newProduct);
                if (parseInt(quantity) <= 1) {
                    toast.error("Stock out", { id: 'stockOut' })

                }
            }
        }


    };


    



    return (
        <section className='py-10'>
            <PageTitle title={'Update product'} />
            <div className="container mx-auto lg:px-16 px-6">
                <div className="flex flex-col lg:flex-row lg:justify-between">
                    <div data-aos="fade-up" data-aos-duration="1000" className='basis-full lg:basis-[70%] mb-5 lg:mb-0'>
                        <div className=' flex flex-col bg-white rounded-lg shadow-sm md:flex-row '>
                            <img className="object-cover w-full h-auto rounded-t-lg md:h-auto md:w-[18rem] md:rounded-none md:rounded-l-lg" src={img} alt="" />
                            <div className="p-4">
                                <div className="flex flex-col justify-between leading-normal">
                                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                                    <small>Supply by <strong>{supplier}</strong></small>
                                    <h4 className="text-xl mt-3">Price: <strong>{price}</strong></h4>
                                    <h4 className="text-xl mt-1">Quantity: <strong>{quantity}</strong></h4>
                                    <p className="mb-3 font-normal mt-3 text-gray-700 dark:text-gray-400">Product details <br /> {description}.</p>

                                </div>
                                {
                                    parseInt(quantity) > 0 ? <button onClick={handleDelevired} className='bg-red-400 hover:bg-red-500 px-5 py-2 text-white rounded inline-block'>Delevired</button> : <button className='bg-orange-400 px-5 py-2 rounded text-white'>Stock out</button>
                                }
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" className="basis-full lg:basis-[28%]">
                        <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 ">
                            <form onSubmit={handleUpdateQuantity} className="space-y-6" action="#">
                                <h5 className="text-xl font-medium text-gray-900">Product Stock update</h5>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Product Quantity</label>
                                    <input onBlur={(e) => handleQuantity(e.target.value)} type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-white" placeholder="Quantity" />
                                    {
                                        newQuantity?.error && <small className="text-red-400">{newQuantity.error}</small>
                                    }
                                </div>
                                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Update Stock</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpdateProduct;