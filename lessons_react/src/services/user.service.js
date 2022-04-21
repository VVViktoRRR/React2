import {axiosService} from "./axios.service";
import {urls} from "../constatns";

const userService = {
    getAllUsers:() => axiosService.get(urls.users),
    getUser:(id) => axiosService.get(`${urls.users}/${id}`),
    getByUserPosts:(id) => axiosService.get(`${urls.users}/${id}/posts`),
}

export {userService}