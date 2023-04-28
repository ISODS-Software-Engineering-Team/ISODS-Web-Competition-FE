import './UserSignIn.css';
import AuthService from '../services/Auth.server';
import { useState } from 'react';
import { Button, Box } from '@mui/material';
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import TextField from '@mui/material/TextField';
import { useParams, useNavigate } from 'react-router-dom';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;
function ResetPassword() {

    let navigate = useNavigate();
    // create const useState for message and new_password
    const [message, setMessage] = useState('');
    const [new_password, setNewPassword] = useState('');
    const [retypeNewPassword, setRetypeNewPassword] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const { uid, token } = useParams();

    const submitNewPassword = (e) => {
        e.preventDefault();
            setSubmitting(true);
            AuthService.resetPasswordConfirm(uid, token, new_password, retypeNewPassword)
            .then(() => {
                // this does not reached
                setMessage('Password has been changed! Please log-in with new password');
                setSubmitting(false);
            }).then(() => {
                // so far after reset, it will return to sign in page.
                navigate('/signin')
            })
        }
    
    return (
        <div className="auth-container">
            <div className="container-form">
                <img src="https://www.isods.org//images/isods_small_logo.png" alt="Profile Picture" id="profile-picture" />
                <div className="sign-in-header">
                    Password
                </div>
                <Navbar bg="dark" variant="dark">
                    <Form onSubmit={e => submitNewPassword(e)}>
                        <div className="email-field">
                            <Box sx={{
                                borderRadius: 1,
                                padding: '2px 6px',
                                boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
                                width: '100%',
                            }}>
                                <TextField
                                    id="new_password"
                                    label="New Passsword"
                                    type="password"
                                    value={new_password}
                                    onChange={e => setNewPassword(e.target.value)}
                                    fullWidth
                                    sx={{ '& fieldset': { borderColor: 'transparent' } }}
                                // underline={false}
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
                                id="re_new_password"
                                label="Re-type Password"
                                type="password"
                                value={retypeNewPassword}
                                onChange={e => setRetypeNewPassword(e.target.value)}
                                fullWidth
                                sx={{ '& fieldset': { borderColor: 'transparent' } }}
                            // underline={false}
                            />
                        </Box>
                        <div className='sign-in-button'>
                            <Button variant="contained" type="submit">
                                Submit
                            </Button>
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

export default ResetPassword;
