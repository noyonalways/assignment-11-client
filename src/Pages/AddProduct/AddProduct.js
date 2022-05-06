import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AddProduct = () => {
    const [name, setName] = useState({ value: '', error: '' });
    const [price, setPrice] = useState({ value: '', error: '' });
    const [img, setImg] = useState({ value: '', error: '' });
    const [description, setDescription] = useState({ value: '', error: '' });
    const [quantity, setQuantity] = useState({ value: '', error: '' });
    const [supplier, setSupplier] = useState({ value: '', error: '' });


    const handleName = inputValue => {
        if (!inputValue) {
            setName({ value: '', error: 'Enter Product Name' })
        } else {
            setName({ value: inputValue, error: '' })

        }
    };

    const handlePrice = inputValue => {
        if (inputValue < 0) {
            setPrice({ value: '', error: 'Please input a positive price amount' })
        }
        else if (!inputValue) {
            setPrice({ value: '', error: 'Enter price amount' })
        }
        else {
            setPrice({ value: inputValue, error: '' })
        }
    };


    const handleQuantity = inputValue => {
        if (inputValue < 0) {
            setQuantity({ value: '', error: 'Please input a positive number of quantity' })
        }
        else if (!inputValue) {
            setQuantity({ value: '', error: 'Enter quantity' })
        }
        else {
            setQuantity({ value: inputValue, error: '' })
        }
    };

    const handleSupplier = inputValue => {
        if (!inputValue) {
            setSupplier({ value: '', error: 'Enter supplier name' })
        } else {
            setSupplier({ value: inputValue, error: '' })

        }
    };

    const handleDescription = inputValue => {
        if (!inputValue) {
            setDescription({ value: '', error: 'Enter product description' })
        } else {
            setDescription({ value: inputValue, error: '' })

        }
    };

    const handleImg = inputValue => {
        if (!inputValue) {
            setImg({ value: '', error: 'Enter product image url' })
        } else {
            setImg({ value: inputValue, error: '' })

        }
    }


    const handleAddProduct = async event => {
        event.preventDefault();
        if (name.value === '') {
            setName({ value: '', error: 'Product name is required' })
        };
        if (price.value === '') {
            setPrice({ value: '', error: 'Product price is required' })
        };
        if (quantity.value === '') {
            setQuantity({ value: '', error: 'Product quantity is required' })
        };
        if (supplier.value === '') {
            setSupplier({ value: '', error: 'Product supplier name is required' })
        };
        if (description.value === '') {
            setDescription({ value: '', error: 'Product description is required' })
        };
        if (img.value === '') {
            setImg({ value: '', error: 'Product image url is required' })
        };

        if (name.value && price.value && quantity.value && supplier.value && description.value && img.value) {

            const product = { name: name.value, price: price.value, img: img.value, description: description.value, quantity: quantity.value, supplier: supplier.value };

            const { data } = await axios.post('http://localhost:5000/product', product);

            if (data.success) {
                toast.success('Product Successfully added', { id: 'addedProduct' });
            };

            event.target.reset();
        };

    }


    return (
        <div className="container mx-auto px-4 sm:px-6 md:px-0">
            <div className="flex items-center justify-center h-screen">
                <div className=' md:w-[48%] lg:w-2/6 px-4 py-5 rounded shadow hover:shadow-md'>
                    <h3 className="text-xl text-center mb-3">Add Product</h3>
                    <form onSubmit={handleAddProduct} action="">
                        <div className="mb-2">
                            <input onBlur={(e) => handleName(e.target.value)} className='bg-gray-50 w-full py-2 px-3  rounded-sm' placeholder='Name' type="text" name="" id="" />
                            {
                                name?.error && (<small className='text-red-400'>{name.error}</small>)
                            }
                        </div>

                        <div className="mb-2">
                            <input onBlur={(e) => handlePrice(e.target.value)} className='bg-gray-50 w-full py-2 px-3 rounded-sm' placeholder='Price' type="number" name="" id="" />
                            {
                                price?.error && (<small className='text-red-400'>{price.error}</small>)
                            }
                        </div>
                        <div className="mb-2">
                            <input onBlur={(e) => handleQuantity(e.target.value)} className='bg-gray-50 w-full py-2 px-3  rounded-sm' placeholder='Quantity' type="number" name="" id="" />
                            {
                                quantity?.error && (<small className='text-red-400'>{quantity.error}</small>)
                            }
                        </div>
                        <div className="mb-2">
                            <input onBlur={(e) => handleSupplier(e.target.value)} className='bg-gray-50 w-full py-2 px-3  rounded-sm' placeholder='Supplier name' type="text" name="" id="" />
                            {
                                supplier?.error && (<small className='text-red-400'>{supplier.error}</small>)
                            }
                        </div>
                        <div className="mb-1">
                            <textarea onBlur={(e) => handleDescription(e.target.value)} placeholder='Product description' className='bg-gray-50 w-full py-2 px-3 resize-none rounded-sm' name="" id="" cols="30" rows="3"></textarea>
                            {
                                description?.error && (<small className='text-red-400'>{description.error}</small>)
                            }
                        </div>
                        <div className="mb-2">
                            <textarea onBlur={(e) => handleImg(e.target.value)} placeholder='Image Url' className='bg-gray-50 w-full py-2 px-3 resize-none rounded-sm' name="" id="" cols="30" rows="3"></textarea>
                            {
                                img?.error && (<small className='text-red-400'>{img.error}</small>)
                            }
                        </div>
                        <button className="duration-300 box-border block w-full rounded-sm border border-green-400 text-white px-3 bg-green-400 hover:bg-transparent hover:text-green-400  py-2">Add Product</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;