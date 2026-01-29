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


import axiosClient from "./axiosClient";
import { toast } from "react-toastify";

// GET /users?page=&limit=&search=
export async function getDataUser(page, limit, search) {
    const params = {
        page: page - 1,     // UI 1-> backend 0
        size: limit,        // limit -> size
    };

    if (search) params.search = search;

    return axiosClient.get("/users", { params });
}

export async function DeleteUser(userID) {
    try {
        const res = await axiosClient.delete(`/users/${userID}`);
        toast("Delete user successfully!");
        return res.data;
    } catch (e) {
        toast("API Error: Unable to delete user.");
        throw e;
    }
}

export async function UpdateAccounte(userID, data) {
    try {
        const res = await axiosClient.put(`/users/${userID}`, data);
        toast("Update user successfully!");
        return res.data;
    } catch (e) {
        toast("API Error: Unable to update user.");
        throw e;
    }
}

export async function DetailUser(userID) {
    try {
        const res = await axiosClient.get(`/users/${userID}`);
        return res.data;
    } catch (e) {
        toast("API Error: Unable to fetch user detail.");
        throw e;
    }
}


