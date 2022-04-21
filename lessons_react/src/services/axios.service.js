import axios from "axios";
import baseURL from "../constatns/urls";

const axiosService = axios.create({baseURL});

export {axiosService};
