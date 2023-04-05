import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './SignIn.css';
import { Button } from '@mui/material';
import { red, pink } from '@mui/material/colors';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import {useState } from 'react'; 
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://localhost:8000"
});

function UserSignIn() {
    let navigate = useNavigate();
    const [currentUser, setCurrentUser ] = useState();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    function submitLogin(e){
        e.preventDefault();
        client.post(
            "/api/login",
            {
                email:email,
                password: password
            }
        ).then(function(res){
            console.log(setCurrentUser);
            setCurrentUser(true);
        });
    }


    if(currentUser){
        navigate('/')
    }
    return (
        <div className="center">
        <Form onSubmit={e => submitLogin(e)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>

    );
}

export default UserSignIn