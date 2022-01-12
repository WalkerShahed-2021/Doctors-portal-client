import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Button, Container, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import login from '../../../images/login.png';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';



const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, loginUser, authError, signInWithGoole, isLoading} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
      const filed = e.target.name;
      const value = e.target.value;
     const newLoginData = {...loginData};
     newLoginData[filed] = value;
     setLoginData(newLoginData);
     console.log(newLoginData);
    } 

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGooleSignIn = () => {
        signInWithGoole(history, location);
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{mt:10,}} xs={12} md={6}>
                    <Typography variant="body1">
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{width: '75%', m:1,}}
                            id="standard-basic"
                            label="Your Email"
                            type="email"
                            name="email"
                            onBlur={handleOnChange}
                            variant="standard"
                        /> <br />

                        <TextField
                            sx={{width: '75%', m:1,}}
                            id="standard-password-input"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnChange}
                            autoComplete="current-password"
                            variant="standard"
                        /> <br />
                       <Button type='submit' sx={{width: '75%', m:1,}} variant='contained'>Login</Button>
                        <NavLink style={{textDecoration: 'none'}} to="/register">
                           <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">user login  successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>} 
                    </form>
                    <p>------------Or--------------</p>
                    <Button onClick={handleGooleSignIn} variant="contained">Google sign In</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;