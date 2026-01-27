import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhost:8080/api/auth",
});

axiosClient.interceptors.response.use(
    (res) => res,
    (err) => {
        console.error(err);
        throw err;
    }
);

export default axiosClient;

// import axios from "axios";

// const axiosClient = axios.create({
//     baseURL: "http://localhost:8080/api/auth",
//     headers: { "Content-Type": "application/json" },
// });

// export default axiosClient;
