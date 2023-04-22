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

function UserSignUp() {
    // useNavigate() to redirect when user logged in
    let navigate = useNavigate();
    // a bunch of useState() for user to logged in.
    const [currentUser, setCurrentUser] = useState();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [message, setMessage] = useState('');

    const submitSignUp = async (e) => {
        e.preventDefault();
        if (password !== password2) {
            setMessage('Passwords do not match');
            return;
        } else if (password.length < 8 || !/\W/.test(password)) {
            setMessage('Password should have a minimum of 8 characters and at least one special symbol.');
            return;
        }
        try {
            await AuthService.signup(firstName, lastName, email, username, password);
            setCurrentUser(true);
        } catch (e) {
            if (e.response && e.response.status === 400) {
                setMessage('Account already exists');
            } else {
                setMessage('Failed to sign up');
            }
        }
        if (currentUser) {
            navigate('/');
            window.location.reload();
        }
    };

    return (
        <div className="container">
            <div className="container-form">
                <img src="https://www.isods.org//images/isods_small_logo.png" alt="Profile Picture" id="profile-picture" />
                <div className="sign-in-header">
                    SIGN UP
                </div>
                <Navbar bg="dark" variant="dark">
                    <Form onSubmit={submitSignUp}>
                        <div className="name-fields">
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Box sx={{
                                        borderRadius: 1,
                                        padding: '2px 6px',
                                        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
                                        marginTop: '1rem',
                                    }}>
                                        <TextField
                                            autoComplete="fname"
                                            name="firstName"
                                            required
                                            fullWidth
                                            id="firstName"
                                            label="First Name"
                                            value={firstName}
                                            onChange={e => setFirstName(e.target.value)}
                                            sx={{ '& fieldset': { borderColor: 'transparent' } }}
                                            autoFocus
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Box sx={{
                                        borderRadius: 1,
                                        padding: '2px 6px',
                                        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
                                        marginTop: '1rem',
                                    }}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="lastName"
                                            label="Last Name"
                                            name="lastName"
                                            autoComplete="lname"
                                            value={lastName}
                                            sx={{ '& fieldset': { borderColor: 'transparent' } }}
                                            onChange={e => setLastName(e.target.value)}
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                        </div>
                        <div className="email-field">
                            <Box sx={{
                                borderRadius: 1,
                                padding: '2px 6px',
                                boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
                                marginTop: '1rem',
                            }}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    sx={{ '& fieldset': { borderColor: 'transparent' } }}
                                    underline={false}
                                />
                            </Box>
                        </div>
                        <div className="username-field">
                            <Box sx={{
                                borderRadius: 1,
                                padding: '2px 6px',
                                boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
                                marginTop: '1rem',
                            }}>
                                <TextField
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    name="username"
                                    autoComplete="username"
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                    sx={{ '& fieldset': { borderColor: 'transparent' } }}
                                    underline={false}
                                />
                            </Box>
                        </div>
                        <div className="password-fields">
                            <Box sx={{
                                borderRadius: 1,
                                padding: '2px 6px',
                                boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
                                marginTop: '1rem',
                            }}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    value={password}
                                    sx={{ '& fieldset': { borderColor: 'transparent' } }}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </Box>

                            <Box sx={{
                                borderRadius: 1,
                                padding: '2px 6px',
                                boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
                                marginTop: '1rem',
                            }}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password2"
                                    label="Re-type Password"
                                    type="password"
                                    id="password2"
                                    value={password2}
                                    sx={{ '& fieldset': { borderColor: 'transparent' } }}
                                    onChange={e => setPassword2(e.target.value)}
                                />
                            </Box>
                        </div>
                        <div className='sign-up-button'>
                            <Button variant="contained" type="submit">
                                Sign Up
                            </Button>
                            <br></br>
                            {message && <span style={{ color: 'red' }}>{message}</span>}
                        </div>
                        <div className="already-have-account">
                            <Grid container className="link-container">
                                <Grid item>
                                    <Link href="./signin" variant="body2">
                                        Already have an account? Sign in
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

export default UserSignUp;

