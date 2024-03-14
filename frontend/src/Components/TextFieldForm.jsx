/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";

const TextFieldForm = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState(""); // Initialize empty string

  const handleSearch = (event) => {
    event.preventDefault(); // Prevent default form submission
    onSearch(inputValue.trim()); // Trim the input value to remove whitespace
    setInputValue(""); // Reset input field after search
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSearch} 
      sx={{ p: "2px 30px",display: "flex",alignItems: "center",width: 500,backgroundColor: "#67C6E3", }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }} value={inputValue}onChange={(e) => setInputValue(e.target.value)} placeholder="Search Actors" inputProps={{ "aria-label": "search movies" }}
      />
      <IconButton type="submit" sx={{ p: "16px" }} aria-label="search">
      <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default TextFieldForm;