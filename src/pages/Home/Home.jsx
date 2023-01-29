import React from "react";
import CustomerReviews from "../../components/CustomerReviews/CustomerReviews";
import FeaturedCategories from "../../components/FeaturedCategories/FeaturedCatagories";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import RatingIcon from "../../components/Rating/Rating";
import TopProducts from "../../components/TopProducts/TopProducts";
import TopSlider from "../../components/TopSlider/TopSlider";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <Header />
      <TopSlider />
      <FeaturedCategories />
      <TopProducts />
      <CustomerReviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
