import axios from "axios";

const port = process.env.PORT || 8080;

export default axios.create({
  // baseURL: "https://library-management-fawn.vercel.app/api",
  baseURL: "https://backend-orvm.onrender.com/api",
  //   baseURL: port,

  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});
