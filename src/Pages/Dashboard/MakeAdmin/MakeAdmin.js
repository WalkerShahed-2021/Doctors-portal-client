import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Alert, Button } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const [sucess, setSucess] = useState(false);
    const {token} = useAuth();

    const handleOnBlur = e => {
      setEmail(e.target.value);
 }
    const handleAdminSubmit = e => {
        const user = {email};
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization' : `Bearer ${token}`,
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                setSucess(true);
            }
            console.log(data);
        })



        e.preventDefault();
    }

    return (
        <div className='App'>
            <h1>Make an Admin</h1>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{width: '50% '}}
                    id="standard-basic"
                    label="Enter your admin email" variant="standard"
                    type="email"
                    onBlur={handleOnBlur}
                />
                <Button type='submit' variant='contained'>Make Admin</Button>
            </form>
            {sucess && <Alert severity="success">Make Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;