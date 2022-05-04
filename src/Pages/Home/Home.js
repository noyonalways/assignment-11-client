import React from 'react';
import BestProducts from '../../Components/BestProducts/BestProducts';
import HeroSection from '../../Components/HeroSection/HeroSection';
import PageTitle from '../../Components/PageTitle/PageTitle';

const Home = () => {
    return (
        <div>
            <PageTitle title={'Home'} />
            <HeroSection />
            <BestProducts/>
        </div>
    );
};

export default Home;