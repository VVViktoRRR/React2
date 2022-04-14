import axios from "axios";
import baseURL from "../constans/urls";

export const axiosServices = axios.create({ baseURL });
