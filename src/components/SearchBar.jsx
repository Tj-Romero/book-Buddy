import React from "react";
import { Stack, TextField } from "@mui/material";

const SearchBar = ({ setSearchString }) => {
    
    
    return (
        <Stack alignItems="center" justifyContent="center" width="100%">
            <TextField 
                id="outlined-basic" 
                label="Search For A Book" 
                variant="outlined" 
                placeholder="What Book Are You Looking For?" 
                sx={{ width: "90%", mb: 2, mt:2 }}
                onChange={(event) => setSearchString(event.target.value)}    
            />
        </Stack>
    );
};

export default SearchBar;