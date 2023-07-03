import { CampaignState, CampaignActionTypes, ADD_CAMPAIGNS, UPDATE_FILTERS } from "./campaignTypes";

const initialState: CampaignState = {
  campaigns: [],
  filters: {
    name: "",
    startDate: null,
    endDate: null,
  },
};

export function campaignReducer(state = initialState, action: CampaignActionTypes): CampaignState {
  switch (action.type) {
    case ADD_CAMPAIGNS:
      return {
        ...state,
        campaigns: [...state.campaigns, ...action.payload],
      };
    case UPDATE_FILTERS:
      return {
        ...state,
        filters: action.payload,
      };
    default:
      return state;
  }
}
