import React, { useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BookCard = ({ book }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNavigate = () => {
    navigate(`/${book.id}`);
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card elevation={3} sx={{ width: 320, height: 590, m:2}}>
        <CardMedia image={book.coverimage} alt={book.title} component="img" sx={{height: 350, width:"100%", objectFit: "fill"}} />
        <CardContent>
          <Typography variant="h5">{book.title}</Typography>
          <Typography variant="body2" fontWeight="bold">Author: {book.author}</Typography>
          <Typography variant="body2">Available: {book.available.toString()}</Typography>
          <Typography variant="body2">Click Button For Details</Typography>
          <CardActions>
          <Button variant="contained" color="primary" sx={{ width: "70%" }} onClick={handleClickOpen}>See Details</Button>
        </CardActions>
        </CardContent>
       
      </Card>

      <Dialog open={open} onClose={handleClose} aria-labelledby="dialog-title">
        <DialogTitle id="dialog-title">{book.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Author: {book.author}<br />
            Available: {book.available.toString()}<br />
            Description: {book.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Close</Button>
          <Button onClick={handleNavigate} color="primary">Go to Details</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default BookCard;
