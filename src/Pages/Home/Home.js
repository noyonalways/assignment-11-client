import React from 'react';
import BestProducts from '../../Components/BestProducts/BestProducts';
import HeroSection from '../../Components/HeroSection/HeroSection';
import PageTitle from '../../Components/PageTitle/PageTitle';
import PopularBlogs from '../../Components/PopularBlogs/PopularBlogs';

const Home = () => {
    return (
        <div>
            <PageTitle title={'Home'} />
            <HeroSection />
            <BestProducts />
            <PopularBlogs />
        </div>
    );
};

export default Home;