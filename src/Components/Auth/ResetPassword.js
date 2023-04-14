import './UserSignIn.css';
import AuthService from '../services/Auth.server';
import { useState } from 'react';
import { Button, Box } from '@mui/material';
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import TextField from '@mui/material/TextField';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;
function ResetPassword() {

    // create const useState for message and new_password
    const [message, setMessage] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [retypeNewPassword, setRetypeNewPassword] = useState('');

    const submitNewPassword = async (e) => {
        e.preventDefault();
        await AuthService.resetPasswordConfirm(newPassword, setNewPassword);
    }

    return (
        <div className="container">
            <div className="container-form">
                <img src="https://www.isods.org//images/isods_small_logo.png" alt="Profile Picture" id="profile-picture" />
                <div className="sign-in-header">
                    Password
                </div>
                <Navbar bg="dark" variant="dark">
                    <Form onSubmit={ e => submitNewPassword(e)}>
                        <div className="email-field">
                            <Box sx={{
                                borderRadius: 1,
                                padding: '2px 6px',
                                boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
                                width: '100%',
                            }}>
                                <TextField
                                    id="new-password"
                                    label="New Passsword"
                                    value={newPassword}
                                    onChange={e => setNewPassword(e.target.vaue)}
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
                                id="re-password"
                                label="Re-type Password"
                                type="password"
                                value={retypeNewPassword}
                                onChange={e => setRetypeNewPassword(e.target.vaue)}
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
