import React from 'react';

const SingleProduct = () => {
    return (
        <div className="flex bg-gray-50 items-center rounded py-3 md:py-0">
            <div className='w-20 md:w-32'>
                <img src="https://gostro.familab.net/wp-content/uploads/2021/12/pdp_jasper-package-1a_main_front_20161123_19-1.jpg" alt="" className="w-full rounded" />
            </div>
            <div className='pl-3 pr-2 md:pr-5 flex justify-between w-full md:items-center'>
                <div>
                    <p className="">Product Name</p>
                    <small>Supplier by Regel</small>
                </div>
                <p>Price: $45</p>
                <p>Quantity: 5</p>
                <div className=' flex flex-col lg:flex-row'>
                    <button className="hover:bg-transparent duration-200 hover:text-blue-400 bg-blue-400 px-2 md:px-4 py-1 ring-2 ring-blue-400 rounded text-white mb-2 md:mb-0 md:mr-2">
                        Edit
                    </button>
                    <button className="hover:bg-transparent duration-200 hover:text-red-400 bg-red-400 px-2 md:px-4 py-1 ring-2 ring-red-400 rounded text-white">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;