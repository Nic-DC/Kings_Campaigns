import React from "react";
import Campaign from "../../types";
import { TableRow, TableCell } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { StyledTableCell, StyledTableRow } from "./styles";

interface CampaignRowProps {
  campaign: Campaign;
}
const getStatus = (startDate: string, endDate: string) => {
  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (start > now) {
    return "Active";
  } else if (end > now) {
    return "Active";
  } else {
    return "Inactive";
  }
};

const CampaignRow: React.FC<CampaignRowProps> = ({ campaign }) => {
  const status = getStatus(campaign.startDate, campaign.endDate);

  return (
    <StyledTableRow>
      <StyledTableCell align="left">{campaign.name}</StyledTableCell>
      <StyledTableCell align="left">
        {status === "Active" ? (
          <CheckCircleIcon style={{ color: "green", fontSize: "small", marginRight: 2 }} />
        ) : (
          <CancelIcon style={{ color: "red", fontSize: "small", marginRight: 2 }} />
        )}
        {status}
      </StyledTableCell>
      <StyledTableCell align="right">{campaign.startDate}</StyledTableCell>
      <StyledTableCell align="right">{campaign.endDate}</StyledTableCell>
      <StyledTableCell align="right">{campaign.Budget}</StyledTableCell>
    </StyledTableRow>
  );
};

export default CampaignRow;

// import React from "react";
// import Campaign from "../../types";
// import { StyledStyledStyledTableRow, TableCell } from "@mui/material";
// import CancelIcon from "@mui/icons-material/Cancel";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// interface CampaignRowProps {
//   campaign: Campaign;
// }

// const getStatus = (startDate: string, endDate: string) => {
//   const now = new Date();
//   const start = new Date(startDate);
//   const end = new Date(endDate);

//   if (start > now) {
//     return "Active";
//   } else if (end > now) {
//     return "Active";
//   } else {
//     return "Inactive";
//   }
// };

// const CampaignRow: React.FC<CampaignRowProps> = ({ campaign }) => {
//   const status = getStatus(campaign.startDate, campaign.endDate);

//   return (
//     <StyledStyledTableRow>
//       <TableCell align="left">{campaign.name}</TableCell>
//       <TableCell align="left">
//         {status === "Active" ? (
//           <CheckCircleIcon style={{ color: "green", fontSize: "small", marginRight: 2 }} />
//         ) : (
//           <CancelIcon style={{ color: "red", fontSize: "small", marginRight: 2 }} />
//         )}
//         {status}
//       </TableCell>
//       <TableCell align="right">{campaign.startDate}</TableCell>
//       <TableCell align="right">{campaign.endDate}</TableCell>
//       <TableCell align="right">{campaign.Budget}</TableCell>
//     </StyledStyledTableRow>
//   );
// };

// export default CampaignRow;
