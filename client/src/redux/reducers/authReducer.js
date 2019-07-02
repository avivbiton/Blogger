import { SET_AUTH_KEY } from "../actionTypes";

const initState = {
    authAttempt: false,
    authKey: ""
};

export default function (state = initState, action) {

    switch (action.type) {
        case SET_AUTH_KEY:
            return {
               authAttempt: true,
               authKey: action.payload
            }
        default:
            return state;
    }
}
