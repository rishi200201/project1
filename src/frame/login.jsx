import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Link } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import KeyIcon from '@mui/icons-material/Key';
import LockIcon from '@mui/icons-material/Lock'; // Import LockIcon from Material-UI icons

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ marginTop: 0, border: '1px solid #ccc', borderRadius: '5px', padding: '20px' }}>
      <Box sx={{ bgcolor: '#2196f3', borderRadius: '5px', padding: '10px', marginBottom: '20px' }}>
        <Typography component="h1" variant="h5" sx={{ color: '#fff', textAlign: 'center' }}>
          Student Portal
        </Typography>
      </Box>
      
      <Box sx={{ mt: 2, mb: 1 }}>
        {/* Placeholder for CAPTCHA component */}
      </Box>
      
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="NetID"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={handleEmailChange}
          InputProps={{
            startAdornment: (
              <AccountBoxIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            ),
          }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={handlePasswordChange}
          InputProps={{
            startAdornment: (
              <KeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            ),
          }}
        />
        <Link href="#" variant="body2" sx={{ alignSelf: 'flex-end' }}>
          Forgot Password?
        </Link>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          startIcon={<LockIcon />} // LockIcon added to the start of the button
          sx={{ mt: 3, mb: 2 }}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
