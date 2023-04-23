import './UserSignIn.css';
import AuthService from '../services/Auth.server';
import { Button, Box } from '@mui/material';
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
        <div className="container">
            <div className="container-form">
                <img src="https://www.isods.org//images/isods_small_logo.png" alt="Profile Picture" id="profile-picture" />
                <div className="sign-in-header">
                    SIGN IN
                </div>
                <Navbar bg="dark" variant="dark">
                    <Form onSubmit={e => submitLogin(e)}>
                        <div className="email-field">
                            <Box sx={{
                                borderRadius: 1,
                                padding: '2px 6px',
                                boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
                                width: '100%',
                            }}>
                                <TextField
                                    id="email"
                                    label="Username/email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    fullWidth
                                    sx={{ '& fieldset': { borderColor: 'transparent' } }}
                                    underline={false}
                                />
                            </Box>
                        </div>
                        <Box sx={{
                            borderRadius: 1,
                            padding: '2px 6px',
                            boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
                            marginTop: '1rem',
                        }}>
                            <TextField
                                id="password"
                                label="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                                fullWidth
                                sx={{ '& fieldset': { borderColor: 'transparent' } }}
                                underline={false}
                            />
                        </Box>
                        <div className='sign-in-button'>
                            <Button variant="contained" type="submit">
                                Submit
                            </Button>
                        </div>
                        {message && (
                            <p className="error"> {message} </p>
                        )}
                        <div className='forgot-username-password'>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="./forgot" variant="body2">
                                        Forgot Username / Password?
                                    </Link>
                                    <br></br>
                                    <Link href="./signup" variant="body2">
                                        Sign-Up
                                    </Link>
                                </Grid>
                            </Grid>
                        </div>
                    </Form>
                </Navbar>
            </div>
            <div className="goback-button">
                <a href="/"> « BACK</a>
            </div>
        </div>
    );
}


export default UserSignIn;
