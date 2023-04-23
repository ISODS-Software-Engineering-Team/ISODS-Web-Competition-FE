import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const API_URL_USERS = "http://localhost:8000/auth/users";
const API_URL_LOGIN = "http://localhost:8000/auth/jwt";

const login = (email, password) => {
    return axios.post(`${API_URL_LOGIN}/create`, {
        email,
        password,
    }).then(response => {
        if (response.data.access_token) {
            localStorage.setItem("User", JSON.stringify(response.data.access_token));
        }
        return response.data;
    });
};

const requestEmail = (email) => {
    return axios.post(`${API_URL_USERS}/reset_password/`, {
        email: email,
    });
};

const logout = () => {
    localStorage.removeItem("User");
};

const resetPasswordConfirm = (uid, token, new_password, re_new_password) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({ uid, token, new_password, re_new_password });
    return axios.post(`${API_URL_USERS}/reset_password_confirm/`, body, config);
};

const signup = (firstName, lastName, email, username, password) => {
    return axios.post(`${API_URL_USERS}/`, {
        first_name: firstName,
        last_name: lastName,
        email,
        username,
        password,
        re_password: password,
    })
    .then(response => {
        if (response.status === 201) {
            console.log('Please check your email for activation link!');
            // Or call a setMessage function here to display the message
        }
        return response.data;
    })
    .catch(error => {
        console.error('Error signing up:', error);
        // Or call a setMessage function here to display the error message
        throw error;
    });
};

const authService = {
    login,
    requestEmail,
    logout,
    resetPasswordConfirm,
    signup,
};

export default authService;
