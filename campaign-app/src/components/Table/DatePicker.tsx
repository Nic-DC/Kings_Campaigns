import React, { useState } from "react";
import { MobileDatePicker } from "@mui/x-date-pickers";

interface DatePickerProps {
  label: string;
  onChange: (date: Date | null) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ label, onChange }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    onChange(date);
  };

  return (
    <MobileDatePicker
      sx={{
        ".MuiInputBase-root": {
          border: "none",
          marginRight: "0.25rem",
        },
      }}
      label={label}
      value={selectedDate}
      onChange={handleDateChange}
    />
  );
};

export default DatePicker;
