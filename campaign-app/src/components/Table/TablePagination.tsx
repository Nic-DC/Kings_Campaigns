import * as React from "react";
import TablePagination from "@mui/material/TablePagination";

interface TablePaginationDemoProps {
  currentPage: number;
  handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
  rowsPerPage: number;
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  totalPages: number;
  count: number;
  //   totalPagesSelected: number;
  //   countSelected: number;
}

const TablePaginationDemo: React.FC<TablePaginationDemoProps> = ({
  currentPage,
  handleChangePage,
  rowsPerPage,
  handleChangeRowsPerPage,
  totalPages,
  count,
}) => {
  return (
    <TablePagination
      component="div"
      count={count}
      page={currentPage}
      onPageChange={handleChangePage} // Update the prop name to 'onChange'
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage} // Update the prop name to 'onRowsPerPageChange'
    />
  );
};

export default TablePaginationDemo;
