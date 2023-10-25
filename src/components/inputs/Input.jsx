/* eslint-disable react/prop-types */
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { FavoriteBorder } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";

const Input = ({ value, onChange, type, icon, placeholder }) => {
  return (
    <InputBase
      sx={{
        color: "#96a2ae",
        width: "100%",
        border: "1px solid #edf0f1",
        borderRadius: "10px",
        p: "8px 10px",
      }}
      startAdornment={
        <InputAdornment sx={{ color: "inherit", mr: "8px" }}>
          {icon === "search" && <SearchIcon />}
          {icon === "favorite" && <FavoriteBorder />}
        </InputAdornment>
      }
      type={type}
      placeholder={placeholder}
      value={value}
      inputProps={{ onChange: onChange }}
    />
  );
};

export default Input;
