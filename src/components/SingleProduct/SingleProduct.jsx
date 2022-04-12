import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaCartArrowDown } from "react-icons/fa";
import styles from './SingleProduct.module.css';

const SingleProduct = () => {
    return (
        <div className='my-3'>
            <Card className={`mx-2 rounded-3 bg-white shadow-sm ${styles.content}`} data-aos="fade-up">
                <div className={styles.contentOverlay}></div>
                <Card.Img className={styles.contentImage} variant="top" src="https://i.ibb.co/0yNBgNS/asset-2.png" />
                <Card.Body>
                    <Card.Title className="fs-3 fw-bold project-name">Lord 2019</Card.Title>
                    <h5 className="py-1 text-secondary">$19000</h5>
                </Card.Body>
                <div className={`${styles.contentDetails} ${styles.fadeInBottom}`}>

                    <Button className='fw-bold rounded-pill' size='sm' variant="outline-warning">
                        <FaCartArrowDown className='mb-1 fs-5' /> Add To Cart
                    </Button>

                </div>
            </Card>
        </div>
    );
};

export default SingleProduct;