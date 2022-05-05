import React from 'react';

const AddProduct = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 md:px-0">
            <div className="flex items-center justify-center h-screen">
                <div className=' md:w-[45%] lg:w-2/6 px-4 py-5 rounded shadow hover:shadow-md'>
                    <h3 className="text-xl text-center mb-3">Add Product</h3>
                    <form action="">
                        <input className='bg-gray-50 w-full py-2 px-3 mb-2 rounded-sm' placeholder='Name' type="text" name="" id="" />
                        <input className='bg-gray-50 w-full py-2 px-3 mb-2 rounded-sm' placeholder='Price' type="number" name="" id="" />
                        <input className='bg-gray-50 w-full py-2 px-3 mb-2 rounded-sm' placeholder='Quantity' type="number" name="" id="" />
                        <input className='bg-gray-50 w-full py-2 px-3 mb-2 rounded-sm' placeholder='Supplier name' type="text" name="" id="" />
                        <textarea placeholder='Image Url' className='bg-gray-50 w-full py-2 px-3 resize-none rounded-sm' name="" id="" cols="30" rows="3"></textarea>
                        <button className="duration-300 box-border block w-full rounded-sm border border-green-400 text-white px-3 bg-green-400 hover:bg-transparent hover:text-green-400  py-2">Add Product</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;