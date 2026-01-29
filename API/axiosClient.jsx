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

axiosClient.interceptors.response.use(
    (res) => res,
    (err) => {
        // giữ log để debug
        console.error("AXIOS ERROR:", err?.response?.status, err?.response?.data);
        return Promise.reject(err);
    }
);

export default axiosClient;
console.log("USING apiClient baseURL =", "http://localhost:8080/api");