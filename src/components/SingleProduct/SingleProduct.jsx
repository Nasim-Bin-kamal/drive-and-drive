import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaCartArrowDown } from "react-icons/fa";
import styles from './SingleProduct.module.css';
import { BsFillEyeFill, BsSuitHeart } from "react-icons/bs";
import { MdReadMore } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const SingleProduct = ({ product }) => {
    const { _id, carName, price, image } = product || {};
    const navigate = useNavigate();

    return (
        <div className=' my-3'>
            <Card className={`mx-2 rounded-3 bg-white shadow-sm ${styles.content}`} data-aos="fade-up">
                <div className='mx-2 my-1 d-flex justify-content-between align-items-center'>
                    <small className={`px-2 py-1 fw-light rounded-pill text-white ${styles.discount}`}>20% off</small>
                    <div className='fs-4 d-flex justify-content-evenly align-items-center flex-column'>
                        <BsFillEyeFill className='mb-1' />
                        <BsSuitHeart />
                    </div>
                </div>
                <div className={styles.contentOverlay}></div>
                <Card.Img className={styles.contentImage} variant="top" src={image} />
                <Card.Body>
                    <Card.Title className="fs-3 fw-bold project-name">{carName}</Card.Title>
                    <h5 className={styles.price}>${price}</h5>
                </Card.Body>
                <div className={`${styles.contentDetails} ${styles.fadeInBottom}`}>

                    {/* <Button className={`my-3 me-2 fw-bold border-0 rounded-pill ${styles.myButton}`} variant="secondary">
                        <FaCartArrowDown className='mb-1 me-2' />Add
                    </Button> */}
                    <Button onClick={() => navigate(`/product/${_id}`)} className={`my-3 fw-bold border-0 rounded-pill ${styles.myButton}`} variant="secondary">
                        <MdReadMore className='fs-5' /> Details
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default SingleProduct;