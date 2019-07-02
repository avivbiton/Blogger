import { setAuthKey } from "./redux/actions/authActions";
import { applyAuthKey } from "./API/authAPI";

export default function onStartup(reduxStore) {

    const key = localStorage.getItem("authKey");
    if(key !== null) {
        reduxStore.dispatch(setAuthKey(key));
        applyAuthKey(key);
    }

}