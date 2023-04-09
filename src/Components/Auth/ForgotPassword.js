import './UserSignIn.css';
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

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState('');
  
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
                <h1> ISODS </h1>
            </div>

            <div className="container">
                <div className="goback-button">
                    <a href="/signin"> « back</a>
                </div>
                <div className="container-form">
                    <div className="sign-in-header">
                        Forgot Password
                    </div>
                    <Navbar bg="dark" variant="dark">
                        <Form onSubmit={handleSubmit}>
                            <div className="email-field">
                                <TextField
                                    id="email"
                                    label="Username/email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                    
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
            </div >
        </div >
    );
}

export default ForgotPassword;
