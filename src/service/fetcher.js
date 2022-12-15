import axios from "axios";

const apiUrl = "/data.json";

export const getProducts = () => {
    const res = axios(apiUrl);
    return res;
  };