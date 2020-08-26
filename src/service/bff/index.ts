import axios from 'axios';
import login from './account/login';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'content-type': 'application/json',
    },
});

export default axiosInstance;

export const LoginApi = login(axiosInstance);
