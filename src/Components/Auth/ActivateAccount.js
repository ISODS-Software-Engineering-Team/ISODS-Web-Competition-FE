import './UserSignIn.css';
import AuthService from '../services/Auth.server';
import { Button, Box } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

function ActivateAccount() {
  let navigate = useNavigate();
  let { uid, token } = useParams();

  const [currentUser, setCurrentUser] = useState();
  const [message, setMessage] = useState('');

  const activateAccount = async () => {
    try {
      await AuthService.activate(uid, token);
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
            <Box
              sx={{
                borderRadius: 1,
                padding: '2px 6px',
                boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
                width: '100%',
              }}
            >
              <TextField
                id='uid'
                label='User ID'
                value={uid}
                fullWidth
                sx={{ '& fieldset': { borderColor: 'transparent' } }}
                underline={false}
                disabled
              />
            </Box>
            <Box
              sx={{
                borderRadius: 1,
                padding: '2px 6px',
                boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
                marginTop: '1rem',
              }}
            >
              <TextField
                id='token'
                label='Token'
                value={token}
                fullWidth
                sx={{ '& fieldset': { borderColor: 'transparent' } }}
                underline={false}
                disabled
              />
            </Box>
            <div className='activate-button'>
              <Button variant='contained' type='submit' onClick={activateAccount}>
                Activate
              </Button>
            </div>
            {message && <p className='error'>{message}</p>}
            <div className='back-to-login'>
              <Grid container>
                <Grid item xs>
                  <Link href='./signin' variant='body2'>
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
