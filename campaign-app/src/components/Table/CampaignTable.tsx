import React, { useState } from "react";
import CampaignRow from "./CampaignRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Campaign from "../../types";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
import FilterListIcon from "@mui/icons-material/FilterList";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TablePaginationDemo from "./TablePagination";
import campaigns from "../../data/campaigns";
import FilterDrawer from "./FilterDrawer";
import { StyledButton } from "./styles/styles";
import Tooltip from "@mui/material/Tooltip";
import ResetFilterDemo from "./ResetFilter";
import { CampaignContext } from "../../context/CampaignContext";
import { useContext } from "react";

interface CampaignTableProps {
  searchValue: string;
  startDate: Date | null;
  endDate: Date | null;
  onStartDateChange: (date: Date | null) => void; // new
  onEndDateChange: (date: Date | null) => void; // new
  onSearchValueChange: (value: string) => void;
  onClearFilters: (value: string) => void;
}

const CampaignTable: React.FC<CampaignTableProps> = ({
  searchValue,
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  onSearchValueChange,
  onClearFilters,
}) => {
  const [rows, setRows] = useState<Campaign[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [resetFilterOpen, setResetFilterOpen] = useState(false);
  const [filters, setFilters] = useState({ searchValue: "", startDate: null, endDate: null });

  const { campaigns, addCampaigns } = useContext(CampaignContext);

  const addRows = (newRows: Campaign[]) => {
    setRows((prevRows) => [...prevRows, ...newRows]);
  };

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0);
  };

  const handleFilterClick = () => {
    setFilterDrawerOpen(true);
  };

  const filteredCampaigns = campaigns.filter((campaign) => {
    const isNameMatched = campaign.name.toLowerCase().includes(searchValue.toLowerCase());
    const campaignStartDate = new Date(campaign.startDate);
    const campaignEndDate = new Date(campaign.endDate);
    const isDateInRange = (!startDate || campaignStartDate >= startDate) && (!endDate || campaignEndDate <= endDate);
    return isNameMatched && isDateInRange;
  });

  const paginatedCampaigns = filteredCampaigns.slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage);

  const handleFilterDrawerClose = () => {
    setFilterDrawerOpen(false);
  };

  const handleMoreVertIconClick = () => {
    setResetFilterOpen(true);
  };

  const handleResetFilters = () => {
    onSearchValueChange(""); // assumes you have a callback for changing searchValue
    onStartDateChange(null);
    onEndDateChange(null);
    setResetFilterOpen(false);
  };

  return (
    <Box m={3}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead style={{ color: alpha("#000", 0.3), fontSize: "150%" }}>
            <TableRow>
              <TableCell>
                <Tooltip title="Filter Results">
                  <StyledButton onClick={handleFilterClick}>
                    <FilterListIcon />
                  </StyledButton>
                </Tooltip>
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell align="right">
                <Tooltip title="Filter Menu">
                  <StyledButton onClick={handleMoreVertIconClick}>
                    <MoreVertIcon />
                  </StyledButton>
                </Tooltip>
                <ResetFilterDemo open={resetFilterOpen} onClearFilters={handleResetFilters} />
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
        totalPages={Math.ceil(filteredCampaigns.length / rowsPerPage)}
        count={filteredCampaigns.length}
      />
      <FilterDrawer
        open={filterDrawerOpen}
        onClose={handleFilterDrawerClose}
        onStartDateChange={onStartDateChange}
        onEndDateChange={onEndDateChange}
      />
    </Box>
  );
};

export default CampaignTable;
