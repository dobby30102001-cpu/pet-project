// import axios from "axios";

// const axiosClient = axios.create({
//     baseURL: "http://localhost:8080/api/auth",
// });

// axiosClient.interceptors.response.use(
//     (res) => res,
//     (err) => {
//         console.error(err);
//         throw err;
//     }
// );

// export default axiosClient;

import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhost:8080/api/",
    headers: { "Content-Type": "application/json" },
});


axiosClient.interceptors.request.use(
    (config) => {
        const token =
            localStorage.getItem("token") ||
            localStorage.getItem("accessToken") ||
            sessionStorage.getItem("token") ||
            sessionStorage.getItem("accessToken");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
    (res) => res,
    (err) => {
        console.error("AXIOS ERROR:", err?.response?.status, err?.response?.data);
        return Promise.reject(err);
    }
);

export default axiosClient;