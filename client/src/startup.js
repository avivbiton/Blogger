import { setAuthKey } from "./redux/actions/authActions";
import { applyAuthKey } from "./API/authAPI";
import axios from "axios";


axios.interceptors.request.use(function(config) {
    const key = localStorage.getItem("authKey");
    if(!config.headers["key"] && key !== null) {
        config.headers["key"] = key;
    }

    return config;
});

export default function onStartup(reduxStore) {

    const key = localStorage.getItem("authKey");
    if(key !== null) {
        reduxStore.dispatch(setAuthKey(key));
        applyAuthKey(key);
    }

}