import axios from "axios";

export const applyAuthKey = (key) => {
    localStorage.setItem("authKey", key);
    axios.defaults.headers.common["key"] = key;
}

export const validateAuth = async () => {
    try {
        await axios.get("/auth/validate");
        return true;
    } catch (error) {
        return false;
    }
}

