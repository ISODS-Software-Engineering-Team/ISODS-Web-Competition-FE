import './SignIn.css';
import { Button } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
    baseURL: "http://localhost:8000"
});

function UserSignIn() {
    let navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function submitLogin(e) {
        e.preventDefault();
        
        const response = client.post(
            "/api/login",
            {
                email: email,
                password: password
            }
        ).then(function (res) {
            setCurrentUser(true);
        });
    }


    if (currentUser) {
        navigate('/')
    }
    return (
        <div>
            <div className="container">
                <h1> ISODS </h1>
            </div>

            <div className="container">
                <div className="goback-button">
                    <a href="/"> « back</a>
                </div>
                <div className="container-form">
                    <div className="sign-in-header">
                        Sign In
                    </div>
                    <Navbar bg="dark" variant="dark">
                        <Form onSubmit={e => submitLogin(e)}>
                            <div className="email-field">
                                <TextField
                                    id="email"
                                    label="Username/email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <TextField
                                id="password"
                                label="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                            />
                            <div className='sign-in-button'>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </div>
                            <div className='forgot-username-password'>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot Username / Password?
                                        </Link>
                                    </Grid>
                                </Grid>
                            </div>
                        </Form>
                    </Navbar>
                </div>
            </div >
        </div >
    );
}

export default UserSignIn