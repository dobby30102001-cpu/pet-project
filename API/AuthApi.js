import axiosClient from "./axiosClient";

export const search = async (params) => {
    const res = await axiosClient.get("/search", { params });
    return res.data;
};

export const getUsers = async (params) => {
    const res = await axiosClient.get("/users", { params });
    return res.data;
};

export const createUser = async (payload) => {
    const res = await axiosClient.post("/users", payload);
    return res.data;
};

export const forgotPassword = async (payload) => {
    const res = await axiosClient.post("/forgot-password", payload);
    return res.data;
};
