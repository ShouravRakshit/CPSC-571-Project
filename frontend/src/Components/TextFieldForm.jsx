/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";

const TextFieldForm = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState();

  const handleSearch = () => {
    onSearch(inputValue);
  };

  return (
    <>
      <Paper
        component="form"
        sx={{
          p: "2px 30px",
          display: "flex",
          alignItems: "center",
          width: 500,
          backgroundColor: "#CCD3CA",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search Actors"
          inputProps={{ "aria-label": "search movies" }}
        />
        <IconButton
          type="button"
          sx={{ p: "16px" }}
          aria-label="search"
          onClick={handleSearch}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  );
};

export default TextFieldForm;
