import { styled } from "@mui/system";
import { TableRow, TableCell } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FilterListIcon from "@mui/icons-material/FilterList";

export const StyledTableRow = styled(TableRow)({
  height: "3rem",
});

export const StyledTableCell = styled(TableCell)({
  padding: "0px 16px",
});

export const StyledRightArrow = styled(IconButton)({
  color: "#3f3f3f",
  marginLeft: "1rem",
  marginRight: "1rem",
});

export const StyledFilterButton = styled(IconButton)({
  // color: "#3f3f3f",
  // marginLeft: "1rem",
  // marginRight: "1rem",
});
