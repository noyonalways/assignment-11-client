import React from 'react';

const AddProduct = () => {
    return (
        <div>
            <h3 className="text-xl text-center mb-3">Add Product</h3>
            <form action="">
                <input className='w-full py-2 px-3 mb-2 rounded-sm' placeholder='Name' type="text" name="" id="" />
                <input className='w-full py-2 px-3 mb-2 rounded-sm' placeholder='Price' type="number" name="" id="" />
                <input className='w-full py-2 px-3 mb-2 rounded-sm' placeholder='Quantity' type="number" name="" id="" />
                <input className='w-full py-2 px-3 mb-2 rounded-sm' placeholder='Supplier name' type="text" name="" id="" />
                <textarea placeholder='Image Url' className='w-full py-2 px-3 resize-none rounded-sm' name="" id="" cols="30" rows="3"></textarea>
            </form>
        </div>
    );
};

export default AddProduct;