import React, { ChangeEvent } from "react";
import { AppBar, Toolbar, Typography, TextField, Box, InputAdornment } from "@mui/material";
import { styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";

const SearchTextField = styled(TextField)({
  "& input": {
    color: "white",
  },
  "& .MuiSvgIcon-root": {
    color: "white",
  },
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#525FA6",
    height: "2.5rem",
    "& fieldset": {
      border: "none",
    },
  },
  width: 200,
  transition: "width 0.35s ease-in-out", // Smooth transition effect
  "&:focus-within": {
    width: 300,
  },
});

interface NavBarProps {
  onSearch: (value: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onSearch }) => {
  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onSearch(value);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#3f51b5" }}>
      <Toolbar sx={{ alignItems: "center", justifyContent: "space-between" }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
          Campaigns
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <SearchTextField
            variant="outlined"
            placeholder="Search"
            onChange={handleSearchInputChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
