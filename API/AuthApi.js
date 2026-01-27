
import axios from "axios";

const BASE_URL = "http://localhost:8080/api/auth";

const AuthApi = {
    search: (params) => {
        return axios.get(`${BASE_URL}/search`, { params })
            .then(res => res.data);
    }
};

export default AuthApi;

// import axiosClient from "./axiosClient";
// import { toast } from "react-toastify";

// export const forgotPassword = async (payload) => {
//     try {
//         const res = await axiosClient.post("/forgot-password", payload);
//         return res.data;
//     } catch (err) {
//         toast.error("forgot-password error");
//         throw err;
//     }
// };

// export const searchAuth = async (params) => {
//     try {
//         const res = await axiosClient.get("/search", { params }); // params = { ... }
//         return res.data;
//     } catch (err) {
//         toast.error("search error");
//         throw err;
//     }
// };

// export const getUsers = async (params) => {
//     try {
//         const res = await axiosClient.get("/users", { params }); // params: page, limit, search...
//         return res.data;
//     } catch (err) {
//         toast.error("get users error");
//         throw err;
//     }
// };

// export const createUser = async (payload) => {
//     try {
//         const res = await axiosClient.post("/users", payload);
//         return res.data;
//     } catch (err) {
//         toast.error("create user error");
//         throw err;
//     }
// };
