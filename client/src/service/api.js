import axios from "axios";

const api = axios.create({
  baseURL: "https://guess-the-number-production-2b4b.up.railway.app/",
});

export default api;
