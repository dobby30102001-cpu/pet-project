import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function AlertModal({ isAlert, handleCloseAlert }) {
    return (
        <Modal show={isAlert} onHide={handleCloseAlert} centered>
            <Modal.Header closeButton>
                <Modal.Title>Confirm delete</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                Are you sure you want to delete this item?
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseAlert}>
                    Cancel
                </Button>
                <Button
                    variant="danger"
                    onClick={() => {
                        // TODO: call delete API here
                        handleCloseAlert();
                    }}
                >
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
