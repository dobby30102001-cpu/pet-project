import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function AddCommon(props) {
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add account to Group</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <table className="table table-bordered table-hover align-middle bg-white">
                        <thead className="table-light">
                            <tr>
                                <th>
                                    <input type="checkbox" />
                                </th>
                                <th>Username</th>
                                <th>Full Name</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>Dong Nguyen</td>
                                <td>Nguyễn Văn Dũng</td>
                                <td>Employee</td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>Duy Nguyen</td>
                                <td>Nguyễn Ngọc Duy</td>
                                <td>Manager</td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>Trang Simi</td>
                                <td>Trần Thị Huyền Trang</td>
                                <td>Employee</td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>Huu Tai</td>
                                <td>Pham Huu Tai</td>
                                <td>Employee</td>
                            </tr>
                        </tbody>
                    </table>
                </Form.Group>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={props.handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
