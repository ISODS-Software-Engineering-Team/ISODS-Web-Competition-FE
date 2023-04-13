import './UserSignIn.css';
import authService from '../services/Auth.server';
import { Button, Box } from '@mui/material';
import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import TextField from '@mui/material/TextField';

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);
        authService.requestEmail(email)
        .catch(() => {
            setMessage('If you have an account with us, a link to reset your password will be sent to your email.');
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
                                        sx={{ '& fieldset': { borderColor: 'transparent' } }}
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
