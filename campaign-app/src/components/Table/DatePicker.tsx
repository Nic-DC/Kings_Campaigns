import React, { useState } from "react";
import { DatePicker as MuiDatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { TextField, TextFieldProps } from "@mui/material";

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
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiDatePicker
        label={label}
        value={selectedDate}
        onChange={handleDateChange}
        renderInput={(params: TextFieldProps) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
