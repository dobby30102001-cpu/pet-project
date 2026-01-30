import { Modal, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { toast } from "react-toastify";
import axiosClient from "../API/axiosClient";





export default function Add(props) {

    const [item, setItem] = useState({
        'userName': '',
        'firstName': '',
        'lastName': '',
        'password': '',
        'role': '',
        'departmentID': ''
    })



    const handChangeInput = (event) => {
        setItem((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }


    const handleSave = async () => {
        try {
            if (!item.firstName || !item.lastName || !item.lastName || !item.role || !item.departmentID) {
                toast.error("First Name và Last Name không được để trống!");
                return;
            }
            console.log("state", item);

            const payload = {
                username: item.userName,
                firstName: item.firstName,
                lastName: item.lastName,
                password: item.password,
                role: item.role,
                departmentId: Number(item.departmentID),
            };

            const res = await axiosClient.post("/users", payload);
            console.log("Add user API:", res);

            toast("Add user successfully!");
            props.handleSaveCreate?.();
            props.handleClose?.();
        } catch (err) {
            console.log(err);
            toast.error("Add failed!");
        }
    };



    const handleCloseModal = () => {
        setItem({
            firstName: '',
            lastName: '',
            address: ''
        })
        props.handleClose();
    }






    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header>
                    <Modal.Title>Edit</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <Form>


                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="User Name"
                                name="userName"
                                value={item.userName}
                                onChange={handChangeInput}
                            />
                        </Form.Group>



                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                                value={item.firstName}
                                onChange={handChangeInput}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                                value={item.lastName}
                                onChange={handChangeInput}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="password"
                                name="password"
                                value={item.password}
                                onChange={handChangeInput}
                            />
                        </Form.Group>




                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Role</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Role"
                                name="role"
                                value={item.role}
                                onChange={handChangeInput}
                            />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>DepartmentID</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="DepartmentID"
                                name="departmentID"
                                value={item.departmentID}
                                onChange={handChangeInput}
                            />
                        </Form.Group>





                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal} >
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


