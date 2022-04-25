import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import SingleProduct from '../../components/SingleProduct/SingleProduct';
import useAuth from '../../hooks/useAuth';
import useProducts from '../../hooks/useProducts';

const Products = () => {
    const [products] = useProducts();
    const { isLoading } = useAuth();
    const hatchbackCars = products.filter((product) => product.category === "Hatchback");
    const sedanCars = products.filter((product) => product.category === "Sedan");
    const suvCars = products.filter((product) => product.category === "SUV");
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
                    <h3 className='mx-auto my-3'>Hatchback</h3>
                    <Row xs={1} md={2} lg={3}>
                        {
                            hatchbackCars?.map((product) => (<SingleProduct key={product?._id} product={product} />))
                        }
                    </Row>
                </div>
                <div className='mx-auto my-5'>
                    <h3 className='mx-auto my-3'>Sedan</h3>
                    <Row xs={1} md={2} lg={3}>
                        {
                            sedanCars?.map((product) => (<SingleProduct key={product?._id} product={product} />))
                        }
                    </Row>
                </div>
                <div className='mx-auto mb-5'>
                    <h3 className='mx-auto my-3'>SUV</h3>
                    <Row xs={1} md={2} lg={3}>
                        {
                            suvCars?.map((product) => (<SingleProduct key={product?._id} product={product} />))
                        }
                    </Row>
                </div>
            </Container>
            <Footer />
        </div>
    );
};

export default Products;