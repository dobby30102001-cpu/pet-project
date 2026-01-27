import { Modal, Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";





export default function Add(props) {

    const [item, setItem] = useState({
        'firstName': '',
        'lastName': '',
        'address': ''
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
            console.log("state", item);

            await axios.post(
                "https://696e13e5d7bacd2dd715a7ff.mockapi.io/test",
                item
            );

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
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Address"
                                name="address"
                                value={item.address}
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


