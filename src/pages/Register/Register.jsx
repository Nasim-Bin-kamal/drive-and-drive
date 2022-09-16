import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import { FaGoogle, FaGithub } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";


const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const { signInWithGoogle, signInWithGithub, registerUser, errorMsg } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();


    const handleOnBlur = (e) => {

        const field = e.target.name;
        const value = e.target.value;

        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
        console.log(field, value, registerData);

    }

    const handleSubmitRegister = (e) => {
        e.preventDefault();
        if (registerData.password !== registerData.password2) {
            alert('Password did not match');
            return;
        }

        registerUser(registerData?.email, registerData?.password, registerData?.name, location, navigate)

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate);
    }

    const handleGithubSignIn = () => {
        signInWithGithub(location, navigate);
    }

    return (
        <div className={styles.regSection}>
            <Container>
                <div className="mx-auto pt-5 pb-3">
                    <div
                        className={`mx-auto p-4 d-flex justify-content-center align-items-center flex-column border-0 rounded-3 shadow-sm ${styles.registerForm}`}
                    >
                        {
                            errorMsg && <Alert variant="danger" dismissible >{errorMsg}</Alert>
                        }
                        <h2 className="mx-auto mb-3 text-white">Register</h2>

                        <Form className="mx-auto w-100" onSubmit={handleSubmitRegister}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label className="text-white">Full Name</Form.Label>
                                <Form.Control
                                    onBlur={handleOnBlur}
                                    className="rounded-pill"
                                    type="text"
                                    name="name"
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
                                className={`mt-3  w-100 rounded-pill border-0 ${styles.myButton}`}
                                variant="dark"
                                type="submit"
                            >
                                REGISTER
                            </Button>
                            <div className="mx-auto mt-3 text-center">
                                <small className="text-white">Or Register with</small>
                                <div className="mx-auto my-2  d-md-flex justify-content-between align-itmes-center">
                                    <Button
                                        className={`my-1 me-1 rounded-pill w-100 fw-bold border-0 ${styles.googleButton}`}
                                        variant="danger"
                                    >
                                        <FaGoogle onClick={handleGoogleSignIn} className="mb-1" /> Google
                                    </Button>
                                    <Button
                                        className="my-1 rounded-pill w-100 fw-bold border-0"
                                        variant="dark"
                                    >
                                        <FaGithub onClick={handleGithubSignIn} className="mb-1" /> Github
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
