import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';




const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    const location = useLocation();
    if (isLoading) {
        return (
            <div className="d-flex justify-content-center my-5 ">
                <Spinner animation="grow" variant="danger" />
                <Spinner animation="grow" variant="warning" />
                <Spinner animation="grow" variant="success" />
            </div>
        )
    }
    if (user?.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />

};

export default PrivateRoute;