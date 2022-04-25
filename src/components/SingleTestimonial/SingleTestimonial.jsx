import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { FaUserCircle } from "react-icons/fa";
import styles from './SingleTestimonial.module.css';
import useAuth from '../../hooks/useAuth';


const SingleTestimonial = ({ review }) => {
    const { user } = useAuth();


    return (
        <Card className={`shadow-sm mx-2 my-3 text-center px-3 py-2 rounded-3 h-100 ${styles.testimonialCard}`}>
            <Row xs={1} md={1} lg={1} className={` d-flex justify-content-center align-items-center ${styles.topSection}`}>
                <Col xs={12} md={4} lg={4}>
                    <div>
                        {
                            user?.photoURL ? (
                                <img className='mx-auto img-fluid border border-3 rounded-circle border-secondary' src={user?.photoURL} style={{ width: '60px', height: '60px' }} alt="" />
                            ) : (
                                <FaUserCircle className='fa-4x' />
                            )
                        }
                    </div>
                </Col>
                <Col xs={12} md={8} lg={8}>
                    <h5 className={`fw-bold mx-auto ${styles.customerName}`}>{review?.name}</h5>
                </Col>
            </Row>
            <div>
                <div className={`py-1 ${styles.commentSection}`}>
                    <small>{review?.review}</small>
                </div>
                <div className="pt-3 mx-auto">
                    <Rating
                        className={`${styles.ratings}`}
                        readonly
                        initialRating={review?.rating}
                        emptySymbol="far fa-star text-warning ms-1 p-0"
                        fullSymbol="fas fa-star text-warning ms-1 p-0"
                    ></Rating>

                </div>
            </div>
        </Card>


    );
};

export default SingleTestimonial;