import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './UpdateProduct.module.css';
import { BiArrowBack } from "react-icons/bi";
import axios from 'axios';
import { toast } from 'react-toastify';

const UpdateProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [updateProduct, setUpdateProduct] = useState({});

    const { carName, company, price, engineCapacity, power, breaking, model, image, category } = updateProduct || {};

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setUpdateProduct(data));
    }, [id]);


    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const url = `http://localhost:5000/products/update/${id}`;
        const proceed = window.confirm('Are you want to update this product');
        if (proceed) {
            axios.put(url, data)
                .then(res => {
                    console.log(res.data);
                    if (res.data.modifiedCount > 0) {
                        toast.success('Update Product Successfully', {
                            autoClose: 2000,
                            position: 'bottom-left'
                        })

                    }

                });
        }
        console.log(data)
    };
    console.log(errors);

    return (
        <div>
            <Container>
                <div className='mx-auto d-flex justify-content-between align-items-center'>
                    <h2>Update Product</h2>
                    <Button
                        onClick={() => navigate("/dashboard/manage-products")}
                        className={`border-0 rounded-3 fw-bold ${styles.BackButton}`} variant="dark"><BiArrowBack className='fw-bold fs-5' /> Back to Manage Product</Button>
                </div>
                <div className={`mx-auto my-3 p-3 rounded-3 bg-white shadow-sm ${styles.updateForm}`}>
                    <h5>Edit Information: {updateProduct?.carName}</h5>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="text" defaultValue={carName} placeholder="Car Name" {...register("carName", { required: true, maxLength: 80 })} />
                        <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="text" defaultValue={company} placeholder="Brand Name" {...register("company", { required: true })} />
                        <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="text" defaultValue={price} placeholder="Price" {...register("price", { required: true })} />
                        <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="text" defaultValue={engineCapacity} placeholder="Engine Capacity" {...register("engineCapacity", { required: true })} />
                        <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="text" defaultValue={power} placeholder="Power" {...register("power", { required: true })} />
                        <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="text" defaultValue={breaking} placeholder="Break" {...register("breaking", { required: true })} />
                        <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="text" defaultValue={model} placeholder="Model" {...register("model", { required: true })} />
                        <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="text" defaultValue={image} placeholder="Image Url" {...register("image", { required: true })} />
                        <select className="w-100  mx-auto my-2 p-1 border border-2 rounded-3"  {...register("category")} defaultValue={category}>

                            <option value="Hatchback">Hatchback</option>
                            <option value="Sedan">Sedan</option>
                            <option value="SUV">SUV</option>
                        </select>

                        <Button className={`border-0 fw-bold px-3 w-100 mt-3 mx-auto ${styles.myButton}`} variant="dark" type="submit">Update Product</Button>
                    </form>
                </div>
            </Container>

        </div>
    );
};

export default UpdateProduct;
