import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Alert, Button, Container, TextField, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png';
import useAuth from '../../../Hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';
import { useHistory } from 'react-router-dom';



const Register = () => {
    const [loginData, setLoginData] = useState({});
    const {user, RegisterUser, isLoading, authError} = useAuth();
    const history = useHistory();

    const handleOnBlur = e => {
      const filed = e.target.name;
      const value = e.target.value;
     const newLoginData = {...loginData};
     newLoginData[filed] = value;
     setLoginData(newLoginData);
    } 

    const handleLoginSubmit = (e) => {
        if(loginData.password !== loginData.password2){
            alert('password dit not match')
            return
        }
        RegisterUser(loginData.email, loginData.password, loginData.name, history)
         e.prevantDefault();
    }
    return (
        <Container>
        <Grid container spacing={2}>
            <Grid item sx={{mt:10,}} xs={12} md={6}>
                <Typography variant="body1">
                    Register
                </Typography>
                { !isLoading &&
                    <form onSubmit={handleLoginSubmit}>
                    <TextField
                        sx={{width: '75%', m:1,}}
                        id="standard-basic"
                        label="Your Name"
                        type="name"
                        name="name"
                        onBlur={handleOnBlur}
                        variant="standard"
                    /> <br />
                    <TextField
                        sx={{width: '75%', m:1,}}
                        id="standard-basic"
                        label="Your Email"
                        type="email"
                        name="email"
                        onBlur={handleOnBlur}
                        variant="standard"
                    /> <br />

                    <TextField
                        sx={{width: '75%', m:1,}}
                        id="standard-password-input"
                        label="Your Password"
                        type="password"
                        name="password"
                        onBlur={handleOnBlur}
                        autoComplete="current-password"
                        variant="standard"
                    /> <br />
                    <TextField
                        sx={{width: '75%', m:1,}}
                        id="standard-password-input"
                        label="Re type Your Password"
                        type="password"
                        name="password2"
                        onBlur={handleOnBlur}
                        autoComplete="current-password"
                        variant="standard"
                    /> <br />
                    <Button type='submit' sx={{width: '75%', m:1,}} variant='contained'>Register</Button>
                    <NavLink style={{textDecoration: 'none'}} to="/login">
                       <Button variant="text">Already Register? Please login</Button>
                    </NavLink>
                </form>
                }
                {isLoading && <CircularProgress />}
                {user?.email && <Alert severity="success">user createed  successfully!</Alert>}
                {authError && <Alert severity="error">{authError}</Alert>}
            </Grid>
            <Grid item xs={12} md={6}>
                <img style={{ width: '100%' }} src={login} alt="" />
            </Grid>
        </Grid>
    </Container>
    );
};

export default Register;