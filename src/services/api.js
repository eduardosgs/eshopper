import axios from "axios";

const api = axios.create({
  baseURL: "http://api.prodatta.com/api",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "X-Custom-Header": "foobar",
    "X-Requested-With": "XMLHttpRequest",
    Authorization: "Bearer "
  }
});

export default api;
