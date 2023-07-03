import * as React from "react";
import TablePagination from "@mui/material/TablePagination";

interface TablePaginationDemoProps {
  currentPage: number;
  handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
  rowsPerPage: number;
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  totalPages: number;
  count: number;
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

// import * as React from "react";
// import TablePagination from "@mui/material/TablePagination";

// interface TablePaginationDemoProps {
//   currentPage: number;
//   handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
//   rowsPerPage: number;
//   handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
//   totalPages: number;
// }

// const TablePaginationDemo: React.FC<TablePaginationDemoProps> = ({
//   currentPage,
//   handleChangePage,
//   rowsPerPage,
//   handleChangeRowsPerPage,
//   totalPages,
// }) => {
//   return (
//     <TablePagination
//       component="div"
//       count={totalPages}
//       page={currentPage}
//       onPageChange={handleChangePage} // Update the prop name here
//       rowsPerPage={rowsPerPage}
//       onRowsPerPageChange={handleChangeRowsPerPage} // Update the prop name here
//     />
//   );
// };

// export default TablePaginationDemo;

// import * as React from "react";
// import TablePagination from "@mui/material/TablePagination";

// interface TablePaginationDemoProps {
//   currentPage: number;
//   handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
//   rowsPerPage: number;
//   handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
//   totalPages: number;
// }

// const TablePaginationDemo: React.FC<TablePaginationDemoProps> = ({
//   currentPage,
//   handleChangePage,
//   rowsPerPage,
//   handleChangeRowsPerPage,
//   totalPages,
// }) => {
//   return (
//     <TablePagination
//       component="div"
//       count={totalPages}
//       page={currentPage}
//       onPageChange={handleChangePage}
//       rowsPerPage={rowsPerPage}
//       onRowsPerPageChange={handleChangeRowsPerPage}
//     />
//   );
// };

// export default TablePaginationDemo;
