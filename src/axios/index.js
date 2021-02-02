import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/api",
});

export default instance;

//  baseURL: "https://amazon-clone-1hw11lvg9.vercel.app/api",
