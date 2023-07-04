import Campaign from "../types";
import { useState } from "react";

let AddCampaigns: ((rows: Campaign[]) => void) | undefined;

const useCampaigns = () => {
  const [rows, setRows] = useState<Campaign[]>([]);

  const addRows = (rows: Campaign[]) => {
    const validRows = rows.filter((row) => new Date(row.endDate) >= new Date(row.startDate));

    if (validRows.length > 0) {
      setRows((prevRows) => [...prevRows, ...validRows]);
    } else {
      console.log("Error: One or more campaigns have an endDate before the startDate.");
    }
  };

  AddCampaigns = addRows;

  return { rows };
};

export default useCampaigns;

// Declare AddCampaigns in the global scope
declare global {
  interface Window {
    AddCampaigns?: typeof AddCampaigns;
  }
}

// Attach AddCampaigns to the window object
if (typeof window !== "undefined") {
  window.AddCampaigns = AddCampaigns;
}

// import Campaign from "../types";
// import { useState } from "react";

// let AddCampaigns: ((rows: Campaign[]) => void) | undefined;

// const useCampaigns = () => {
//   const [rows, setRows] = useState<Campaign[]>([]);

//   const AddRows = (rows: Campaign[]) => {
//     const validRows = rows.filter((row) => new Date(row.endDate) >= new Date(row.startDate));

//     if (validRows.length > 0) {
//       setRows((prevRows) => [...prevRows, ...validRows]);
//     } else {
//       console.log("Error: One or more campaigns have an endDate before the startDate.");
//     }
//   };

//   AddCampaigns = AddRows;

//   return { rows };
// };

// export default useCampaigns;
// export { AddCampaigns };

// import Campaign from "../types";
// import { useState } from "react";

// const useCampaigns = () => {
//   const [rows, setRows] = useState<Campaign[]>([]);

//   const AddCampaigns = (newRows: Campaign[]) => {
//     const validRows = newRows.filter((row) => new Date(row.endDate) >= new Date(row.startDate));

//     if (validRows.length > 0) {
//       const lastId = rows.length > 0 ? rows[rows.length - 1].id : 0;
//       const rowsWithIds = validRows.map((row, index) => ({ ...row, id: lastId + index + 1 }));
//       setRows((prevRows) => [...prevRows, ...rowsWithIds]);
//     } else {
//       console.log("Error: One or more campaigns have an endDate before the startDate.");
//     }
//   };

//   return { rows, AddCampaigns };
// };

// export default useCampaigns;

// import Campaign from "../types";
// import { useState } from "react";

// const useCampaigns = () => {
//   const [rows, setRows] = useState<Campaign[]>([]);

//   const AddCampaigns = (rows: Campaign[]) => {
//     const validRows = rows.filter((row) => new Date(row.endDate) >= new Date(row.startDate));

//     if (validRows.length > 0) {
//       setRows((prevRows) => [...prevRows, ...validRows]);
//     } else {
//       console.log("Error: One or more campaigns have an endDate before the startDate.");
//     }
//   };

//   return { rows, AddCampaigns };
// };

// export default useCampaigns;
// // AddCampaigns
