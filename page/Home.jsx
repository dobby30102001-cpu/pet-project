
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Table, Pagination, InputGroup, Form } from "react-bootstrap";

import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import EditModal from "../components/EditModal";
import * as API from "../API/Home";
import "../style/home.css";
import moment from 'moment';
import Add from "../components/Add";

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active}>
            {number}
        </Pagination.Item>,
    );
}





export default function Home() {
    const navigate = useNavigate();
    const [showEdit, setShowEdit] = useState(false);
    // const [showAlert, setShowAlert] = useState(false);
    const [list, setList] = useState([]);
    // const [check, setCheck] = useState(false);
    const [paging, setPaging] = useState({
        page: 1,
        limit: 10,
    });

    const [accountSelected, setAccountSelected] = useState({});

    // const [load, setLoad] = useState(false);


    const [openCreate, setOpenCreate] = useState(false)

    const [termsearch, setTermsearch] = useState('')
    const [search, setSearch] = useState('')





    const handleView = (userID) => navigate(`/${userID}`);

    const handleDelete = async (userID) => {
        await API.DeleteUser(userID);
        // setCheck(true);
    }

    const handleEdit = async (userID) => {
        // const item = list.find((i) => i.id === userID)
        const item = await API.DetailUser(userID);
        setAccountSelected(item)
        setShowEdit(true)


    }

    const handleClickPage = (page) => {
        setPaging((prev) => {
            return {
                ...prev,
                page: page
            }
        })
    }



    const [total, setTotal] = useState(0);

    const handleClose = () => {
        setShowEdit(false)
        setAccountSelected({})
        setPaging((prev) => {
            return {
                ...prev,
                page: 1
            }
        })

    }


    const handleChangeSearch = (e) => {
        setTermsearch(e.target.value)
    }

    const [reload, setReload] = useState(0);

    const handleSaveCreate = () => {
        setOpenCreate(false);
        setPaging((prev) => {
            return {
                ...prev,
                page: 1
            }
        })
        setReload((r) => r + 1);
    }


    useEffect(() => {
        async function fetchData() {
            const response = await API.getDataUser(paging.page, paging.limit, search);
            console.log("API raw:", response);
            console.log("API data:", response?.data);
            setList(response.data.data.content ?? []);
            setTotal(response.data.data.totalElements ?? 0);
        }
        fetchData();
    }, [paging, search, reload]);


    const handleCreate = () => { setOpenCreate(true) }

    const handleSearch = () => {
        setSearch(termsearch)
    }

    const handleCloseCreate = () => {
        setOpenCreate(false);
    };





    console.log("list =", list);
    console.log("isArray =", Array.isArray(list));


    return (
        <Container className="home-wrap">
            {/* Header */}
            <Stack direction="horizontal" className="home-header" gap={2}>
                <h4 className="mb-0">User List</h4>

                <Button className="ms-auto" onClick={handleCreate}>
                    Create
                </Button>
            </Stack>


            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">First Name</InputGroup.Text>
                <Form.Control
                    placeholder="First Name"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={handleChangeSearch}
                />
                <Button variant="outline-secondary" onClick={handleSearch} >Search</Button>
            </InputGroup>

            {/* Table */}
            <div className="home-table-card">
                <Table striped hover className="align-middle mb-0">
                    <thead>
                        <tr>
                            <th style={{ background: "red", width: 80 }}>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Created At</th>
                            <th>Action</th>

                        </tr>
                    </thead>

                    <tbody>
                        {
                            list && list.length > 0 && list.map((item) => (
                                <tr key={item.id} >
                                    <td>{item.id}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.address}</td>
                                    <td>{moment(item.createdAt).format("YYYY-MM-DD")}</td>
                                    <td>

                                        <ButtonGroup size="sm">
                                            <Button variant="info" onClick={() => handleView(item.id)}>
                                                View
                                            </Button>
                                            <Button
                                                variant="warning"
                                                onClick={() => handleEdit(item.id)}
                                            >
                                                Edit
                                            </Button>
                                            <Button
                                                variant="danger"
                                                onClick={() => handleDelete(item.id)}
                                            >
                                                Delete
                                            </Button>
                                        </ButtonGroup>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </Table>
            </div>
            <Pagination>
                {Array.from({ length: Math.ceil(total / paging.limit) }, (_, i) => {
                    const number = i + 1;
                    console.log("list =", list);
                    console.log("isArray =", Array.isArray(list));

                    return (
                        <Pagination.Item
                            key={number}
                            active={number === paging.page}
                            onClick={() => handleClickPage(number)}
                        >
                            {number}
                        </Pagination.Item>
                    );
                })}
            </Pagination>

            {/* Modals */}
            {/* <AlertModal isAlert={showAlert} handleCloseAlert={() => setShowAlert(false)} /> */}
            <EditModal
                show={showEdit}
                handleClose={handleClose}
                accountSelected={accountSelected}
            />

            {openCreate && <Add
                show={openCreate}
                handleClose={handleCloseCreate}
                handleSaveCreate={handleSaveCreate} />}




        </Container>
    );
}

