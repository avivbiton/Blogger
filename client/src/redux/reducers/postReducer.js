import { SET_POSTS } from "../actionTypes";

const initState = {
    posts: []
};

export default function (state = initState, action) {

    switch (action.type) {
        case SET_POSTS:
            return {
                posts: action.payload
            }
        default:
            return state;
    }
}