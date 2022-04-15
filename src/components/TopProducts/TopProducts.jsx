import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SingleProduct from '../SingleProduct/SingleProduct';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick/lib/slider';
import useProducts from '../../hooks/useProducts';


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
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const TopProducts = () => {
    const [products] = useProducts();

    const topProducts = products.filter((cars) => cars.price > "40000")
    return (
        <div>
            <Container>
                <h1>Top Selling Cars</h1>
                <div className='mx-3 my-5'>
                    <Slider {...settings}>
                        {
                            topProducts?.map((product) => (<SingleProduct key={product?._id} product={product} />))
                        }
                    </Slider>
                </div>
            </Container>
        </div>
    );
};

export default TopProducts;