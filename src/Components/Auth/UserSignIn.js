import './UserSignIn.css';
import AuthService from '../services/Auth.server';
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


function UserSignIn() {
    // useNavigate() to redirect when user logged in
    let navigate = useNavigate();
    // a bunch of useState() for user to logged in.
    const [currentUser, setCurrentUser] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    
    const submitLogin = async (e) => {
        e.preventDefault();
        try {
            await AuthService.login(email, password)
                .then(() => {
                    setCurrentUser(true);
                });
        } catch (e) {
            setMessage('Wrong Email or password!')
        }
    }


    if (currentUser) {
        navigate('/');
        window.location.reload();
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
                            {message && (
                                <p className="error"> {message} </p>
                            )}
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