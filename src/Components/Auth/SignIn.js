import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './SignIn.css';
import { Button } from '@mui/material';
import { red, pink } from '@mui/material/colors';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-SCSRFToken';
axios.defaults.withCredentials = true;

// const client = axios.create({
//   baseURL: "http://127.0.0.1:8000"
// });

function UserSignIn() {

    let navigate = useNavigate();
    // const [currentUser, setCurrentUser] = useState();
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        const data = new FormData(event.currentTarget);
        const signIn = await axios.post('http://localhost:8000/api/login', {
            email: data.get('email'),
            password: data.get('password'),
        }).then(function (res) {
            console.log(signIn)
        });

        if (signIn.data === true) {
            return navigate("/");
        } else {
            alert("wrong password");
        }
    }



    return (
        <div>
            <div className="container">
                <h1> ISODS </h1>
            </div>
            <div className='goback-button'>
                <Link href="/" variant="body2">
                    « back
                </Link>
            </div>
            <div className='container-form'>
                <Box component='form' onSubmit={handleSubmit}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                    <div className='sign-in-header'> Sign In </div>
                    <TextField
                        id="email"

                        label="Username/email"
                    />
                    <TextField
                        id="password"
                        label="Password"
                    />
                    <div className='sign-in-button'>
                        <Button
                            type="submit"
                            variant="palette"
                            sx={{ mt: 3, mb: 2 }}
                            palette={{
                                primary: red,
                                secondary: pink
                            }}>
                            Sign In
                        </Button>
                    </div>
                </Box>
                <div className='forgot-username-password'>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot Username / Password?
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </div>

        </div>
    );
}

export default UserSignIn