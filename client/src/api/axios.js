import axios from "axios";

const port = process.env.PORT || 8080;

export default axios.create({
  baseURL: "https://library-management-plum.vercel.app/api",
  //   baseURL: port,

  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});
