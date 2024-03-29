import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import styles from "./AddAdmin.module.css";

const AddAdmin = () => {
  const [email, setEmail] = useState("");

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const successNotify = () => {
    toast.success("Admin created successfully!!", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  const errorNotify = () => {
    toast.error("Admin can not created or already an admin", {
      position: "top-center",
      autoClose: 3000,
    });
  };

  const handleSubmitAdmin = (e) => {
    const user = { email };
    e.preventDefault();
    fetch("https://drive-and-drive-server.vercel.app/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("idToken")}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          successNotify();
        } else {
          errorNotify();
        }
        e.target.reset();
      });
  };

  return (
    <div>
      <Container>
        <h2 className="text-center mx-auto title py-5">Add New Admin</h2>
        <div className={`rounded-3 mx-auto my-4 p-3 ${styles.addAdminSection}`}>
          <Form onSubmit={handleSubmitAdmin}>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onBlur={handleOnBlur}
                type="email"
                name="email"
                placeholder="New Admin email"
                required
              />
            </Form.Group>
            <Button
              className={` mt-3 border-0 fw-bold px-3 w-50 mx-auto  d-flex justify-content-center align-items-center ${styles.myButton}`}
              variant="dark"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default AddAdmin;
