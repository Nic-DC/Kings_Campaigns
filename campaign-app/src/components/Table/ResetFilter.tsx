import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { StyledButton } from "./styles/styles";

export interface ResetFilterProps {
  open: boolean;
  onClose: () => void;
  onClearFilters: () => void;
}

const ResetFilter: React.FC<ResetFilterProps> = ({ open, onClose, onClearFilters }) => {
  const handleClearFilters = () => {
    onClearFilters();
  };
  return (
    <Dialog onClose={onClose} open={open}>
      <StyledButton onClick={handleClearFilters}>Clear all filters</StyledButton>
    </Dialog>
  );
};

interface ResetFilterDemoProps {
  open: boolean;
  onClearFilters: () => void;
}
const ResetFilterDemo: React.FC<ResetFilterDemoProps> = ({ open: propOpen, onClearFilters }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ResetFilter open={propOpen} onClose={handleClose} onClearFilters={onClearFilters} />
    </div>
  );
};

export default ResetFilterDemo;
