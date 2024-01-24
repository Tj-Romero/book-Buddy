import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import Error from "./Error";
import Loading from "./Loading";
import { useGetBookQuery } from "../api/libraryApi";
import { useNavigate, useParams } from "react-router-dom";

const RenderBook = ({ book }) => {
  const navigate = useNavigate();

  const handleClick = ( ) => {
    navigate(-1);
  };

  return (
    <Card
      elevation={3}
      sx={{ width: 320, height: 600, m: 1, overflow: "scroll" }}
    >
      {/* get images to fit */}
      <CardMedia
        image={book.coverimage}
        alt={book.title}
        component="img"
        sx={{ height: 320, width: 320, objectFit: "fill" }}
      />
      <CardContent>
        <Typography variant="h5">{book.title}</Typography>
        <Typography variant="body2" fontWeight="bold">
          Author: {book.author}
        </Typography>
        <Typography variant="body2">
          Available: {book.available.toString()}
        </Typography>
        <Typography variant="body2">{book.description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          sx={{ width: "70%" }}
          onClick={ handleClick }
        >
          Return to Libary
        </Button>
      </CardActions>
    </Card>
  );
};

const Book = ({ book }) => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetBookQuery(id);

  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  } else if (!data) {
    return <Error error={error} />;
  } else {
    return <RenderBook book={data.book} />;
  }
};

export default Book;
