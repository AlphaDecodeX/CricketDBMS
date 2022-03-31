import axios from "axios";

const Axios = axios.create({
  baseURL: "http://localhost:5001",
});

export default Axios;
