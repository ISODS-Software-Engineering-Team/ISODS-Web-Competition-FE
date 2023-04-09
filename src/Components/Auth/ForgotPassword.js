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

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);
        axios.get('/resetpassword', {
            params: {
                email: email
            }
        })
        .then(() => {
            setMessage('Email sent successfully.');
            setSubmitting(false);
        })
        .catch(() => {
            setMessage('Email not found.');
            setSubmitting(false);
        })
    };

    return (
        <div>
            <div className="container">
                <div className="container-form">
                    <img src="https://www.isods.org//images/isods_small_logo.png" alt="Profile Picture" id="profile-picture" />
                    <div className="sign-in-header">
                        RESET PASSWORD
                    </div>
                    <Navbar bg="dark" variant="dark">
                        <Form onSubmit={handleSubmit}>
                            <Box sx={{
                                borderRadius: 1,
                                padding: '2px 6px',
                                boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
                                width: '100%',
                            }}>
                                <div className="email-field">
                                    <TextField
                                        id="email"
                                        label="Username/email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        required
                                        fullWidth
                                        sx={{ '& fieldset': { borderColor: 'transparent' }}}
                                        underline={false}
                                    />
                                </div>
                            </Box>
                            <div className='sign-in-button'>
                                <Button variant="primary" type="submit" disabled={submitting}>
                                    Submit
                                </Button>
                            </div>
                            {message && (
                                <p className={message === 'Email sent successfully.' ? 'success' : 'error'}>{message}</p>
                            )}
                        </Form>
                    </Navbar>
                </div>
                <div className="goback-button">
                    <a href="/signin"> « BACK</a>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
