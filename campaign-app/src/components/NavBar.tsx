import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { AppBar, Toolbar, Typography, TextField, Box, InputAdornment } from "@mui/material";
import { styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import { updateFilters } from "../redux/campaigns/campaignsActions";

const SearchTextField = styled(TextField)({
  "& input": {
    color: "white",
  },
  "& .MuiSvgIcon-root": {
    color: "white",
  },
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#3f51b5",
    height: "70%",
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

const NavBar: React.FC = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    dispatch(updateFilters({ name: value }));
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ alignItems: "center" }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Campaigns
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" }, alignSelf: "center" }}>
          <SearchTextField
            variant="outlined"
            placeholder="Search"
            onChange={handleSearchChange}
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

// import React from "react";
// import { AppBar, Toolbar, Typography, TextField, Box, InputAdornment } from "@mui/material";
// import { styled } from "@mui/system";
// import SearchIcon from "@mui/icons-material/Search";

// interface NavBarProps {
//   handleSearch: (searchText: string) => void;
// }

// const SearchTextField = styled(TextField)({
//   "& input": {
//     color: "white",
//   },
//   "& .MuiSvgIcon-root": {
//     color: "white",
//   },
//   "& .MuiOutlinedInput-root": {
//     backgroundColor: "#3f51b5",
//     height: "70%",
//     "& fieldset": {
//       border: "none",
//     },
//   },
//   width: 200,
//   transition: "width 0.35s ease-in-out", // Smooth transition effect
//   "&:focus-within": {
//     width: 300,
//   },
// });

// const NavBar: React.FC<NavBarProps> = ({ handleSearch }) => {
//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     handleSearch(event.target.value);
//   };

//   return (
//     <AppBar position="static">
//       <Toolbar sx={{ alignItems: "center" }}>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           Campaigns
//         </Typography>
//         <Box sx={{ display: { xs: "none", md: "flex" }, alignSelf: "center" }}>
//           <SearchTextField
//             variant="outlined"
//             placeholder="Search"
//             onChange={handleSearchChange}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <SearchIcon />
//                 </InputAdornment>
//               ),
//             }}
//           />
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default NavBar;
