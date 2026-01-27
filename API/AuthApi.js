
import axios from "axios";

const BASE_URL = "http://localhost:8080/api/auth";

const AuthApi = {
    search: (params) => {
        return axios.get(`${BASE_URL}/search`, { params })
            .then(res => res.data);
    }
};

export default AuthApi;
