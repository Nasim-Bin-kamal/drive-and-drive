import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { MdReadMore } from "react-icons/md";
import styles from './FeaturedCategories.module.css';


const categories = [
    {
        categoryName: "Hatchback",
        image: "https://i.ibb.co/MV4wf4L/car1.jpg"
    },
    {
        categoryName: "Sedan",
        image: "https://i.ibb.co/x8zr0bV/car2.jpg"
    },
    {
        categoryName: "SUV",
        image: "https://i.ibb.co/xqbq3f1/car4.jpg"
    },
];

const FeaturedCategories = () => {
    return (
        <div className='mx-auto my-5'>
            <Container>
                <h1 className='mx-auto my-5'>Featured Catagories</h1>
                <div>
                    <Row xs={1} md={2} lg={3}>
                        {
                            categories?.map(({ categoryName, image }, c_id) => (
                                <Col key={c_id}>
                                    <Card className={`mx-auto my-3 p-3 shadow-lg rounded-3 ${styles.carCategory}`}>
                                        <Row xs={1} md={2} lg={2}>
                                            <Col>
                                                <h3>{categoryName}</h3>
                                                <Button className='mx-auto my-2 rounded-pill fw-bold' size='sm' variant='warning'><MdReadMore className='fw-bold fs-5' /> Explore</Button>
                                            </Col>
                                            <Col>
                                                <img className='img-fluid border-2 border-secondary rounded-3' src={image} alt="" />
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default FeaturedCategories;