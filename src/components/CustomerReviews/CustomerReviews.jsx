import React, { useEffect, useState } from "react";
import { Container, Spinner, Card } from "react-bootstrap";
import Rating from "react-rating";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./CustomerReviews.module.css";
import SingleTestimonial from "../SingleTestimonial/SingleTestimonial";
import useAuth from "../../hooks/useAuth";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { isLoading } = useAuth();

  useEffect(() => {
    fetch("https://drive-and-drive-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center my-5 loading">
        <Spinner className="" animation="grow" variant="danger" />
        <Spinner className="" animation="grow" variant="warning" />
        <Spinner className="" animation="grow" variant="success" />
      </div>
    );
  }

  return (
    <div className={styles.reviewSection}>
      <Container>
        <div className="mx-auto">
          <h1 className="">Customer Reviews</h1>
        </div>
        <div className="mx-3 py-5">
          <Slider {...settings}>
            {reviews?.map((review, t_id) => (
              <SingleTestimonial key={t_id} review={review} />
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default CustomerReviews;
