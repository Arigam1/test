import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
});

export const postsAPI = {
    getPosts() {
        return instance.get(`posts`);
    },

    fetchPost(id) {
        return instance.get(`posts/${id}`)
    },

    delete(id) {
        return instance.delete(`posts/${id}`)
    },

};
