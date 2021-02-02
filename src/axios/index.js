import axios from "axios";

const instance = axios.create({
  baseURL: "https://amazon-clone-1hw11lvg9.vercel.app/api",
});

export default instance;
//baseURL: "http://localhost:3000/api/",
