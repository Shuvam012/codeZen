import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api", // your backend base URL
  withCredentials: true, // allows sending cookies (JWT)
});

export default API;