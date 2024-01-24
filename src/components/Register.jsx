import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom'

function RegistrationForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        alert('Registration Successful!');
        navigate('/');
    };

    const handleClose = () => {
        navigate('/'); 
    };

    return (
        <Container maxWidth="sm">
            <Paper style={{ padding: '2rem', marginTop: '2rem' }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Registration Form
                </Typography>
                <form onSubmit={handleSubmit} noValidate>
                    <TextField
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                    />
                    <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                        fullWidth
                        style={{ marginTop: '24px' }}
                    >
                        Register
                    </Button>

                    <Button
                    onClick={handleClose}
                    color="secondary"
                    variant="contained"
                    fullWidth
                    style={{ marginTop: '12px' }}
                >
                    Close
                </Button>
                </form>
            </Paper>
        </Container>
    );
}

export default RegistrationForm;
