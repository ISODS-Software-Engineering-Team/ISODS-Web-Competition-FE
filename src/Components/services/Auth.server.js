import axios from 'axios';

const API_URL = "http://localhost:8000/api";


// const login takes 2 arguments: email and password.
// using axios for communication between FE and BE
const login = (email, password) =>{
    return axios.post(API_URL + "/login", {
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


const authService = {
    login,
};

export default authService;