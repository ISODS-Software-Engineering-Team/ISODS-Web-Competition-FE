import './UserSignIn.css';
import AuthService from '../services/Auth.server';
import { Button, Box } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Form from 'react-bootstrap/Form';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

function ActivateAccount() {
    const navigate = useNavigate();
    const { uid, token } = useParams();

    const [currentUser, setCurrentUser] = useState();
    const [message, setMessage] = useState('');

    const activateAccount = async () => {
        try {
            await AuthService.activateUser(uid, token);
            setCurrentUser(true);
        } catch (e) {
            setMessage('Activation failed!');
        }
    };

    if (currentUser) {
        navigate('/');
        window.location.reload();
    }

    return (
        <div className='container'>
            <div className='container-form'>
                <img src='https://www.isods.org//images/isods_small_logo.png' alt='Profile Picture' id='profile-picture' />
                <div className='sign-in-header'>ACTIVATE ACCOUNT</div>
                <Navbar bg='dark' variant='dark'>
                    <Form>
                        <div className='activate-link'>
                            <Link component="button" variant="body2" onClick={activateAccount}>
                                Click here to activate your account
                            </Link>
                        </div>
                        {message && <p className='error'>{message}</p>}
                        <div className='back-to-login'>
                            <Grid container>
                                <Grid item xs>
                                    <Link href='/signin' variant='body2'>
                                        Back to login
                                    </Link>
                                </Grid>
                            </Grid>
                        </div>
                    </Form>
                </Navbar>
            </div>
            <div className='goback-button'>
                <a href='/'> « BACK</a>
            </div>
        </div>
    );
}

export default ActivateAccount;
