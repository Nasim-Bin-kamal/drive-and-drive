import React from 'react';
import CustomerReviews from '../../components/CustomerReviews/CustomerReviews';
import FeaturedCategories from '../../components/FeaturedCategories/FeaturedCatagories';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import TopProducts from '../../components/TopProducts/TopProducts';
import TopSlider from '../../components/TopSlider/TopSlider';

const Home = () => {
    return (
        <div>
            <Header />
            <TopSlider />
            <FeaturedCategories />
            <TopProducts />
            <CustomerReviews />

            <Footer />
        </div>
    );
};

export default Home;