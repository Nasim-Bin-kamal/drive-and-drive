import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { GiCancel } from "react-icons/gi";
import styles from './MyOrders.module.css';
import { toast, ToastContainer } from 'react-toastify';
import useAuth from '../../../hooks/useAuth';


const MyOrders = () => {
    const { user } = useAuth();
    const [orderedProducts, setOrderedProducts] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/orders?email=${user?.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrderedProducts(data));

    }, [user?.email]);

    const cancelNotify = () => {
        toast.success('Order Cancel Successfully!!', {
            position: 'top-center',
            autoClose: 2000
        });
    }

    const handleCancelOrder = (id) => {
        const url = `http://localhost:5000/orders/${id}`;
        const proceed = window.confirm('Are you want to cancel this order');
        if (proceed) {
            axios.delete(url)
                .then(res => {
                    console.log(res.data);
                    if (res.data.deletedCount > 0) {
                        cancelNotify();
                        const remainingOrders = orderedProducts?.filter(product => product._id !== id);
                        setOrderedProducts(remainingOrders);
                    }
                });
        }
    }

    return (
        <div>
            <Container>
                {/* <ToastContainer /> */}
                <div>
                    <h2 className="text-center py-3 title">My Ordered Products: {orderedProducts?.length}</h2>
                </div>
                <div className="mx-auto my-5">
                    <Table striped bordered hover responsive className="shadow-sm">
                        <thead className="text-center">
                            <tr>
                                <th>Product Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Order Data</th>
                                <th>Order Status</th>
                                <th>Order Cancel</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {
                                orderedProducts?.map(({ _id, orderedProduct, orderDate, orderStatus }) => <tr key={_id}>
                                    <td>{orderedProduct?.carName}</td>
                                    <td>
                                        <img className='img-fluid' src={orderedProduct?.image} alt="" width="50px" />
                                    </td>
                                    <td>${orderedProduct?.price}</td>
                                    <td>{orderDate}</td>
                                    <td
                                        className={
                                            orderStatus === "Approved"
                                                ? "text-success fw-bold"
                                                : "text-danger fw-bold"
                                        }
                                    >
                                        <span className="px-2 py-1 bg-secondary bg-opacity-50 rounded-pill">{orderStatus}</span>
                                    </td>
                                    <td className="">
                                        <GiCancel onClick={() => handleCancelOrder(_id)} className={`fs-4 ${styles.cancelBtn}`} title="cancel" />
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </Table>
                </div>
            </Container>
        </div>
    );
};

export default MyOrders;