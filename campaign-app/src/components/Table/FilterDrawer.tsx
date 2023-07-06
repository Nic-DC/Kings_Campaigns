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
  onStartDateChange: (date: Date | null) => void;
  onEndDateChange: (date: Date | null) => void;
}

const FilterDrawer: React.FC<FilterDrawerProps> = ({ open, onClose, onStartDateChange, onEndDateChange }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const anchor: Anchor = "right";

  const arrowText = "Filter results";
  const filterText = "Filter by Period";

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
    onStartDateChange(date);
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
    onEndDateChange(date);
  };

  const list = (anchor: Anchor) => (
    <Box sx={{ width: 350 }} role="presentation">
      <Box sx={{ display: "flex", alignItems: "center", marginTop: "1.5rem" }}>
        <StyledRightArrow onClick={onClose}>
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
