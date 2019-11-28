import axios from 'axios';


const api = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-Custom-Header': 'foobar',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': 'Bearer '
    }
});






export default api;