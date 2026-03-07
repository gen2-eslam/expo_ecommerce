import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://10.0.2.2:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
