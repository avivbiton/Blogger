import axios from "axios";

export const applyAuthKey = (key) => {
    localStorage.setItem("authKey", key);
    axios.defaults.headers.common["key"] = key;
}



