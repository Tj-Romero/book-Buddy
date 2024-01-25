import React, { useState, useEffect } from 'react';
import { TextField, Button, List, ListItem, CircularProgress, Typography } from '@mui/material';
import { useGetReservationsQuery } from '../api/libraryApi';

const Checkout = () => {
    const { data, error, isLoading } = useGetReservationsQuery();
    const [userId, setUserId] = useState('');
    const [books, setBooks] = useState([]);
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        if (data) {
            setBooks(data.books);
            setReservations(data.reservations);
        }
    }, [data]);

    if (isLoading) {
        return <CircularProgress />;
    }

    if (error) {
        return <Typography variant="h6">Error loading data</Typography>;
    }

    return (
        <div>
            <Typography variant="h4">Book Checkout System</Typography>
            <TextField 
                label="Enter User ID" 
                variant="outlined"
                value={userId} 
                onChange={(e) => setUserId(e.target.value)} 
                style={{ marginBottom: '20px' }}
            />
            <Typography variant="h5">Available Books</Typography>
            <List>
                {books.map(book => (
                    <ListItem key={book.id}>
                        {book.title} - {book.isAvailable ? 'Available' : 'Checked Out'}
                        {book.isAvailable && (
                            <Button 
                                variant="contained" 
                                color="primary" 
                            >
                                Check Out
                            </Button>
                        )}
                    </ListItem>
                ))}
            </List>
            <Typography variant="h5">Your Reservations</Typography>
            <List>
                {reservations.map(reservation => (
                    <ListItem key={reservation.id}>
                        {reservation.title} by {reservation.author}
                        <Button 
                            variant="contained" 
                            color="secondary" 
                        >
                            Return
                        </Button>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default Checkout;
