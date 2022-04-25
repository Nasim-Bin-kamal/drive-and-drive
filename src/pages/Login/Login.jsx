import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { FaGoogle, FaGithub } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const location = useLocation();
    const navigate = useNavigate();

    const { signInWithGoogle, signInWithGithub, userSignIn, errorMsg } = useAuth();


    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };
    console.log(loginData);

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        userSignIn(loginData?.email, loginData?.password, location, navigate);
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate);
    }

    const handleGithubSignIn = () => {
        signInWithGithub(location, navigate);
    }

    return (
        <div className={styles.loginSection}>
            <Container>
                <div className="mx-auto py-5">
                    <div
                        className={`mx-auto my-5 p-4 border-0 rounded-3 shadow-sm ${styles.loginForm}`}
                    >
                        {
                            errorMsg && <Alert variant="danger" dismissible >{errorMsg}</Alert>
                        }
                        <h2 className="mx-auto mb-3 text-white text-center">Login</h2>

                        <Form className="mx-auto w-100" onSubmit={handleSubmitLogin}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="text-white">Email</Form.Label>
                                <Form.Control
                                    onBlur={handleOnBlur}
                                    className="rounded-pill"
                                    name="email"
                                    type="email"
                                    placeholder="Enter Email"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className="text-white">Password</Form.Label>
                                <Form.Control
                                    onBlur={handleOnBlur}
                                    className="rounded-pill"
                                    name="password"
                                    type="password"
                                    placeholder="Enter Password"
                                />
                            </Form.Group>
                            <Button
                                className={`mt-3  w-100 rounded-pill border-0 ${styles.myButton}`}
                                variant="dark"
                                type="submit"
                            >
                                LOGIN
                            </Button>
                        </Form>
                        <div className="mx-auto mt-3 text-center">
                            <small className="text-white">Or Login with</small>
                            <div className="mx-auto my-2  d-md-flex justify-content-space-around align-itmes-center">
                                <Button onClick={handleGoogleSignIn} className={`my-1 me-1 rounded-pill w-100 border-0 fw-bold ${styles.googleButton}`} variant="danger"><FaGoogle className="mb-1" /> Google</Button>
                                <Button onClick={handleGithubSignIn} className="my-1 rounded-pill w-100 border-0 fw-bold" variant="dark"><FaGithub className="mb-1" /> Github</Button>
                            </div>                        <div>
                                <NavLink className="mx-auto text-decoration-none text-info" to="/register">Don't have account? Register First</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Login;
