import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectFilteredCampaigns } from "../../redux/campaigns/selectors";
import FilterDrawer from "./FilterDrawer";
import CampaignRow from "./CampaignRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Campaign from "../../types";
import campaigns from "../../data/campaigns";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
import FilterListIcon from "@mui/icons-material/FilterList";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TablePaginationDemo from "./TablePagination";

const CampaignTable: React.FC = () => {
  const initialCampaigns = campaigns;

  const selectedCampaigns: Campaign[] = useSelector(selectFilteredCampaigns);

  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0);
  };

  const paginatedCampaigns = initialCampaigns.slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage);

  return (
    <Box m={3}>
      <FilterDrawer />
      <TableContainer component={Paper}>
        <Table>
          <TableHead style={{ color: alpha("#000", 0.3), fontSize: "150%" }}>
            <TableRow>
              <TableCell>
                <FilterListIcon />
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell align="right">
                <MoreVertIcon />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold", color: "grey", fontSize: "0.75rem" }}>Name</TableCell>
              <TableCell style={{ fontWeight: "bold", color: "grey", fontSize: "0.75rem" }}>Status</TableCell>
              <TableCell align="right" style={{ fontWeight: "bold", color: "grey", fontSize: "0.75rem" }}>
                Start Date
              </TableCell>
              <TableCell align="right" style={{ fontWeight: "bold", color: "grey", fontSize: "0.75rem" }}>
                End Date
              </TableCell>
              <TableCell align="right" style={{ fontWeight: "bold", color: "grey", fontSize: "0.75rem" }}>
                Budget
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedCampaigns.map((campaign) => (
              <CampaignRow key={campaign.id} campaign={campaign} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePaginationDemo
        currentPage={currentPage}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        totalPages={Math.ceil(initialCampaigns.length / rowsPerPage)}
        count={initialCampaigns.length}
      />
    </Box>
  );
};

export default CampaignTable;

// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { selectFilteredCampaigns } from "../../redux/campaigns/selectors";
// import FilterDrawer from "./FilterDrawer";
// import CampaignRow from "./CampaignRow";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Campaign from "../../types";
// import campaigns from "../../data/campaigns";
// import Box from "@mui/material/Box";
// import { alpha } from "@mui/material/styles";
// import FilterListIcon from "@mui/icons-material/FilterList";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import TablePaginationDemo from "./TablePagination";

// const CampaignTable: React.FC = () => {
//   const initialCampaigns = campaigns;
//   let totalPages = campaigns.length;

//   const selectedCampaigns: Campaign[] = useSelector(selectFilteredCampaigns);

//   const [currentPage, setCurrentPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);

//   const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
//     setCurrentPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setCurrentPage(0);
//   };

//   return (
//     <Box m={3}>
//       <FilterDrawer />
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead style={{ color: alpha("#000", 0.3), fontSize: "150%" }}>
//             <TableRow>
//               <TableCell>
//                 <FilterListIcon />
//               </TableCell>
//               <TableCell></TableCell>
//               <TableCell></TableCell>
//               <TableCell></TableCell>
//               <TableCell align="right">
//                 <MoreVertIcon />
//               </TableCell>
//             </TableRow>
//           </TableHead>
//           <TableHead>
//             <TableRow>
//               <TableCell style={{ fontWeight: "bold", color: "grey", fontSize: "0.75rem" }}>Name</TableCell>
//               <TableCell style={{ fontWeight: "bold", color: "grey", fontSize: "0.75rem" }}>Status</TableCell>
//               <TableCell align="right" style={{ fontWeight: "bold", color: "grey", fontSize: "0.75rem" }}>
//                 Start Date
//               </TableCell>
//               <TableCell align="right" style={{ fontWeight: "bold", color: "grey", fontSize: "0.75rem" }}>
//                 End Date
//               </TableCell>
//               <TableCell align="right" style={{ fontWeight: "bold", color: "grey", fontSize: "0.75rem" }}>
//                 Budget
//               </TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {initialCampaigns.map((campaign) => (
//               <CampaignRow key={campaign.id} campaign={campaign} />
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePaginationDemo
//         currentPage={currentPage}
//         rowsPerPage={rowsPerPage}
//         handleChangePage={handleChangePage}
//         handleChangeRowsPerPage={handleChangeRowsPerPage}
//         totalPages={totalPages}
//       />
//     </Box>
//   );
// };

// export default CampaignTable;
