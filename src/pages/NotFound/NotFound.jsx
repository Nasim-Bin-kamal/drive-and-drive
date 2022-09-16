import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const NotFound = () => {
    const navigate = useNavigate()
    const handleBackToHome = () => {
        navigate("/home");
    }
    return (
        <div>
            <Container className='my-3'>
                <Row>
                    <img className="img-fluid w-50 mx-auto" src="https://i.ibb.co/vsKGggf/error-abstract-concept-illustration-error-webpage-browser-download-failure-page-found-server-request.jpg" alt="" />
                </Row>
                <div className="d-flex align-items-center justify-content-center mt-3">
                    <Button onClick={() => handleBackToHome()} variant="danger" size='lg'>Back To Home</Button>
                </div>
            </Container>

        </div>
    );
};

export default NotFound;