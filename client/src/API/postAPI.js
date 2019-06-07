import axios from "axios";

export const fetchPost = async (postId) => {
    return new Promise(function (resolve, reject) {
        axios.get(`/posts/${postId}`)
            .then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error);
            })
    });
};

export const fetchAll = async () => {
    return new Promise(function (resolve, reject) {
        axios.get("/posts")
            .then(response => {
                resolve(response.data);
            }).catch(error => reject(error));
    });
};