import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctors = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [img, setImg] = useState(null);



    const handleSubmit = e => {
        const name =
            e.preventDefault()
        if (!img) {
            return;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('img', img);

        fetch('http://localhost:5000/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success:', data);
            })
         
    }


    return (
        <div className='App'>
            <h1>Add a Doctors</h1>
            <div>
                <TextField
                    sx={{ width: '50%' }}
                    onChange={e => setName(e.target.value)}
                    label="Name"
                    required
                    variant="standard" /> <br />
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    required
                    variant="standard" /> <br />
                <Input
                    accept="image/*"
                    onChange={e => setImg(e.target.files[0])}
                    multiple type="file" />  <br />
                <Button onClick={handleSubmit} variant="contained" type='submit'>
                    Add Doctor
                </Button>
            </div>
        </div>
    );
};

export default AddDoctors;