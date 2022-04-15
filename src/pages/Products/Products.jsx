import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import SingleProduct from '../../components/SingleProduct/SingleProduct';
import useAuth from '../../hooks/useAuth';
import useProducts from '../../hooks/useProducts';

const Products = () => {
    const [products] = useProducts([]);
    const { isLoading } = useAuth();
    if (isLoading) {
        return (
            <div className="d-flex justify-content-center py-5" style={{ margin: "300px 0" }}>
                <Spinner animation="grow" variant="danger" />
                <Spinner animation="grow" variant="warning" />
                <Spinner animation="grow" variant="success" />
            </div>
        )
    }

    return (
        <div>
            <Header />
            <Container>
                <h1 className='mx-auto mt-5 pt-5 text-center'>ALL CARS</h1>
                <div className='mx-auto my-5'>
                    <Row xs={1} md={2} lg={3}>
                        {
                            products?.map((product) => (<SingleProduct key={product?._id} product={product} />))
                        }
                    </Row>
                </div>
            </Container>
            <Footer />
        </div>
    );
};

export default Products;