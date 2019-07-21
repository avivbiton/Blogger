import { SET_POSTS } from "../actionTypes";

export const setPosts = (postsArray) => {

    return {
        type: SET_POSTS,
        payload: postsArray
    }

}