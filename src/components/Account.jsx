import { useNavigate } from 'react-router-dom'; // Updated import
import { Button } from '@mui/material';
import Loading from './Loading';
import Error from './Error';
import { useGetAccountQuery } from '../api/libraryApi';

const AccountDetails = () => {
    const navigate = useNavigate(); // Updated line
    const token = localStorage.getItem('token');
    console.log(token);
    const { data: userData, error, isLoading } = useGetAccountQuery(token);

    const handleLogin = () => {
        navigate('/login'); // Updated line
    };

    const handleSignup = () => {
        navigate('/signup'); // Updated line
    };

    if (isLoading) {
        return <Loading isLoading={isLoading} />;
    }

    if (error) {
        return <Error error={error} />;
    }

    if (!userData) {
        return (
            <div>
                <p>Please log in or create an account to view account details.</p>
                <Button variant="contained" color="primary" onClick={handleLogin}>
                    Log In
                </Button>
                <Button variant="contained" color="secondary" onClick={handleSignup}>
                    Sign Up
                </Button>
            </div>
        );
    }

    return <AccountDetails user={userData} />;
};

export default AccountDetails;
