import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import React from "react";

const SingleBook = ({ book }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
    <Card elevation={3} sx={{ width: 320, height: 600, m:1, overflow: "scroll"}}>
      {/* get images to fit */}
        <CardMedia image={book.coverimage} alt={book.title} component="img" sx={{height: 320, width: 320, objectFit: "fill"}} />
        <CardContent>
            <Typography variant="h5">{book.title}</Typography>
            <Typography variant="body2" fontWeight="bold">Author: {book.author}</Typography>
            <Typography variant="body2">Available: {book.available.toString()}</Typography>
            <Typography variant="body2">{book.description}</Typography>
        </CardContent>
    </Card>
    </Grid>
  );
};

export default SingleBook;
