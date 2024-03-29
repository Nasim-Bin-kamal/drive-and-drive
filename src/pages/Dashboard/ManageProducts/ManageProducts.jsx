import React from "react";
import axios from "axios";
import { Container, Table } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import styles from "./ManageProducts.module.css";
import { toast } from "react-toastify";
import useProducts from "../../../hooks/useProducts";
import { useNavigate } from "react-router-dom";

const ManageProducts = () => {
  const [products, setProducts] = useProducts();
  const navigate = useNavigate();

  const deleteNotify = () => {
    toast.success("Successfully Deleted The Product", {
      autoClose: 3000,
      position: "top-center",
    });
  };

  const handleDeleteProduct = (id) => {
    const url = `https://drive-and-drive-server.vercel.app/products/${id}`;
    const proceed = window.confirm("Are you want to delete this product");
    if (proceed) {
      axios.delete(url).then((res) => {
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          deleteNotify();
          const remainingProducts = products?.filter(
            (product) => product._id !== id
          );
          setProducts(remainingProducts);
        }
      });
    }
  };
  const handleUpdateProduct = (id) => {
    navigate(`update/${id}`);
  };

  return (
    <div>
      <Container>
        <div className="mx-auto text-center py-3">
          <h2 className="title">Manage All Products</h2>
          <h5 className="text-secondary">You can update or delete a product</h5>
        </div>
        <div className="mx-auto my-4">
          <Table striped bordered hover responsive className="shadow-sm">
            <thead className="text-center">
              <tr>
                <th>Product Id</th>
                <th>Product Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Update / Delete</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {products?.map((product) => (
                <tr key={product?._id}>
                  <td>{product?._id}</td>
                  <td>{product?.carName}</td>
                  <td>{product?.category}</td>
                  <td>${product?.price}</td>

                  <td>
                    <div className="d-flex justify-content-evenly align-items-center">
                      <FaEdit
                        className={styles.editIcon}
                        onClick={() => handleUpdateProduct(product?._id)}
                      />
                      <AiFillDelete
                        className={styles.deleteIcon}
                        onClick={() => handleDeleteProduct(product?._id)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default ManageProducts;
