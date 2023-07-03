export const ADD_CAMPAIGNS = "ADD_CAMPAIGNS";
export const UPDATE_FILTERS = "UPDATE_FILTERS";

interface AddCampaignsAction {
  type: typeof ADD_CAMPAIGNS;
  payload: Campaign[];
}

interface UpdateFiltersAction {
  type: typeof UPDATE_FILTERS;
  payload: Filters;
}

export type CampaignActionTypes = AddCampaignsAction | UpdateFiltersAction;

export interface Campaign {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  Budget: number;
}

export interface Filters {
  name?: string;
  startDate?: Date | null;
  endDate?: Date | null;
}

export interface CampaignState {
  campaigns: Campaign[];
  filters: Filters;
}
