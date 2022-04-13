import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import styles from './ProductDetails.module.css';
import { FaCartArrowDown } from "react-icons/fa";

const ProductDetails = () => {
    return (
        <div className='mx-auto'>
            <Container>
                <Row className='d-flex justify-content-center align-items-center' xs={1} md={2} lg={2}>
                    <Col>
                        <img className='mx-auto img-fluid' src="https://i.ibb.co/0yNBgNS/asset-2.png" alt="" />
                    </Col>
                    <Col>
                        <div className='mx-auto p-3'>
                            <h2>Toyota Alpha 2022</h2>
                            <p><span className='text-secondary'>Brand:</span> Toyota</p>
                            <p><span className='text-secondary'>Rated:</span> 5.0</p>
                            <h4 className={styles.price}>$15000</h4>
                            <small className='text-secondary d-block'>Stock Available</small>
                            <Button className={`my-3 fw-bold border-0 rounded-pill ${styles.myButton}`} variant="dark"><FaCartArrowDown className='mb-1 me-2' />Add to Cart</Button>
                        </div>
                    </Col>
                </Row>
                <hr />
                <div className='mx-auto my-3'>
                    <h3 className={styles.desc}>Description</h3>

                    <h5 className='my-4'>Specification:</h5>
                    <div className={`mx-auto mt-3 ${styles.spec}`}>
                        <p>Brand: Toyota</p>
                        <p>Model: S2022</p>
                        <p></p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ProductDetails;