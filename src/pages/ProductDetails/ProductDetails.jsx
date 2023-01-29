import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import styles from "./ProductDetails.module.css";
// import { FaCartArrowDown } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { GiConfirmed } from "react-icons/gi";
import { toast } from "react-toastify";
import OrderModal from "../../components/OrderModal/OrderModal";
import useAuth from "../../hooks/useAuth";

const ProductDetails = () => {
  const { id } = useParams();
  const { isLoading } = useAuth();
  const [product, setProduct] = useState({});
  const {
    carName,
    price,
    image,
    company,
    model,
    engineCapacity,
    power,
    breaking,
    category,
  } = product || {};

  useEffect(() => {
    const url = `https://drive-and-drive-server.vercel.app/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const [showModal, setShowModal] = useState(false);
  const handleModalShow = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  const orderNotify = () => {
    toast.success("Ordered Successfully", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  if (isLoading) {
    return (
      <div
        className="d-flex justify-content-center py-5"
        style={{ margin: "300px 0" }}
      >
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="success" />
      </div>
    );
  }

  return (
    <div className="mx-auto">
      <Header />
      <Container>
        <Row
          className="d-flex justify-content-center align-items-center"
          xs={1}
          md={2}
          lg={2}
        >
          <Col>
            <img className="mx-auto img-fluid" src={image} alt="" />
          </Col>
          <Col>
            <div className="mx-auto p-3">
              <h2>{carName}</h2>
              <p>
                <span className="text-secondary fw-bold">Brand:</span> {company}
              </p>
              <p>
                <span className="text-secondary fw-bold">Rated:</span> 5.0
              </p>
              <h4 className={styles.price}>Price: ${price}</h4>
              <small className="text-secondary d-block">Stock Available</small>
              <Button
                onClick={handleModalShow}
                className={`my-3 fw-bold border-0 rounded-pill ${styles.myButton}`}
                variant="dark"
              >
                <GiConfirmed className="mb-1 me-2" />
                Order Now
              </Button>
            </div>
          </Col>
        </Row>
        <hr />
        <div className="mx-auto mt-3 my-5">
          <h3 className={styles.desc}>Description</h3>

          <h5 className="my-4">Specification:</h5>
          <div className={`mx-auto mt-3 ${styles.spec}`}>
            <p>Brand: {company}</p>
            <p>Model: {model}</p>
            <p>Engine: {engineCapacity}</p>
            <p>Power: {power}</p>
            <p>Break: {breaking}</p>
            <p>Category: {category}</p>
          </div>
        </div>
      </Container>
      <OrderModal
        product={product}
        showModal={showModal}
        handleModalClose={handleModalClose}
        orderNotify={orderNotify}
      />
      <Footer />
    </div>
  );
};

export default ProductDetails;
