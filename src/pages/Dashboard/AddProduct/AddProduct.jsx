import axios from 'axios';
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import styles from './AddProduct.module.css';
import { ToastContainer, toast } from 'react-toastify';



const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/products', data)
            .then(res => {
                if (res?.data?.insertedId) {
                    successNotify();
                    reset();

                }

            });
    };

    const successNotify = () => {
        toast.success('Successfully Added a Product', {
            autoClose: 2000,
            position: 'bottom-left'
        });
    }
    console.log(errors);
    return (
        <div>
            <Container>
                {/* <ToastContainer /> */}
                <div>
                    <h2 className="text-center mx-auto py-3">Add a New Product</h2>
                </div>

                <div className={`mx-auto mb-5 p-3 rounded-3 shadow-sm ${styles.addProductForm}`} >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="text" placeholder="Car Name" {...register("carName", { required: true, maxLength: 80 })} />
                        <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="text" placeholder="Brand Name" {...register("company", { required: true })} />
                        <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="text" placeholder="Price" {...register("price", { required: true })} />
                        <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="text" placeholder="Engine Capacity" {...register("engineCapacity", { required: true })} />
                        <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="text" placeholder="Power" {...register("power", { required: true })} />
                        <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="text" placeholder="Break" {...register("breaking", { required: true })} />
                        <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="text" placeholder="Model" {...register("model", { required: true })} />
                        <input className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" type="text" placeholder="Image Url" {...register("image", { required: true })} />
                        <select className="w-100  mx-auto my-2 p-1 border border-2 rounded-3" {...register("category")}>
                            <option value="Hatchback">Hatchback</option>
                            <option value="Sedan">Sedan</option>
                            <option value="SUV">SUV</option>
                        </select>

                        <Button className={`border-0 fw-bold px-3 w-100 mt-3 mx-auto ${styles.myButton}`} variant="dark" type="submit">Submit</Button>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default AddProduct;


















































