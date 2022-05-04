import React from 'react';
import Product from '../Product/Product';

const BestProducts = () => {
    return (
        <div className='py-24'>
            <div className="container mx-auto px-5 lg:px-16">
                <div className='space-y-2 text-center mb-10'>
                    <h2 className="text-2xl">See What's Trending Now</h2>
                    <p>From the world's best brands and boutiques.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
            </div>
        </div>
    );
};

export default BestProducts;