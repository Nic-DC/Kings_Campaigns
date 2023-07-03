import React from "react";
import { TextField, Box } from "@mui/material";
import { DateRangePicker, DateRange } from "@mui/x-date-pickers-pro";
import { useDebouncedCallback } from "use-debounce";
import Campaign from "../types";

interface FilterBarProps {
  setFilterText: (filterText: string) => void;
  setDateRange: (dateRange: [Date | null, Date | null]) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ setFilterText, setDateRange }) => {
  const [dateRange, setDateRangeInternal] = React.useState<[Date | null, Date | null]>([null, null]);

  const debounced = useDebouncedCallback((value: string) => {
    setFilterText(value);
  }, 300);

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    debounced(event.target.value);
  };

  //   const handleDateChange = (newDateRange: [Date | null, Date | null]) => {
  const handleDateChange = (newDateRange: DateRange<Date>) => {
    setDateRangeInternal(newDateRange);
    setDateRange(newDateRange);
  };

  return (
    <Box display="flex" justifyContent="space-between" m={2}>
      <TextField label="Search" variant="outlined" onChange={handleTextChange} />
      <DateRangePicker />
      {/* <DateRangePicker value={dateRange} onChange={handleDateChange} /> */}
    </Box>
  );
};

export default FilterBar;
