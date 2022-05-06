import React from 'react';
import PageTitle from '../../Components/PageTitle/PageTitle';
import SingleProduct from '../../Components/SingleProduct/SingleProduct';


const MyItems = () => {
    return (
        <div className='py-10'>
            <PageTitle title={'Blogs'} />
            <div className="container mx-auto lg:px-16">
                <h2 className="text-2xl text-center mb-5">My Added Products</h2>
                <div className="space-y-3">
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

export default MyItems;