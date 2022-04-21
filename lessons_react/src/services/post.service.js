import {axiosService} from "./axios.service";
import {urls} from "../constatns";

const postService = {
    getAllPosts:() => axiosService.get(urls.posts),
    getPostById:(id) => axiosService.get(`${urls.posts}/${id}`),
    getByPostComments:(id) => axiosService.get(`${urls.posts}/${id}/comments`),
}
export {postService}