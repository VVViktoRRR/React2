import {axiosServices} from "./axios.services";
import {urls} from "../constans";

export const userServices  = {
  getAll:() => axiosServices.get(urls.users)
}
