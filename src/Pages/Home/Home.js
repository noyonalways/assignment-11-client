import React from 'react';
import BestProducts from '../../Components/BestProducts/BestProducts';
import HeroSection from '../../Components/HeroSection/HeroSection';
import PageTitle from '../../Components/PageTitle/PageTitle';
import PopularBlogs from '../../Components/PopularBlogs/PopularBlogs';
import Testimonial from '../../Components/Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <PageTitle title={'Home'} />
            <HeroSection />
            <BestProducts />
            <PopularBlogs />
            <Testimonial />
        </div>
    );
};

export default Home;