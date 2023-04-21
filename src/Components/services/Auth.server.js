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

const signup = (firstName, lastName, email, username, password) => {
    return axios.post(`${API_URL_USERS}/`, {
        first_name: firstName,
        last_name: lastName,
        email,
        username,
        password,
        re_password: password,
    }).then(response => {
        if (response.status === 201) {
            alert("Please check your email for an activation link.");
        }
        if (response.data.access_token) {
            localStorage.setItem("User", JSON.stringify(response.data.access_token));
        }
        return response.data;
    })
}

const authService = {
    login,
    requestEmail,
    logout,
    signup,
};


export default authService;
