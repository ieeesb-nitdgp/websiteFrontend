import axios from "axios";

export default axios.create({
  baseURL: "https://ieeesbnitdgp-api.herokuapp.com/api/",
  headers: {
    "Content-type": "application/json"
  },
  withCredentials: false
});
