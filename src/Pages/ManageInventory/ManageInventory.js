import React from 'react';
import AddProduct from '../../Components/AddProduct/AddProduct';
import PageTitle from '../../Components/PageTitle/PageTitle';
import SingleProduct from '../../Components/SingleProduct/SingleProduct';


const ManageInventory = () => {
    return (
        <div className='py-6'>
            <PageTitle title={'Blogs'} />
            <div className="container mx-auto lg:px-16 px-3">
                <div className="flex flex-wrap lg:justify-between space-y-5 lg:space-y-0">
                    <div className="basis-full lg:basis-[63%] space-y-3 h-screen overflow-y-scroll">
                        <SingleProduct />
                        <SingleProduct />
                        <SingleProduct />
                        <SingleProduct />
                        <SingleProduct />
                        <SingleProduct />
                        <SingleProduct />
                        <SingleProduct />
                        <SingleProduct />
                    </div>
                    <div className="basis-full lg:basis-2/6 bg-red-200 p-3 lg:sticky top-0">
                        <AddProduct/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageInventory;