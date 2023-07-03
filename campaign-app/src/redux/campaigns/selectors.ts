import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { CampaignState } from "./campaignTypes";

// Select the entire campaigns state
const campaignsState = (state: RootState) => state.campaigns;

// Derive the filtered campaigns from the state
export const selectFilteredCampaigns = createSelector(campaignsState, (campaignsState: CampaignState) => {
  const { campaigns, filters } = campaignsState;

  // Convert filters startDate and endDate to Date objects for comparison
  const startDate = filters.startDate ? new Date(filters.startDate) : null;
  const endDate = filters.endDate ? new Date(filters.endDate) : null;

  // Filter campaigns based on filters
  return campaigns.filter((campaign) => {
    const campaignStartDate = new Date(campaign.startDate);
    const campaignEndDate = new Date(campaign.endDate);

    return (!startDate || campaignStartDate >= startDate) && (!endDate || campaignEndDate <= endDate);
  });
});
