import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.100.211:3334'
});

export default api;