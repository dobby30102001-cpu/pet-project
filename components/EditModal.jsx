import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import { UpdateAccounte } from "../API/Home";

function EditModal(props) {
    const [item, setItem] = useState({ firstName: "", lastName: "", address: "" })

    useEffect(() => {
        setItem({
            firstName: props.accountSelected.firstName ?? "",
            lastName: props.accountSelected.lastName ?? "",
            address: props.accountSelected.address ?? "",
        })
    }, [props.accountSelected]);



    const handleChangeInput = (event) => {
        setItem((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }



    const handleSave = async () => {
        await UpdateAccounte(props.accountSelected.id, item);
        props.handleClose();
    }

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
            <Modal show={props.show}>
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
                                defaultValue={props.accountSelected.firstName}
                                name='firstName' value={item.firstName ?? ""}
                                onChange={handleChangeInput}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Last Name"
                                defaultValue={props.accountSelected.lastName}
                                name='lastName' value={item.lastName}
                                onChange={handleChangeInput}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Address"
                                defaultValue={props.accountSelected.address}
                                name='address'
                                value={item.address}
                                onChange={handleChangeInput}
                            />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Create At</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Create At" name='createdAt' value={item.createdAt}
                                defaultValue={props.accountSelected.createdAt}
                                onChange={handleChangeInput}
                            />
                        </Form.Group>

                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
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

export default EditModal;
