import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const API_URL_USERS = "http://localhost:8000/auth/users";
const API_URL_LOGIN =  "http://localhost:8000/auth/jwt";

const login = (email, password) => {
    return axios.post(`${API_URL_LOGIN}/create`, {
        email,
        password,
    }).then(response => {
        if (response.data.access_token) {
            localStorage.setItem("User", JSON.stringify(response.data.access_token));
        }
        return response.data;
    })
}

const requestEmail = (email) => {
    return axios.post(`${API_URL_USERS}/reset_password/`, {
      email: email,
    });
};  

const logout = () => {
    localStorage.removeItem("User");
}

const resetPasswordConfirm = (uid, token, new_password, re_new_password) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({uid, token, new_password, re_new_password});
    return axios.post(`${API_URL_USERS}/reset_password_confirm/`, body, config);
}

const activateAccount = (uid, token) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({uid, token});
    return axios.post(`${API_URL_USERS}/activation/`, body, config);
}

const authService = {
    login,
    requestEmail,
    logout,
    resetPasswordConfirm,
    activateAccount,
};

export default authService;
