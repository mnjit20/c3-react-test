import axios from 'axios';
import { BASE_URL } from '../../config';

//custom configured http instance for ease of use
const http_api = axios.create({
    baseURL: BASE_URL
});


http_api.interceptors.request.use(
    response => response.data,
    error => Promise.reject(error)
);

export default http_api;