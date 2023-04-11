import axios from 'axios';
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const API_URL_USERS = "http://localhost:8000/auth/users";
const API_URL_LOGIN =  "http://localhost:8000/auth/jwt"

// const login takes 2 arguments: email and password.
// using axios for communication between FE and BE
const login = (email, password) =>{
    return axios.post(API_URL_LOGIN + "/create", {
        email,
        password,
    }).then(response => {
        if(response.data.access_token){ // this will return access_token (response from BE)
            // using local Storage to store info of user such as access_token as value and key as "user"
            localStorage.setItem("User", JSON.stringify(response.data.access_token));
        }
        return response.data;
    })
}

const requestEmail = (email) => {
    return axios.get(API_URL_USERS + "/reset_password/",
    {
        email: email,
    })
}

const logout = () => {
    localStorage.removeItem("User");
}

const authService = {
    login,
    requestEmail,
    logout,
};

export default authService;