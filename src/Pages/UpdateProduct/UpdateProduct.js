import React from 'react';
import PageTitle from '../../Components/PageTitle/PageTitle';

const UpdateProduct = () => {
    return (
        <div className='pt-5 pb-16'>
            <PageTitle title={'Update Product'}/>
            <div className="container mx-auto lg:px-16 px-4">
                <h2 className="text-3xl text-center mb-10">Products Info</h2>
                <div className='grid lg:grid-cols-2 gap-5 overflow-hidden bg-white rounded-lg shadow-lg w-full py-5 px-3'>
                    <div class="max-w-sm mx-auto">
                        <img class="object-cover object-center w-full h-56 rounded-md" src="https://gostro.familab.net/wp-content/uploads/2021/12/pdp_jasper-package-1a_main_front_20161123_19-1.jpg" alt="avatar" />

                        <div class=" py-4">
                            <h1 class="text-2xl font-semibold text-gray-800">Chair</h1>
                            <p class="py-2 text-gray-700 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas delectus modi cum pariatur!</p>
                            <div class="flex items-center mt-2 text-gray-700">

                                <h1 class=" text-xl">Price: $55</h1>
                            </div>

                            <div class="flex items-center mt-2 text-gray-700 ">

                                <h1 class="text-base">Quantity: 5</h1>
                            </div>

                            <div class="flex items-center mt-2 text-gray-700 justify-between">
                                <h1 class="text-sm">Supply by Regal</h1>
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