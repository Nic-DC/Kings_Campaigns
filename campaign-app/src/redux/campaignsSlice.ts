import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Campaign from "../types";

interface CampaignsState extends Array<Campaign> {}

const initialState: CampaignsState = [];

const campaignsSlice = createSlice({
  name: "campaigns",
  initialState,
  reducers: {
    addCampaigns: (state, action: PayloadAction<Campaign[]>) => {
      state.push(...action.payload);
    },
  },
});

export const { addCampaigns } = campaignsSlice.actions;

export default campaignsSlice.reducer;
