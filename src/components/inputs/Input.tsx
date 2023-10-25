// CustomSearchInput.js

import React from "react";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { FavoriteBorder } from "@mui/icons-material";

const Input = ({ value, onChange, type, icon, placeholder }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        padding: "8px 12px",
        backgroundColor: "#ffffff",
        borderRadius: "4px",
        color: "#a4b0ba",
        border: "1px solid #a4b0ba",
        borderRadius: "10px",
      }}
    >
      {icon === "search" && <SearchIcon />}
      {icon === "favorite" && <FavoriteBorder />}

      <InputBase
        type={type}
        placeholder={placeholder}
        style={{ marginLeft: "8px", flex: 1 }}
        inputProps={{ "aria-label": "search" }}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
