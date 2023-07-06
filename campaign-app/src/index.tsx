import ReactDOM from "react-dom/client";
import App from "./App";
import Campaign from "./types";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { addCampaignsRef } from "./context/CampaignContext";
import { campaignsRef } from "./context/CampaignContext";

declare global {
  interface Window {
    AddCampaigns: (newCampaigns: Campaign[]) => void;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <App />
  </LocalizationProvider>
);

window.AddCampaigns = function (newCampaigns: Campaign[]) {
  const validCampaigns = newCampaigns.filter((campaign) => {
    const startDate = new Date(campaign.startDate);
    const endDate = new Date(campaign.endDate);

    if (endDate < startDate) {
      console.error(
        `Campaign ${campaign.name} has an end date earlier than the start date. This campaign will not be added.`
      );
      return false;
    }

    if (campaignsRef.current.some((existingCampaign) => existingCampaign.id === campaign.id)) {
      console.error(`Campaign with id ${campaign.id} already exists. This campaign will not be added.`);
      return false;
    }

    return true;
  });

  addCampaignsRef.current(validCampaigns);
};
