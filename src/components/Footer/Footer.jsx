import React from 'react';
import { Col, Container, Row, Button, InputGroup, FormControl } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css';
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const pages = [
    {
        pageTitle: "Home",
        pageLink: "/home"
    },
    {
        pageTitle: "About",
        pageLink: "/about"
    },
    {
        pageTitle: "Contact",
        pageLink: "/contact"
    },
    {
        pageTitle: "Login",
        pageLink: "/login"
    }
]

const Footer = () => {
    return (
        <div className={`${styles.footer} mx-auto`}>
            <Container>
                <Row xs={1} md={4} lg={4} className="py-5 mx-auto">
                    <Col>
                        <div className={`mb-3 ${styles.footerLogo}`}>
                            <img className="img-fluid w-75" src="https://i.ibb.co/LpWqBHH/d-d-logo.png" alt="" />
                        </div>
                        <p><small>Our main concern is to provide best customer service and after sales service.</small></p>
                        <h4 className="text-white">Social Links</h4>
                        <div className="d-flex justify-content-start align-items-center my-3">

                            <FaFacebookSquare className={`${styles.social} me-4 fs-4`} />
                            <FaInstagram className={`${styles.social} me-4 fs-4`} />
                            <FaYoutube className={`${styles.social} me-4 fs-4`} />

                        </div>
                    </Col>
                    <Col className="mx-auto">
                        <h5 className="text-white">Quick Navigation</h5>
                        <ul className={`${styles.quickNav}`}>

                            {
                                pages?.map((page, p_id) => (
                                    <li key={p_id}>
                                        <NavLink className={`${styles.menuItem}`} to={page?.pageLink}>{page?.pageTitle}</NavLink>
                                    </li>
                                ))
                            }

                        </ul>
                    </Col>
                    <Col>
                        <h5 className="text-white mb-3">Working Hours</h5>
                        <p>Sat to Fri: 9.00 AM to 8.00 PM</p>
                        <p>24 hours online service.</p>

                        <address>
                            <i>3/4, Basundarah Model Town</i><br />
                            <i>Dhaka, Bangladesh</i>
                        </address>
                    </Col>
                    <Col >
                        <h5 className="text-white mb-3">Subscribe Us</h5>

                        <InputGroup className="my-4">
                            <FormControl

                                type="email"
                                placeholder="Enter your email"
                                aria-label="Enter your email"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-light" id="button-addon2">
                                <FiSend className={`mx-2 fs-5 fw-bolder ${styles.myButton}`} />
                            </Button>
                        </InputGroup>
                        <p>Subscribe To Our Newsletter For Latest Updates</p>
                    </Col>

                </Row>

            </Container>
            <div className={`${styles.footerEnd} p-4 text-center fw-lighter`} >
                <small>&copy; Copyright 2022 | All Rights Reserved By Drive & Drive LTD.</small>
            </div>
        </div>
    );
};

export default Footer;