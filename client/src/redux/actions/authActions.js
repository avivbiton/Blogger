import { SET_AUTH_KEY } from "../actionTypes";

export const setAuthKey = (key) => {
    return {
        type: SET_AUTH_KEY,
        payload: key
    }
}