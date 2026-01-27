import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function CreateCommon(props) {
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create New Group</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form.Group className="mb-3">
                    <Form.Label>Group Name</Form.Label>
                    <Form.Control type="text" placeholder="Group name" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Type</Form.Label>
                    <Form.Select>
                        <option value="">Select type</option>
                        <option value="Employee">Employee</option>
                        <option value="Admin">Admin</option>
                        <option value="PM">PM</option>
                    </Form.Select>
                </Form.Group>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="primary">
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
