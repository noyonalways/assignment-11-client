import React from 'react';
import { FcSearch } from 'react-icons/fc'
import { Link } from 'react-router-dom';

const NoDataFound = () => {
    return (

        <div data-aos="zoom-in" data-aos-duration="1000" className="flex h-[80vh] items-center justify-center">
            <div className='bg-gray-50 w-[300px] text-center  h-[300px] rounded-full flex items-center justify-center'>
                <div>
                    <FcSearch className='text-7xl inline-block' />
                    <h3 className="text-2xl mb-3">No Data Found</h3>
                    <Link to='/add-product' className="rounded-sm px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100 hover:bg-blue-200"
                    >Add Product
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default NoDataFound;