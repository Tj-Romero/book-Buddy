import React, { useEffect, useState } from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { useGetBooksQuery } from "../api/libraryApi";
import BookCard from "./BookCard";
import Loading from "./Loading";
import Error from "./Error";
import bookLogo from "../assets/books.png";
import SearchBar from "./SearchBar";
import RegistrationForm from "./Register";

const RenderBooks = ({ books }) => {
  const [searchString, setSearchString] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(books);

  useEffect(() => {
    const latestFilter = books.filter((book) =>
      book.title.toLowerCase().includes(searchString.toLowerCase())
    );
    setFilteredBooks(latestFilter);
  }, [searchString]);

  return (
    <Stack sx={{ mt: 2, alignItems: "center" }}>
      <Typography textAlign="center" variant="h3" color="primary">
        <img id="logo-image" src={bookLogo} />
        The Library
      </Typography>
      <SearchBar setSearchString={setSearchString} />
      <Grid container>
        {filteredBooks.map((book) => (
          <BookCard book={book} key={book.id} />
        ))}
      </Grid>
    </Stack>
  );
};

/* TODO - 
    add your code to create a functional React component that displays all of
    the available books in the library's catalog. Fetch the book data from the provided API.
    Users should be able to click on an individual book to navigate to the SingleBook component and view its details.
*/
const Books = () => {
  const { data, error, isLoading } = useGetBooksQuery();

  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  } else if (!data) {
    return <Error error={error} />;
  } else {
    return <RenderBooks books={data.books} />;
  }
};

export default Books;
