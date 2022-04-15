import axios from 'axios';
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import styles from './OrderModal.module.css';

const OrderModal = ({ showModal, handleModalClose, product, orderNotify }) => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = data => {
        data.orderStatus = 'Pending';
        data.orderDate = new Date().toLocaleDateString();
        data.orderedProduct = { ...product };

        axios.post('http://localhost/5000/orders', data)
            .then(res => {

                if (res.data?.insertedId) {
                    handleModalClose();
                    reset();
                    orderNotify();

                }
            });

    }



    console.log(errors);
    return (
        <div>
            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h3 className={styles.modalTitle}>Order {product?.carName}</h3>
                    </Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <div className={`mx-auto p-3 rounded-3 shadow-sm ${styles.bookingForm}`}>

                        <form className=" mx-auto d-flex justify-content-center align-items-center flex-column w-100" onSubmit={handleSubmit(onSubmit)}>
                            <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="text" placeholder="Full Name" {...register("name", { required: true, maxLength: 80 })} value={user?.displayName || ""} readOnly />
                            <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="email" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} value={user?.email || ""} readOnly />
                            <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="tel" placeholder="Phone number" {...register("phone", { required: true, minLength: 6, maxLength: 12 })} />
                            <textarea className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" placeholder="Enter Your Address" {...register("address", { required: true })} />

                            <Button className={`border-0 fw-bold px-3 w-100 mt-3 ${styles.myButton}`} variant="dark" type="submit">Confirm</Button>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default OrderModal;