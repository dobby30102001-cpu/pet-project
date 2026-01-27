// import axios from "axios";
// import { toast } from "react-toastify";
// import axiosClient from "./axiosClient";    

// //noi bo cac ham API de su dung chung

// // const URL = 'https://696e13e5d7bacd2dd715a7ff.mockapi.io/test'


// // eslint-disable-next-line react-refresh/only-export-components
// export async function getDataUser(page, limit, search) {

//     let URLBase = `${URL}?`

//     if (search) {
//         URLBase += `search=${search}&`
//     }

//     if (page && limit) {
//         URLBase += `page=${page}&limit=${limit}`
//     }

//     return axios.get(URLBase)
//         .then((result) => {
//             if (result.status === 200) {
//                 return result
//             }
//         }).catch((error) => {
//             toast("API Error: Unable to fetch user data.");
//         })
// }


// export async function DeleteUser(userID) {

//     return axios.delete(`${URL}/${userID}`)
//         .then((result) => {
//             if (result.status === 200) {
//                 toast("Delete user successfully!");
//             }
//         }).catch((error) => {
//             toast("API Error: Unable to fetch user data.");
//         })

// }

// export async function UpdateAccounte(userID, data) {

//     return axios.put(`${URL}/${userID}`, data)
//         .then((result) => {
//             if (result.status === 200) {
//                 toast("Update user successfully!");
//                 return
//             }
//         }).catch((error) => {
//             toast("API Error: Unable to fetch user data.");
//         })
// }

// export async function DetailUser(userID) {
//     return axios.get(`${URL}/${userID}`).then((row) => {
//         console.log('row', row)
//         if (row.status === 200) {
//             return row.data;
//         }
//     })
// }


import { useEffect, useState } from "react";
import { getUsers } from "../API/AuthApi";

export default function Home() {
    const [list, setList] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [search, setSearch] = useState("");

    const fetchData = async () => {
        const params = { page, limit };
        if (search) params.search = search;

        const data = await getUsers(params);
        setList(data);
    };

    useEffect(() => {
        fetchData();
    }, [page, limit, search]);

    return (
        <div>
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="search..."
            />

            {list?.map((u) => (
                <div key={u.id}>{u.username}</div>
            ))}
        </div>
    );
}

