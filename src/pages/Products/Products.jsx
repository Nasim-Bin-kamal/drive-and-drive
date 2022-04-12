import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleProduct from '../../components/SingleProduct/SingleProduct';

const Products = () => {
    return (
        <div>
            <Container>
                <h1 className='mx-auto text-center'>ALL CARS</h1>
                <div>
                    <Row xs={1} md={2} lg={3}>
                        <SingleProduct />
                        <SingleProduct />
                        <SingleProduct />
                        <SingleProduct />
                        <SingleProduct />
                        <SingleProduct />
                        <SingleProduct />
                        <SingleProduct />
                        <SingleProduct />
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Products;