import * as React from "react";
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
  const anchor: Anchor = "right";

  const arrowText = "Filter results";
  const filterText = "Filter by Period";

  const handleStartDateChange = (date: Date | null) => {
    // Handle start date change here
  };

  const handleEndDateChange = (date: Date | null) => {
    // Handle end date change here
  };

  const list = (anchor: Anchor) => (
    <Box sx={{ width: 250 }} role="presentation" onClick={onClose} onKeyDown={onClose}>
      <Box sx={{ display: "flex", alignItems: "center", marginTop: "1.5rem" }}>
        <StyledRightArrow>
          <KeyboardArrowRightIcon />{" "}
        </StyledRightArrow>
        <ListItemText primary={arrowText} />
      </Box>
      <Box sx={{ marginLeft: "1rem", marginTop: "1.5rem" }}>
        <ListItemText primary={filterText} />
        <DatePicker label="Start Date" onChange={handleStartDateChange} />
        <DatePicker label="End Date" onChange={handleEndDateChange} />
      </Box>
      <Box></Box>
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
