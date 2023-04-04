import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './SignIn.css';
import { CssBaseline, Button } from '@mui/material';
import { red, pink } from '@mui/material/colors';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

function SignIn() {
    const color = red[400]

    return (

        <div>
            <div class='goback-button'>
                <Link href="#" variant="body2">
                    « back
                </Link>
            </div>
            <div class='container-form'>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                    <div class='sign-in-header'> Sign In </div>
                    <TextField
                        id="outlined-disabled"

                        label="Username"
                    />
                    <TextField
                        id="outlined-disabled"
                        label="Password"
                    />
                </Box>
                <div class='sign-in-button'>
                    <Button
                        variant="palette"
                        sx={{ mt: 3, mb: 2 }}
                        palette={{
                            primary: red,
                            secondary: pink
                        }}>
                        Sign In
                    </Button>
                </div>
            </div>
            <div class='forgot-username-password'>
                <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                            Forgot Username / Password?
                        </Link>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default SignIn