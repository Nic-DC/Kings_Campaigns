// // import * as React from "react";
// import { useState } from "react";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import ListItemText from "@mui/material/ListItemText";
// import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
// import { StyledRightArrow } from "./styles/styles";
// import DatePicker from "./DatePicker";

// type Anchor = "right";

// interface FilterDrawerProps {
//   open: boolean;
//   onClose: () => void;
// }

// const FilterDrawer: React.FC<FilterDrawerProps> = ({ open, onClose }) => {
//   const [startDate, setStartDate] = useState<Date | null>(null);
//   const [endDate, setEndDate] = useState<Date | null>(null);

//   const anchor: Anchor = "right";

//   const arrowText = "Filter results";
//   const filterText = "Filter by Period";

//   const handleStartDateChange = (date: Date | null) => {
//     setStartDate(date);
//   };

//   const handleEndDateChange = (date: Date | null) => {
//     setEndDate(date);
//   };

//   const list = (anchor: Anchor) => (
//     <Box sx={{ width: 250 }} role="presentation" onClick={onClose} onKeyDown={onClose}>
//       <Box sx={{ display: "flex", alignItems: "center", marginTop: "1.5rem" }}>
//         <StyledRightArrow>
//           <KeyboardArrowRightIcon />{" "}
//         </StyledRightArrow>
//         <ListItemText primary={arrowText} />
//       </Box>
//       <Box sx={{ marginLeft: "1rem", marginTop: "1.5rem" }}>
//         <ListItemText primary={filterText} />
//       </Box>
//       <Box sx={{ display: "flex", alignItems: "center", marginTop: "1.5rem" }}>
//         <DatePicker label="Start Date" onChange={handleStartDateChange} />
//         <DatePicker label="End Date" onChange={handleEndDateChange} />
//       </Box>
//     </Box>
//   );

//   return (
//     <div>
//       <Drawer anchor={anchor} open={open} onClose={onClose}>
//         {list(anchor)}
//       </Drawer>
//     </div>
//   );
// };

// export default FilterDrawer;
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { StyledRightArrow } from "./styles/styles";
import DatePicker from "./DatePicker";

type Anchor = "right";

interface FilterDrawerProps {
  open: boolean;
  onClose: () => void;
}

const FilterDrawer: React.FC<FilterDrawerProps> = ({ open, onClose }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const anchor: Anchor = "right";

  const arrowText = "Filter results";
  const filterText = "Filter by Period";

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
  };

  const list = (anchor: Anchor) => (
    <Box sx={{ width: 350 }} role="presentation">
      <Box sx={{ display: "flex", alignItems: "center", marginTop: "1.5rem" }}>
        <StyledRightArrow>
          <KeyboardArrowRightIcon />{" "}
        </StyledRightArrow>
        <ListItemText primary={arrowText} />
      </Box>
      <Box sx={{ marginLeft: "1rem", marginTop: "1.5rem" }}>
        <ListItemText primary={filterText} />
      </Box>
      <Box
        sx={{ display: "flex", alignItems: "center", marginTop: "1.5rem", paddingRight: "1rem", paddingLeft: "1rem" }}
      >
        <DatePicker label="Start Date" onChange={handleStartDateChange} />
        <DatePicker label="End Date" onChange={handleEndDateChange} />
      </Box>
    </Box>
  );

  return (
    <div>
      <Drawer anchor={anchor} open={open} onClose={onClose}>
        {list(anchor)}
      </Drawer>
    </div>
  );
};

export default FilterDrawer;
