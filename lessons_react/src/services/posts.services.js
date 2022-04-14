import {axiosServices} from "./axios.services";
import {urls} from "../constans";

export const postsServices = {
    getPostsById:(postId) => axiosServices.get(`${urls.posts}?userId=${postId}`)
}
