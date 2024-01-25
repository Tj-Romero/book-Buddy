/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Navigation({ isLoggedIn, onLogout }) {
  const location = useLocation();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          BookBuddy
        </Typography>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button color="inherit">Home</Button>
        </Link>
        {isLoggedIn ? (
          <>
            <Link to="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Button color="inherit">Dashboard</Button>
            </Link>
            <Button color="inherit" onClick={onLogout}>Logout</Button>
          </>
        ) : (
          <>
            {location.pathname !== '/login' && (
              <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button color="inherit">Login</Button>
              </Link>
            )}
            {location.pathname !== '/register' && (
              <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button color="inherit">Register</Button>
              </Link>
            )}
             {location.pathname !== '/checkout' && (
              <Link to="/checkout" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button color="inherit">Checkout</Button>
              </Link>
            )}
            {location.pathname !== '/account' && (
              <Link to="/account" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button color="inherit">Account</Button>
              </Link>
            )}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
