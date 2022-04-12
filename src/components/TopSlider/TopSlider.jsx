import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Typical from 'react-typical';
import styles from './TopSlider.module.css';
import { BsArrowRight } from "react-icons/bs";

const sliderItems = [
    {
        image: "https://i.ibb.co/MV4wf4L/car1.jpg",
        caption: "Explore Premium Cars",
        description: "World best car importer"
    },
    {
        image: "https://i.ibb.co/x8zr0bV/car2.jpg",
        caption: "Shift and Drive",
        description: "Buy Your Desired Car"
    },
    {
        image: "https://i.ibb.co/2Y8Q15K/car3.jpg",
        caption: "Grave the Summer Sale",
        description: "Purchare any car upto 5% discount"
    },
    {
        image: "https://i.ibb.co/xqbq3f1/car4.jpg",
        caption: "Best After Sales Service",
        description: "We provide best services"
    }
];


const TopSlider = () => {
    return (
        <div className=''>
            <Carousel className={`${styles.slider}`}>
                {
                    sliderItems?.map((item, i_id) => (
                        <Carousel.Item className={`${styles.sliderItem}`} key={i_id}>
                            <img
                                className={`d-block w-100 ${styles.sliderImg}`}
                                src={item?.image}
                                alt="First slide"
                            />
                            <Carousel.Caption className={`${styles.caption}`}>
                                <h1>{item?.caption}</h1>
                                <p className="fs-4">{item?.description}</p>
                                <Button className="text-white border border-2 rounded-pill px-4 py-2 slider-btn" variant="outside-light">Book Now <BsArrowRight /><i className="fas fa-angle-double-right"></i></Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
            {/* <Carousel className={`${styles.slider}`}>
                <Carousel.Item className={`${styles.sliderItem}`}>
                    <img
                        className={`d-block w-100 ${styles.sliderImg}`}
                        src="https://i.ibb.co/LdzmtsQ/asusrog.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className={`${styles.caption}`}>
                        <h1>Upcoming Laptop
                            <Typical
                                steps={[' MacBook Pro', 1000, ' HP Envy x360', 1000, ' Razer Book 13', 1000]}
                                loop={Infinity}
                                wrapper="p"
                            />

                        </h1>
                        <p className="fs-4 ">Prebook is gooing on</p>
                        <Link to="/shop">
                            <Button className={`text-white border border-2 px-4 py-2 ${styles.sliderBtn}`} variant="outside-light">Prebook Now <i className="fas fa-angle-double-right"></i></Button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className={`${styles.sliderItem}`}>
                    <img
                        className={`d-block w-100 ${styles.sliderImg}`}
                        src="https://i.ibb.co/9yHDsVk/iphone.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption className={`${styles.caption}`}>
                        <h1>Latest Offers
                            <Typical
                                steps={[' In Mobile Phones', 1000, ' and Computers ', 1000]}
                                loop={Infinity}
                                wrapper="b"
                            />
                        </h1>
                        <p className="fs-4">Upto 15% discount is ongoing</p>
                        <Link to="/shop">
                            <Button className={`text-white border border-2 px-4 py-2 ${styles.sliderBtn}`} variant="outside-light">Order Now <i className="fas fa-angle-double-right"></i></Button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className={`${styles.sliderItem}`}>
                    <img
                        className={`d-block w-100 ${styles.sliderImg}`}
                        src="https://i.ibb.co/6cQFSnb/speaker.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption className={`${styles.caption}`}>
                        <h1>
                            <Typical
                                steps={['Best Collections', 1000, 'Best After Sales Service', 1000, 'Best Price', 1000]}
                                loop={Infinity}
                                wrapper="b"
                            />
                        </h1>
                        <p className="fs-4">We have best and unique bikes.</p>
                        <Link to="/shop">
                            <Button className={`text-white border border-2 px-4 py-2 ${styles.sliderBtn}`} variant="outside-light">Order Now <i className="fas fa-angle-double-right"></i></Button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel> */}
        </div>
    );
};

export default TopSlider;