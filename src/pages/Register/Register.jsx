import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./Register.module.css";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Register = () => {
    const [registerData, setRegisterData] = useState({});

    const handleOnBlur = (e) => {
        const newRegisterData = { ...registerData };
        newRegisterData[e.target.name] = e.target.value;
        setRegisterData(newRegisterData);
    };
    console.log(registerData);

    const handleSubmitRegister = (e) => {
        e.preventDefault();
    };

    return (
        <div className={styles.regSection}>
            <Container>
                <div className="mx-auto pt-5 pb-3">
                    <div
                        className={`mx-auto p-4 d-flex justify-content-center align-items-center flex-column border-0 rounded-3 shadow-sm ${styles.registerForm}`}
                    >
                        <h2 className="mx-auto mb-3 text-white">Register</h2>

                        <Form className="mx-auto w-100" onSubmit={handleSubmitRegister}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label className="text-white">Full Name</Form.Label>
                                <Form.Control
                                    onBlur={handleOnBlur}
                                    className="rounded-pill"
                                    type="text"
                                    name="fullName"
                                    placeholder="Enter Full Name"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="text-white">Email</Form.Label>
                                <Form.Control
                                    onBlur={handleOnBlur}
                                    className="rounded-pill"
                                    type="email"
                                    name="email"
                                    placeholder="Enter Email"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className="text-white">Password</Form.Label>
                                <Form.Control
                                    onBlur={handleOnBlur}
                                    className="rounded-pill"
                                    type="password"
                                    name="password"
                                    placeholder="Enter Password"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword2">
                                <Form.Label className="text-white">Confirm Password</Form.Label>

                                <Form.Control
                                    onBlur={handleOnBlur}
                                    className="rounded-pill"
                                    type="password"
                                    name="password2"
                                    placeholder="Re Enter Password"
                                />
                            </Form.Group>
                            <Button
                                className="mt-3 w-100 rounded-pill "
                                variant="info"
                                type="submit"
                            >
                                REGISTER
                            </Button>
                            <div className="mx-auto mt-3 text-center">
                                <small className="text-white">Or Register with</small>
                                <div className="mx-auto my-2  d-md-flex justify-content-space-around align-itmes-center">
                                    <Button
                                        className="my-1 me-1 rounded-pill w-100 fw-bold"
                                        variant="danger"
                                    >
                                        <FaGoogle className="mb-1" /> Google
                                    </Button>
                                    <Button
                                        className="my-1 rounded-pill w-100 fw-bold"
                                        variant="dark"
                                    >
                                        <FaGithub className="mb-1" /> Github
                                    </Button>
                                </div>
                                <div>
                                    <NavLink className="text-decoration-none text-info" to="/login">
                                        Already have an account? Please Login
                                    </NavLink>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Register;
