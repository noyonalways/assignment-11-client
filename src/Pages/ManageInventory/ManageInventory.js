import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../Components/PageTitle/PageTitle';
import SingleProduct from '../../Components/SingleProduct/SingleProduct';


const ManageInventory = () => {
    return (
        <div className='py-6'>
            <PageTitle title={'Blogs'} />
            <div className="container mx-auto lg:px-16 px-3">
                <div className='text-center space-y-3 mb-3'>
                    <h3 className="text-2xl">Add more product</h3>
                    <Link className='inline-block bg-green-400 ring-2 ring-green-400 text-white rounded px-3 py-2 hover:bg-transparent hover:text-green-400' to='/add-product '>Add product </Link>
                </div>
                <div className="space-y-3">
                        <SingleProduct />
                        <SingleProduct />
                        <SingleProduct />
                        <SingleProduct />
                        <SingleProduct />
                        <SingleProduct />
                        <SingleProduct />
                        <SingleProduct />
                </div>
            </div>
        </div>
    );
};

export default ManageInventory;