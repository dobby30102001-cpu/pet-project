import { useState } from "react"
import CreateCommon from "./groupforms/CreateCommon";
import EditCommon from "./groupforms/EditCommon";
import AddCommon from "./groupforms/AddCommon";


export default function GroupCommon(props) {

    const [createModal, setCreateModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [addModal, setAddModal] = useState(false);

    const handleCreate = () => {
        setCreateModal(true);
    }

    const handleEdit = () => {
        setEditModal(true);
    }

    const handleAdd = () => {
        setAddModal(true);
    }

    const handleClose = () => {
        setCreateModal(false);
        setEditModal(false);
        setAddModal(false);
    }

    return (
        <div className="group-container">
            <div className="search">
                <input type="text" className="search-input" placeholder="Search by name" name={props.input} onChange={props.handleInput} />
                <button className="search-btn" onClick={props.handleSearch}>Search</button>
                <button className="create-btn" onClick={handleCreate}>Create New</button>
            </div>

            <CreateCommon show={createModal} handleClose={handleClose} />
            <EditCommon show={editModal} handleClose={handleClose} />
            <AddCommon show={addModal} handleClose={handleClose} />

            <div className="table-container">
                <table className="table-content">
                    <thead className="table-head">
                        <tr>
                            <th><input type="checkbox" /></th>
                            <th>Group Name</th>
                            <th>Member</th>
                            <th>Type</th>
                            <th>Creator</th>
                            <th>Create date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        {
                            props.items.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td><input type="checkbox" /></td>
                                        <td>{item.groupName}</td>
                                        <td>{item.member}</td>
                                        <td>{item.type}</td>
                                        <td>{item.creator}</td>
                                        <td>{item.createDate}</td>
                                        <td>
                                            <div className="actions">
                                                <button className="add" onClick={handleAdd}>➕</button>
                                                <button className="update" onClick={handleEdit}>✏️</button>
                                                <button className="delete" onClick={() => props.handleDelete(index)}>❌</button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className="pagination-wrapper">
                <div className="pagination">
                    <button className="page-btn">⬅️</button>
                    <button className="page-btn active">1</button>
                    <button className="page-btn">2</button>
                    <button className="page-btn">3</button>
                    <button className="page-btn">➡️</button>
                </div>
            </div>
        </div>
    )
};
