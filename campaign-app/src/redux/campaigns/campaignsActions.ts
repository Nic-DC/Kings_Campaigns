import { Campaign, Filters, CampaignActionTypes, ADD_CAMPAIGNS, UPDATE_FILTERS } from "./campaignTypes";

export function addCampaigns(campaigns: Campaign[]): CampaignActionTypes {
  return {
    type: ADD_CAMPAIGNS,
    payload: campaigns,
  };
}

export function updateFilters(filters: Filters): CampaignActionTypes {
  return {
    type: UPDATE_FILTERS,
    payload: filters,
  };
}
